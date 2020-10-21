module.exports = {
	name: 'time',
	description: 'Get Current Time of certain area.',
	execute(message, args) {
        time = args[0];
        var date = new Date("HH:mm:ss");
		date.setTimeZone(TimeZone.getTimeZone(`${args[0]}`));
        message.channel.send("The current time of " + args[0] + "is " + time);
    },
};