const Manager = require("./src/ClientManager")
const client = new Manager({ intents: 32767 });

client.setup();
