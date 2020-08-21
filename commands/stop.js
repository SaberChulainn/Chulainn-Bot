const serverQueue = require("./playsong.js")

module.exports = {
	name: 'stop',
	description: 'stop',
	async execute(message, args) {
        if (!message.member.voice.channel)
        return message.channel.send(
          "You have to be in a voice channel to stop the music!"
        );
      console.log(serverQueue)
      serverQueue.play.dispatcher.end();
      //const voiceChannel = message.member.voice.channel;
      //voiceChannel.leave();
	},
};