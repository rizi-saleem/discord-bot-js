const prefix = process.env.PREFIX;

exports.run = (client, message, args, ops) => {
  message.reply("I'm sending you a private message with a list of my commands.");
  let helpMsg = `**List of my commands:**`;
  helpMsg += `\n__${prefix}help__ » Get a private message with a list of commands`;
  helpMsg += `\n__${prefix}play__ » Play a song in the current voice channel`;
  helpMsg += `\n__${prefix}leave__ » Makes the bot leave from the current voice channel`;
  helpMsg += `\n__${prefix}pause__ » Pauses the current song`;
  helpMsg += `\n__${prefix}resume__ » Resumes the current song`;
  helpMsg += `\n__${prefix}search__ » Same use of ${prefix}play, only that you can't paste a link`;
  helpMsg += `\n__${prefix}skip__ » Opens a vote to skip the current song.`;
  helpMsg += `\n__${prefix}musiclink__ » Get the current music link`;
  helpMsg += `\n__${prefix}volume__ » Set the bot volume when playing a song`;
  helpMsg += `\n__${prefix}clear__ (or __${prefix}purge__) » Clear many messages at time`;
  helpMsg += `\n__${prefix}mcstatus__ » Get status of a Minecraft server (Java and MCPE)`;
  helpMsg += `\n**Tip:** If you add a role named ___mcpestatus__, the default port for the status command will be 19132.`;
  helpMsg += `\n__${prefix}mcskin__ (or __${prefix}skin__) » Get a skin using username (Java only usernames)`;
  helpMsg += `\n__${prefix}ban__ » Helps you to ban a member by using a command`;
  helpMsg += `\n__${prefix}kick__ » Helps you to kick a member by using a command`;
  helpMsg += `\n__${prefix}nick__ » Helps you to change other's nickname`;
  helpMsg += `\n__${prefix}mute__ » Mute a user in your Discord server`;
  helpMsg += `\n__${prefix}unmute__ » Unmute a user in your Discord server`;
  helpMsg += `\n__${prefix}8ball__ » Ask the magic 8ball about your future`;
  helpMsg += `\n__${prefix}meme__ » Get a random meme from meme subreddits`;
  message.author.send(helpMsg);
}
