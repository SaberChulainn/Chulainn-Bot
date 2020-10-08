module.exports = {
	name: 'reminder',
	description: 'Remind me! args minutes',
	execute(message, args) {
        if (args[0] != null){
            var minutes = 1000 * 60 * Integer.parseInt(args[1]);
            if(args[1] != null)
            setTimeout(() => {
                message.channel.send("You will be reminded in " + args[1]);
              }, minutes);
        }
    },
};