const Jikan = require('jikan-node');
const mal = new Jikan();
const Discord = require('discord.js');

module.exports = {
	name: 'searchmal',
	description: 'Search MyAnimeList',
	execute(message, args) {
		mal.search("anime", args, "page")
		.then(info => { 
			const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`${info.results[0].title}`)
			.setURL(`${info.results[0].url}`)
			.setAuthor('Chulainn')
			.setDescription(`${info.results[0].synopsis}`)
			.addFields(
				{ name: 'Rating', value: `${info.results[0].score}` },
			)
			.setImage(`${info.results[0].image_url}`)
			.setTimestamp()
			.setFooter('Brought to you by Chulain');
			message.channel.send(exampleEmbed)
		})
        .catch(err => console.log(err))
	},
};