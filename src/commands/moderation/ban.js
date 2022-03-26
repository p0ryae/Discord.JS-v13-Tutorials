module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply("You need to put someone in this command!")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Where is your permission bro...");
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("I don't have permission to ban people!");
    if (message.member.id === member.id) return message.reply("You can't ban yourself...");

    let reason = args.slice(1).join(" ") || "No reason"

    member.ban({ reason: reason })
    message.channel.send(`${member} just got banned.\nReason: ${reason}`)
}

module.exports.config = {
    name: "ban",
    aliases: []
}