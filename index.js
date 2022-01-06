const Discord = require("discord.js")
const client = new Discord.Client({ intents: 32767 });

client.on("ready", () => {
    console.log("Bot is online!")
})

client.on("messageCreate", (message) => {
    const prefix = "-"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}test`) {
        message.channel.send("Your test has worked!")
    }
})

client.login("-")
