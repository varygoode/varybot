const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let guildMember;

  if (message.mentions.members.first()) {
    guildMember = message.mentions.members.first();
  } else {
    guildMember = message.member;
  }

  // We need the User object aswell for different properties
  const user = guildMember.user;

  let rolemap = guildMember.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",\\n");
            if (rolemap.length > 1024) rolemap = "Too many roles to display!";
            if (!rolemap) rolemap = "No roles.";

  let embed = new Discord.MessageEmbed()
    .setAuthor(user.username)
    .setDescription("Users Info", true)
    .setColor("#64FF00", true)
    .addField("Full Username:", `${user.username}#${user.discriminator}`, true)
    .addField("ID:", user.id, true)
    .addField("Created at:", user.createdAt, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("Game:", `${user.presence.game}`, true)
    .addField("Roles:", rolemap, true);

  message.channel.send(embed);
}