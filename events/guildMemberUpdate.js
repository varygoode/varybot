const Discord = require('discord.js');

module.exports = (oldMember, newMember) => {

  console.log(oldMember.toString());

  if (oldMember.cache.roles.size > newMember.cache.roles.size) {
    console.log(`Role added`);
  }

  if (oldMember.cache.roles.size < newMember.cache.roles.size) {
    console.log(`Role removed`);
  }
  
};