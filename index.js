const Discord = require("discord.js");
const fs = require('fs');
const {owner_id, prefix, BOT_TOKEN, client_id} = require('./config.json');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // gets all file in command folder
const client = new Discord.Client();
const fetch = require('node-fetch');
const id = "xtyalter";



client.commands = new Discord.Collection();


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(BOT_TOKEN);
getTwitchAPI();
client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	if (!client.commands.has(command)) return;
    try {
	    client.commands.get(command).execute(message, args);
    } catch (error) {
	    message.reply('there was an error trying to execute that command!');
}
});

function getTwitchAPI(){
    fetch(`https://api.twitch.tv/helix/streams?user_login=${id}`, {
        method: 'GET',
        headers: {
            'Client-ID': client_id,
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
}
