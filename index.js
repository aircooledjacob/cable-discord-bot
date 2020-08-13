const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.default_prefix;
const fs = require('fs');

require('dotenv').config();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(file.split('.')[0], command);
}

client.once('ready', async () => {
	console.log('Cable is Connected and Opperational!');
	console.log(client.commands);
});

client.on('message', async message => {
	if (message.content === 'wat') {
		message.channel.messages.fetch({ limit: 2 }).then(messages => {
			const lastMessage = messages.first(2)[1];
			message.channel.send(`<@${lastMessage.author.id}> said "${lastMessage.content}"`);
		});
	}

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	try{
		client.commands.get(command).execute(message, args, client);
	}
	catch(err) {
		return console.log(err);
	}
});

client.login(process.env.BOT_TOKEN);

client.on(Error, async error => {
	console.log(error);
});
