exports.run = (client, message, args) => {
    message.guild.members.filter(m => !m.user.bot).forEach(member => member.roles.add("738516185611501670"));
    message.guild.members.filter(m => !m.user.bot).forEach(member => member.roles.remove("738516185611501670"));
}