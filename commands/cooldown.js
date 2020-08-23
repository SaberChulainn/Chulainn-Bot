const talkedRecently = new Set();

module.exports = {
	name: 'cooldown',
	description: 'test command cooldowns',
	execute(message, args) {
        if (talkedRecently.has(message.author.id))
        return;
      
      // Adds the user to the set so that they can't talk for 2.5 seconds
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after 2.5 seconds
        talkedRecently.delete(message.author.id);
      }, 2500);
        let user = message.mentions.users.first() || message.author;
        message.channel.send(user.displayAvatarURL({ size: 2048, dynamic: true }));
    },
};