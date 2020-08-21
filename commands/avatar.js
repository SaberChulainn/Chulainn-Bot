module.exports = {
	name: 'avatar',
	description: 'Display user avatar',
	execute(message, args) {
        let user = message.mentions.users.first() || message.author;
        message.channel.send(user.displayAvatarURL({ size: 2048, dynamic: true }));
    },
};