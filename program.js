const DISCORD = require("discord.js");
const YT = require("ytdl-core")
const client = new DISCORD.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
    console.log("replied with pong");
  }
});

client.login('MzQ0NzA2OTQ5NzE3MTY0MDMz.DGw0xQ.cHIvZTc1aSZsPW0l8XqyDmvhE8k')
