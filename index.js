const Discord = require("discord.js");
const {prefix, BOT_TOKEN} = require('./config.json');

const client = new Discord.Client();

client.login(BOT_TOKEN);

client.on('message', message => {
	if (message.content === `${prefix}test`) {
        message.channel.send('What you want loser.');
    } else if (message.content === `${prefix}avatar`){
        message.channel.send(message.author.displayAvatarURL())
    }
});
