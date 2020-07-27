module.exports = (client, message) => {
  
  if(message.author.id === '713586207119900693' && message.type !== 'PINS_ADD') {
    if(message.guild.id === '732288737504919593') {
    message.channel.send("OH! A QUESTION! <@&732289380168892427> LOOK!").catch(console.error);
    }
  }

  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};