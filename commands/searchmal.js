const Jikan = require('jikan-node');
const mal = new Jikan();

module.exports = {
	name: 'searchmal',
	description: 'Search MyAnimeList',
	execute(message, args) {
		mal.search("anime", args, "page")
        .then(info =>  message.channel.send(info.results[1].url))
        .catch(err => console.log(err))
	},
};