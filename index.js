const { Client, GatewayIntentBits, Guild, GuildChannel, Message } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'spam') {
		await interaction.channel.send("@everyone spammed!");
		await interaction.channel.send("@everyone spammed!");
		await interaction.channel.send("@everyone spammed!");
		await interaction.channel.send("@everyone spammed!");
		await interaction.channel.send("@everyone spammed!");	
	}
});


client.login(token);
