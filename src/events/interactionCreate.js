module.exports = (client, interaction) => {
    if (interaction.commandName === "ping") {
        const dashy = interaction.options.getString("dashy");
        const washy = interaction.options.getNumber("washy");

        interaction.reply({
            content: `Ok u said ${dashy} and ${washy}`,
            ephemeral: true
        })
    }
}