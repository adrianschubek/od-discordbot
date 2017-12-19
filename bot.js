var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message',message => {
       var sender = message.author;
       var msg = message.content.toUpperCase();
       var prefix = ">";
    if (msg === prefix + 'PING') {
        message.channel.send('Pong!')
    }
});

bot.login('MzkxNTQyMDIwMzIzNDA5OTIw.DRrFsQ.i8xMXF3PVVsAFQLTl9YKgMJxf0s');