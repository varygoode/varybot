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
	  	// If the role(s) are present on the old member object but no longer on the new one (i.e role(s) were removed)
		const removedRole = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
		if (removedRole.size > 0) {
			console.log(`The role ${removedRole.map(r => r.name)} was removed from ${oldMember.displayName}.`);
			//Remove GAMES role separator
			if(!newMember.roles.cache.has("693215135053119568") && !newMember.roles.cache.has("693214736736714762") &&
			   !newMember.roles.cache.has("693214952944828426") && !newMember.roles.cache.has("749484771146465321") &&
			   !newMember.roles.cache.has("738523221946794145")) {
				if(newMember.roles.cache.has("742637482100785186")) newMember.roles.remove("742637482100785186");
			}
			//Remove NERDS role separator
			if(!newMember.roles.cache.has("743625569551253636") && !newMember.roles.cache.has("743481813972025405") &&
			   !newMember.roles.cache.has("743484247255285783") && !newMember.roles.cache.has("750675217004888124") &&
			   !newMember.roles.cache.has("743482189760692237")) {
				if(newMember.roles.cache.has("742637482134208592")) newMember.roles.remove("742637482134208592");
			}
			//Remove PINGS role separator
			if(!newMember.roles.cache.has("693220531364954246") && !newMember.roles.cache.has("742574117001363516") &&
			   !newMember.roles.cache.has("742621188068737044") && !newMember.roles.cache.has("742621764949114981") &&
			   !newMember.roles.cache.has("693220731999354950")) {
				if(newMember.roles.cache.has("742637731594633236")) newMember.roles.remove("742637731594633236");
			}
		}

		// If the role(s) are present on the new member object but are not on the old one (i.e role(s) were added)
		const addedRole = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
		if (addedRole.size > 0) {
			console.log(`The role ${addedRole.map(r => r.name)} was added to ${oldMember.displayName}.`);
			//Add GAME role separator
			if(newMember.roles.cache.has("743625569551253636") || newMember.roles.cache.has("693214736736714762") ||
			   newMember.roles.cache.has("693214952944828426") || newMember.roles.cache.has("749484771146465321") ||
			   newMember.roles.cache.has("738523221946794145")) {
				newMember.roles.add("742637482100785186");
			}
			//Add NERDS role separator
			if(newMember.roles.cache.has("693215135053119568") || newMember.roles.cache.has("743481813972025405") ||
			   newMember.roles.cache.has("743484247255285783") || newMember.roles.cache.has("750675217004888124") ||
			   newMember.roles.cache.has("743482189760692237")) {
				newMember.roles.add("742637482134208592");
			}
			//Add PINGS role separator
			if(newMember.roles.cache.has("693220531364954246") || newMember.roles.cache.has("742574117001363516") ||
			   newMember.roles.cache.has("742621188068737044") || newMember.roles.cache.has("742621764949114981") ||
			   newMember.roles.cache.has("693220731999354950")) {
				newMember.roles.add("742637731594633236");
			}
		}
	}
};