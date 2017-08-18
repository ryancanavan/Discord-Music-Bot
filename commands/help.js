exports.run = (client, message, args) => {
    message.channel.send(message.member.user + " below is a list of commands:");
    message.channel.send("!help - List of commands");
    message.channel.send("!play <YouTube URL> - Bot will join channel and begin playing audio");
    message.channel.send("!youtube <YouTube URL> - Bot will join channel and begin playing audio");
    message.channel.send("!stop - Bot will leave channel");
}