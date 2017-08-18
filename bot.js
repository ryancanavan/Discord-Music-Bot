const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
	console.log("Bot loaded!");
});

client.on("message", (message) => {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;

	// Separate command and arguments
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if(['youtube', 'stop', 'play', 'help'].indexOf(command) == -1) {
		console.log(command + " is an invalid command.");
		message.channel.send(message.member.user + " Invalid command. Type !help for a list of commands.");
		return
	}

	try {
		let commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error(err);
	}
});

client.login(config.token);