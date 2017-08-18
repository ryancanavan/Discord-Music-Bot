exports.run = (client, message, args) => {
    console.log("!stop " + args);
    message.member.voiceChannel.leave();
}