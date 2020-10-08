module.exports = {
	name: 'giveaway',
	description: 'giveaway command with !giveaway item date',
	execute(message, args) {
        if (args[0] != null){
            message.channel.send("[New Giveaway] " + args[0] + " will last until" + args[0]);
            // Need to set up database to hold timestamp
            // Then update every minute to check if timestamp is less then our current time.
            message.react('😄');
        }
    },
};