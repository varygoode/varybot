exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
    message.reply(message.author.displayAvatarURL());
}