import fastify from "fastify";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import scalarApiReference from "@scalar/fastify-api-reference";
import fastifyCors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import fastifyMultipart from "@fastify/multipart";
import fastifyRedis from "@fastify/redis";
import fastifySession from "@fastify/session";
import fastifyCookie from "@fastify/cookie";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import { redis } from "./config/redis.js";
import { imageRoutes } from "./modules/image/image.routes.js";
import { userRoutes } from "./modules/user/user.routes.js";
import { adminRoutes } from "./modules/admin/admin.routes.js";
import { uploadRoutes } from "./modules/upload/upload.routes.js";
import { Client, GatewayIntentBits, Partials } from "discord.js";
import oauth2 from "@fastify/oauth2";
import { handleMessageCreate, handleReactionAdd } from "./bot/events.js";
import { authRoutes } from "./modules/user/auth.routes.js";

declare module 'fastify' {
  interface FastifyInstance {
    discordOAuth2: any;
  }
}

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = fastify({
    logger: true,
});

// Zod Type Provider
server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

// --- Core Plugins Registration ---

await server.register(fastifyCors, {
    origin: "*",
});

await server.register(fastifyMultipart);

// --- Documentation ---
// Register Swagger engine first
await server.register(fastifySwagger, {
    openapi: {
        info: {
            title: "Kawaii Image API",
            description: "Modernized High-Performance Anime Image API",
            version: "0.2.0",
        },
    },
    transform: jsonSchemaTransform,
});

// Using Scalar as a robust, modern alternative to Swagger UI
await server.register(scalarApiReference, {
    routePrefix: "/docs",
    configuration: {
        title: "Kawaii Image API Documentation",
        theme: "purple",
        layout: "modern",
    },
});

// Redis & Session
await server.register(fastifyCookie);
await server.register(fastifyRedis, { client: redis });

try {
    await server.register(fastifySession, {
        secret: (process.env.SESSION_SECRET && process.env.SESSION_SECRET.length >= 32) 
            ? process.env.SESSION_SECRET 
            : "a-very-long-and-secure-secret-32-chars-long",
        cookie: { secure: false }, // Set to true if using HTTPS
    });
} catch (err: any) {
    server.log.error("Failed to register session plugin:", err);
}

// --- OAuth2 Authentication ---

await server.register(oauth2, {
    name: "discordOAuth2",
    credentials: {
        client: {
            id: process.env.DISCORD_CLIENT_ID || "",
            secret: process.env.DISCORD_CLIENT_SECRET || ""
        },
        auth: (oauth2 as any).DISCORD_CONFIGURATION
    },
    startRedirectPath: "/auth/discord",
    callbackUri: process.env.DISCORD_CALLBACK_URL || "http://localhost:8000/auth/discord/callback",
    scope: ["identify"]
});

await server.register(authRoutes);

// --- Discord Bot Initialization ---

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
    ],
    partials: [Partials.Channel, Partials.Message, Partials.Reaction, Partials.User],
});

bot.once("clientReady", () => {
    console.log(`Bot started as ${bot.user?.tag}`);
});

bot.on("messageCreate", handleMessageCreate);
bot.on("messageReactionAdd", (reaction, user) => handleReactionAdd(reaction as any, user as any));

// --- Static Files ---

await server.register(fastifyStatic, {
    root: path.join(__dirname, "../public"),
    prefix: "/",
    wildcard: false, // Only serve actual files
});

// --- Routes Registration ---

await server.register(imageRoutes, { prefix: "/api/v1" });
await server.register(userRoutes, { prefix: "/api/v1" });
await server.register(adminRoutes, { prefix: "/api/v1", bot });
await server.register(uploadRoutes, { prefix: "/api/v1", bot });


// --- Error Handling ---

server.setNotFoundHandler(async (request, reply) => {
    // API/Docs should return JSON 404
    if (request.url.startsWith("/api") || request.url.startsWith("/docs")) {
        return reply.status(404).send({ error: "Not Found" });
    }
    // All other unknown routes show the proper 404 page
    return reply.status(404).sendFile("404.html");
});

server.setErrorHandler(async (error: any, request, reply) => {
    // Log the error
    server.log.error(error);

    // Handle 401 Unauthorized
    if (error.statusCode === 401) {
        return reply.status(401).sendFile("401.html");
    }

    // Default to 500 Internal Server Error
    return reply.status(500).sendFile("500.html");
});

// --- Start Server ---

const PORT = Number(process.env.PORT) || 8000;

const start = async () => {
    try {
        // Log bot in
        if (process.env.DISCORD_TOKEN) {
            await bot.login(process.env.DISCORD_TOKEN);
        } else {
            console.warn("DISCORD_TOKEN not found, bot disabled.");
        }

        await server.ready();
        await server.listen({ port: PORT, host: "0.0.0.0" });
        server.swagger();
        console.log(`Server is running at http://localhost:${PORT}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
