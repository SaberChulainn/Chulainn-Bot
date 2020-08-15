module.exports = {
	name: 'avatar',
	description: 'Display user avatar',
	execute(message, args) {
		message.channel.send(message.author.displayAvatarURL())
	},
};