const Discord = require('discord.js');

module.exports = (client, oldMember, newMember) => {

  const messagechannel = msg.guild.channels.find('name', 'general');
        if (oldMember.roles.size < newMember.roles.size) {
            const embed = new Discord.RichEmbed()
                .setColor('#FE2E2E')
                .setTimestamp()
                .setAuthor('Role added!')
                .addField(`Member:`, `${oldMember.user.tag} (${oldMember.id})`);
            for (const role of newMember.roles.map(x => x.id)) {
                if (!oldMember.roles.has(role)) {
                    embed.addField(`Role:`, `${oldMember.guild.roles.get(role).name}`);
                }
            }
            messagechannel.send({
                embed
            });
        }
  
};