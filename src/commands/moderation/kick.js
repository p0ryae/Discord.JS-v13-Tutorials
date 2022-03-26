module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply("You need to put someone in this command!")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Where is your permission bro...");
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don't have permission to kick people!");
    if (message.member.id === member.id) return message.reply("You can't kick yourself...");

    member.kick()
    message.channel.send(`${member} just got kicked.`)
}

module.exports.config = {
    name: "kick",
    aliases: []
}