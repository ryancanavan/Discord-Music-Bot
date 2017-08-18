# Discord Music Bot
A Discord bot used to play YouTube and Spotify audio.

## Setup

1. Download FFMPEG from [this website](https://ffmpeg.zeranoe.com/builds/). Make sure to find the current **Static Build** for your OS Architecture (32bit/64bit).
2. Unpack zip and add location of bin folder to your Path variable.
3. Download [Node.js 6.X from the website](https://nodejs.org/en/).
4. Download the master brach of this repository.
5. Navigate to the directory the project in is and run the "npm install discord.js node-opus --save" command.
6. Run the "npm install ytdl-core" command.
7. Change "config.json.example" to "config.json" and change the token to your discord bot token from [here.](https://discordapp.com/developers/docs/intro)
8. Add the bot to your Discord server.
8. Run "node bot.js" to start the bot.