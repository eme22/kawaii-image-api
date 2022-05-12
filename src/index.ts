import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import Router from "./routes";
import dbConfig from "./config/database";
import { User } from "./models";
import errorHandler from './middleware/errorhandler.middleware';
import axios from "axios";
import "reflect-metadata";

import { importx } from "@discordx/importer";
import { Intents } from "discord.js";
import { Client } from "discordx";
import passport from "passport";
import { Strategy as DiscordStrategy, Profile, VerifyCallback /*, Scope*/ } from '@oauth-everything/passport-discord';

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app: Application = express();
const expressSession = require("express-session");

//var DiscordStrategy = require('passport-discord').Strategy;

var scopes = ['identify'];

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

const strategy = new DiscordStrategy({
  clientID: `${process.env.DISCORD_CLIENT_ID}`,
  clientSecret: `${process.env.DISCORD_CLIENT_SECRET}`,
  callbackURL: `${process.env.DISCORD_CALLBACK_URL}`,
  scope: scopes
},
  async function(accessToken: string, _refreshToken: string, profile: Profile, cb: (err: Error | null, user: any) => any) {
  const userRepository = getRepository(User);
  var user = await userRepository.findOne({id: profile.id})
  if (!user) {

    const userdata = await axios.get("https://discordapp.com/api/users/@me", {
      headers: {'Authorization': `Bearer ${accessToken}`}
    })

    //console.log(`TOKEN: Bearer ${accessToken}`)

    user = new User();
    user.id = profile.id;
    user.name = `${userdata.data.username}#${userdata.data.discriminator}`
    const date = new Date();
    user.createdAt = date;
    //console.log(userdata.data);
    user.avatar = userdata.data.avatar;
    user.admin = await userRepository.count() == 0;
  

    userRepository.save({
      ...user
    }), function(err: any, user: any) {
      return cb(err, user);
    };
  } 

  //console.log(`TOKEN: Bearer ${accessToken}`)

  return cb( null, user);
}); 

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
//app.use(cookieParser1)
app.use(expressSession(session));

passport.use(strategy);

passport.serializeUser(function(user: any ,done: (arg0: null, arg1: any) => void) {
  console.log(user);
  done(null, user );
});

passport.deserializeUser((user: any, done: (arg0: null, arg1: any) => void) => {
  done(null, user);
});


app.use(passport.initialize());
app.use(passport.session());

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json"
    },
  })
);

app.use("/api/v1", Router);

app.get('/auth/discord', passport.authenticate('discord'));
app.get('/callback', passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    console.log(req.user)
    res.redirect('/') // Successful auth
});

app.get('/logout', function (req, res) {
  if (req.session) {
    req.session.destroy( function() {
    });
    res.send("logout success!");
  }
});

app.use(errorHandler)

app.use(function(req, res, _next) {
  res.statusCode = 404;
  res.redirect("/404.html");
  //res.sendFile(path.join(__dirname, '../public', '404.html'));
});

export const bot = new Client({
  // To only use global commands (use @Guild for specific guild command), comment this line
  botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],

  // Discord intents
  intents: [
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
  ],

  partials: ["CHANNEL", "MESSAGE", "REACTION", "USER"],

  // Debug logs are disabled in silent mode
  silent: true,

  // Configuration for @SimpleCommand
  simpleCommand: {
    prefix: "!",
  },
});

bot.once("ready", async () => {
  console.log("Bot started");
});

async function run() {
  await importx(__dirname + "/{events,commands}/**/*.{ts,js}");

  // Let's start the bot
  if (!process.env.DISCORD_TOKEN) {
    throw Error("Could not find DISCORD_TOKEN in your environment");
  }

  // Log in with your bot token
  await bot.login(process.env.DISCORD_TOKEN);
}

run();

createConnection(dbConfig)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });


