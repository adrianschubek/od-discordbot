// OD Bot v1.0.0
var Discord = require('discord.js');
var bot = new Discord.Client();

function userInfo(user) {
    try {
    var uc = user.createdAt.toString().split(" ");
    var str = "**" + user.username + "** (ID: *" + user.id + "*) was created on **" + uc[1] + " " + uc[2] + ", " + uc[3] + "**.";
    return str;
    }catch(err){
        message.channel.send("**User *" + user + "* was not found on this server :/**");
    }   
}

bot.on('message',message => {
       var sender = message.author;
       var msg = message.content.toUpperCase();
       var prefix = "+";

       let textargs = message.content.split(" ").slice(1);
       let cmdargs = message.content.split(" ").slice(2);
     
    if (msg === prefix + 'PING') {
        message.channel.send('Pong!');
    } else if (msg === prefix + 'PLAY') {
        message.channel.send('Play Open Driving here: http://roblox.com/games/726302522/Open-Driving');
    } else if (msg === prefix + 'APPLY') {			
        message.channel.send(sender+' Our roblox application centre is currently closed, if you want to apply then post your full application in #temp-applications');
    } else if (msg === prefix + 'WHOAMI') {
         message.channel.send('You are '+sender + ' ');   
    } else if (msg === prefix + 'REPORT') {
         message.channel.send('Hi ' + sender + '! If you want to report someone, click here: http://opendriving.tk/feedback2/'); 
    } else if (msg === prefix + 'WEBSITE') {
         message.channel.send(sender + ' Our website -> http://www.opendriving.tk');    
    } else if (msg === prefix + 'HELP') {
         message.channel.send('I\'m a bot developed by **welt101#5653**. Available cmds:\n**+play** - Link to our main roblox game\n**+games** - List of our games\n**+whoami** - Who am I?\n**+apply** - Use this cmd if you want to apply.\n**+report** - Report a player.\n**+website** - Open our website.\n**+afk** - Change your status to *afk*.\n**+unafk** - Change your status back to normal.');    
    } else if ((msg === prefix + 'LIST')||(msg === prefix + 'GAMES')) {
        message.channel.send('**--- LIST OF OUR GAMES ---**\n**Open Driving \(Main game\)**: http://bit.ly/opendriving \n**Open Driving: Palms Bay**: http://bit.ly/od-palmsbay');
    } else if (msg === prefix) {
        message.channel.send('*Invalid command! Use **+help** for help.*');
    } else if (msg.startsWith(prefix + 'WARN')) {
        message.delete();
        const text = textargs.join(" ");
        const embed = new Discord.RichEmbed()            
        .setColor(0xFF0000)
        .setTitle("[ WARNING ]")
        .setDescription('You have been warned, ' + text + '! Please follow the **#guidelines**.');
        message.channel.send({embed})
    } else if (msg.startsWith(prefix + 'WWARN')) {
            message.delete();
            const embed = new Discord.RichEmbed()            
            .setColor(0xFF0000)
            .setTitle("[ WARNING: " + textargs.slice(1) + " ]")
            .setDescription(cmdargs);
            message.channel.send({embed})
    } else if (msg.startsWith(prefix + 'AMSG')) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            const text = textargs.join(" ");
            const embed = new Discord.RichEmbed()            
            .setColor(0xFF0000)
            .setTitle("Important Announcement")
            .setDescription(text);
            message.channel.send({embed})
        }
    } else if (msg === prefix + 'EVERYONE') {
        message.delete();
        if (message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send('@everyone');
        } 
    } else if (msg === prefix + 'AFK') {
        message.delete();
        message.channel.send(sender + ' is now AFK :sleeping: .');
    } else if (msg === prefix + 'UNAFK') {
        message.delete();
        message.channel.send(sender + ' is no longer AFK :smile: .');
    } else if (msg.startsWith(prefix + 'UPD')) {
        message.delete();
        const text = textargs.join(" ");
        const embed = new Discord.RichEmbed()            
        .setColor(0x0000FF)
        .setTitle("Update")
        .setDescription(text);
        message.channel.send({embed})
    } else if (msg.startsWith(prefix + 'USERINFO')) {
        if(msg === prefix + 'USERINFO') {
            message.channel.send(userInfo(sender));
        }else{
            const otheruser = textargs.join("  ");
            message.channel.send(userInfo(textargs));
        }
    }    
});

bot.on('guildMemberAdd', member => {
    console.log(member + ' >> joined')
    var role = member.guild.roles.find('name', 'Fans');
    member.addRole(role)
});                                             

bot.on('ready', () => {
    console.log('OD-Bot: I\'m ready!')
    bot.user.setStatus('Online')
    bot.user.setPresence({ game: { name: 'say +help', type: 0 } });
});

bot.login(process.env.BOT_TOKEN);
