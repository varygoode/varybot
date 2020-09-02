const Discord = require('discord.js');

module.exports = (oldMember, newMember) => {

  if (oldMember.roles.cache.size > newMember.roles.cache.size) {
    console.log(`Role added`);
  }

  if (oldMember.roles.cache.size < newMember.roles.cache.size) {
    console.log(`Role removed`);
  }
  
};