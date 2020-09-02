const Discord = require('discord.js');

module.exports = (client, oldMember, newMember) => {

  if (oldMember.roles.size > newMember.roles.size) {
    console.log(`Role added`);
  }

  if (oldMember.roles.size < newMember.roles.size) {
    console.log(`Role removed`);
  }
  
};