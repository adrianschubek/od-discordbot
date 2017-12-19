//Open Driving Discord Bot - by welt101
var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message',message => {
       var sender = message.author;
       var msg = message.content.toUpperCase();
       var prefix = "^^";
    if (msg === prefix + 'PING') {
        message.channel.send('Pong!');
    } else if (msg === prefix + 'PLAY') {
        message.channel.send('Play Open Driving here: http://roblox.com/games/726302522/Open-Driving');
    } else if (msg === prefix + 'APPLY') {			
        message.channel.send('Our roblox application centre is currently closed, if you want to apply then post your full application in #temp-applications');
    } else if (msg === prefix + 'WHOAMI') {
         message.channel.send('You are '+sender);   
    }
});
bot.login(process.env.BOT_TOKEN);
