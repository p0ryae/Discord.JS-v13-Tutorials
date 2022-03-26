module.exports = (client, message) => {
    const prefix = "-"
    if (!message.content.startsWith(prefix)) return;

    const messageArray = message.content.split(" ");
    const cmd = messageArray[0]
    const args = messageArray.slice(1);

    const commandFile = client.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix.length).toString().toLowerCase())); 
    if (commandFile) {
        commandFile.run(client, message, args);
    }
}