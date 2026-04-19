import { FastifyInstance } from "fastify";
import { upsertUser } from "../../repositories/user.repository.js";
import axios from "axios";

export async function authRoutes(fastify: FastifyInstance) {
    
    fastify.get("/auth/discord/callback", async (request, reply) => {
        try {
            const { token } = await fastify.discordOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
            
            // Get user info from discord
            const { data: profile } = await axios.get("https://discord.com/api/users/@me", {
                headers: {
                    Authorization: `Bearer ${token.access_token}`
                }
            });

            // Upsert user in db
            const user = await upsertUser({
                id: profile.id,
                name: profile.global_name || profile.username,
                avatar: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : undefined
            });

            // Set session
            (request.session as any).user = user;

            return reply.redirect("/");
        } catch (err: any) {
            fastify.log.error(err);
            return reply.status(500).send({ error: "Authentication failed" });
        }
    });

    fastify.get("/logout", async (request, reply) => {
        request.session.destroy(() => {
            reply.status(200).send({ message: "Logged out" });
        });
    });
}
