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
        message.channel.send(sender+' Our roblox application centre is currently closed, if you want to apply then post your full application in #temp-applications');
    } else if (msg === prefix + 'WHOAMI') {
         message.channel.send('You are '+sender);   
    } else if (msg === prefix + 'REPORT') {
         message.channel.send('Hi ' + sender + '! If you want to report someone, click here: http://opendriving.tk/feedback2/'); 
    } else if (msg === prefix + 'WEBSITE') {
         message.channel.send(sender + ' Our website -> http://www.opendriving.tk');    
    } else if (msg === prefix + 'HELP') {
         message.channel.send('I\'m a bot developed by @welt101#5653. Available cmds:\n**^^play** - Link to our roblox game\n**^^whoami** - Who am I?\n**^^apply** - Use this cmd if you want to apply.\n**^^report** - Report a player.\n**^^website** - Open our website.');    
    }
});

bot.on('guildMemberAdd', member => {
    console.log(member + ' >> joined')
    var role = member.guild.roles.find('name', 'Fans');
    member.addRole(role)
});

bot.on('ready', () => {
    bot.user.setStatus('Online')
    bot.user.setGame('say ^^help')
});

bot.login(process.env.BOT_TOKEN);
