const Discord = require('discord.js');

module.exports = (client, oldMember, newMember) => {

  	console.log(oldMember.roles.cache.toString());

  	// If the role(s) are present on the old member object but no longer on the new one (i.e role(s) were removed)
	const removedRole = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
	if (removedRoles.size > 0) console.log(`The role ${removedRole.map(r => r.name)} was removed from ${oldMember.displayName}.`);
	// If the role(s) are present on the new member object but are not on the old one (i.e role(s) were added)
	const addedRole = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
	if (addedRoles.size > 0) console.log(`The role ${addedRole.map(r => r.name)} was added to ${oldMember.displayName}.`);

};