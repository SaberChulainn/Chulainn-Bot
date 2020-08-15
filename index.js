const Discord = require("discord.js");
const {owner_id, prefix, BOT_TOKEN} = require('./config.json');
const Jikan = require('jikan-node');
const mal = new Jikan();

const client = new Discord.Client();

client.login(BOT_TOKEN);

client.on('message', message => {
	if (message.content === `${prefix}test`) {
        message.channel.send('What you want loser.');
    } else if (message.content === `${prefix}avatar`){
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content.startsWith(`${prefix}eval`)){
        const args = message.content.split(" ").slice(1);
        if(message.author.id !== owner_id) return;
        try {
            const code = args.join(" ");
            let evaled = eval(code);
            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
                message.channel.send(clean(evaled), {code:"xl"});
            } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
    } else if (message.content.startsWith(`${prefix}searchmal`)){

    }
});


function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }