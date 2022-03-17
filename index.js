const Discord = require("discord.js")
const client = new Discord.Client({ intents: 32767 });
require('dotenv').config()

client.on("ready", () => {
    console.log("Bot is online!");

    client.guilds.cache.get("713505802748428309").commands.create({
        name: "ping",
        description: "LMAOOO",
        options: [
            {
                name: "dashy",
                description: "Put a dashy here",
                required: true,
                type: Discord.Constants.ApplicationCommandOptionTypes.STRING
            },
            {
                name: "washy",
                description: "Put a washy here",
                required: true,
                type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })
})

client.on("interactionCreate", async interaction => {
    if (interaction.commandName === "ping") {
        const dashy = interaction.options.getString("dashy");
        const washy = interaction.options.getNumber("washy");

        interaction.reply({
            content: `Ok u said ${dashy} and ${washy}`,
            ephemeral: true
        })
    }
})

client.on("messageCreate", (message) => {
    const prefix = "-"
    if (!message.content.startsWith(prefix)) return;

    const messageArray = message.content.split(" ");
    const cmd = messageArray[0]
    const args = messageArray.slice(1);

    if (message.content.toLowerCase() === `${prefix}test`) {
        message.channel.send("Your test has worked!")
    }

    if (cmd.toLowerCase() === `${prefix}kick`) {
        if (!args[0]) return message.reply("You need to put someone in this command!")
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Where is your permission bro...");
        if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don't have permission to kick people!");
        if (message.member.id === member.id) return message.reply("You can't kick yourself...");

        member.kick()
        message.channel.send(`${member} just got kicked.`)
    }

    if (cmd.toLowerCase() === `${prefix}ban`) {
        if (!args[0]) return message.reply("You need to put someone in this command!")
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Where is your permission bro...");
        if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("I don't have permission to ban people!");
        if (message.member.id === member.id) return message.reply("You can't ban yourself...");

        let reason = args.slice(1).join(" ") || "No reason"

        member.ban({ reason: reason })
        message.channel.send(`${member} just got banned.\nReason: ${reason}`)
    }
})

client.login(process.env.TOKEN)
