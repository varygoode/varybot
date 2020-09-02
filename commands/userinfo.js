exports.run = (bot, message, args) => {
  message.channel.send("gottem").catch(console.error);

  // Checks if a user is mentioned
  let ment = message.mentions.users.first();
    if(!ment) {
      message.channel.send('Please mention a user!')
    }
  // Creats an embed with information about the mentioned user
    let embed = new Discord.RichEmbed()
    .addField("Username", ment.tag)
    .addField("ID", ment.id)
    .addField("Status", ment.presence.status)
    .addField("Created", ment.createdAt)
    .setThumbnail(ment.avatarURL)
    message.channel.send(embed)
  // Displays a message in the console if the command was used
    return console.log(`> userinfo command used by ${message.author.username}`);
  }
}