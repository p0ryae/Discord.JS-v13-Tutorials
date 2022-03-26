module.exports.run = async (client, message, args) => {
    message.channel.send("Your test has worked!")
}

module.exports.config = {
    name: "test",
    aliases: []
}