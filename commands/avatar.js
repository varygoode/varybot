exports.run = (client, message, args) => {
	if (!message.mentions.users.size) {
		message.channel.send('Your avatar: ${message.author.displayAvatarURL}');
		}
	else {
		const avatarList = message.mentions.users.map(user => {
		return '${user.username}\'s avatar: ${user.displayAvatarURL}';
		});

		message.channel.send(avatarList);
	}
}