const Discord = require("discord.js");
const bot = new Discord.Client();
const token;
const swAPI;

bot.login(token);

bot.on("message")