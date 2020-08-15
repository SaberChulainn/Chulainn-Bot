const Discord = require("discord.js");
const fs = require('fs');
const {owner_id, prefix, BOT_TOKEN} = require('./config.json');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // gets all file in command folder
const client = new Discord.Client();



client.commands = new Discord.Collection();


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(BOT_TOKEN);

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