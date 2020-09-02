const Discord = require('discord.js');

module.exports = (client, oldMember, newMember) => {

  	if(oldMember.guild.id == "732288737504919593") {
	  	// If the role(s) are present on the old member object but no longer on the new one (i.e role(s) were removed)
		const removedRole = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
		if (removedRole.size > 0) {
			console.log(`The role ${removedRole.map(r => r.name)} was removed from ${oldMember.displayName}.`);
			if(!newMember.roles.cache.has("738516185611501670") && !newMember.roles.cache.has("738516083753091073")) {
				if(newMember.roles.cache.has("750655898971537458")) newMember.roles.remove("750655898971537458");
			}
		}

		// If the role(s) are present on the new member object but are not on the old one (i.e role(s) were added)
		const addedRole = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
		if (addedRole.size > 0) {
			console.log(`The role ${addedRole.map(r => r.name)} was added to ${oldMember.displayName}.`);
			if(addedRole.has("738516185611501670") || addedRole.has("738516083753091073")) {
				newMember.roles.add("750655898971537458");
			}
		}
	}

	if(oldMember.guild.id == "434542839054204928") {
	  	/* If the role(s) are present on the old member object but no longer on the new one (i.e role(s) were removed)
		const removedRole = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
		if (removedRole.size > 0) {
			console.log(`The role ${removedRole.map(r => r.name)} was removed from ${oldMember.displayName}.`);
			if(!newMember.roles.cache.has("738516185611501670") && !newMember.roles.cache.has("738516083753091073")) {
				if(newMember.roles.cache.has("750655898971537458")) newMember.roles.remove("750655898971537458");
			}
		}

		// If the role(s) are present on the new member object but are not on the old one (i.e role(s) were added)
		const addedRole = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
		if (addedRole.size > 0) {
			console.log(`The role ${addedRole.map(r => r.name)} was added to ${oldMember.displayName}.`);
			if(addedRole.has("738516185611501670") || addedRole.has("738516083753091073")) {
				newMember.roles.add("750655898971537458");
			}
		}*/
	}

};