const yt = require("ytdl-core");

exports.run = (client, message, args) => {
    console.log("!play " + args);
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection => {
        const dispatcher = connection.playStream(yt(args.toString(), { audioonly: true }), { passes : 4 });
        dispatcher.setVolume(0.1);
        dispatcher.on("end", end => {
            voiceChannel.leave();
        });
    }).catch(err => console.log(err));
}