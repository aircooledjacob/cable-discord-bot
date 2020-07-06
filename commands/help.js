module.exports = {
	execute(message, args) {
		const Discord = require('discord.js');
		const fs = require('fs');
		const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));
		if (args.length == 0) {
			let description = '';
			let i = 0;
			for (i = 0; i < commandFiles.length; i++) {
				description = description.concat(`\`${commandFiles[i].split('.')[0]}\`\n`);
			}
			const embed = new Discord.MessageEmbed()
				.setTitle('Commands')
				.setColor(0x6e00ff)
				.setDescription(description);
			message.channel.send(embed);
		}
		else if (args.length > 0) {
			const commands = new Discord.Collection();
			for (const file of commandFiles) {
				const command = require(`../commands/${file}`);

				commands.set(file.split('.')[0], command);
			}
			try {
				commands.get(args[0]).help(message, args);
			}
			catch(err) {
				message.channel.send('Oops Something went wrong.\nMaybe check your spelling and try again :)');
			}
		}
	},
	help(message) {
		const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed()
			.setTitle('Help For Help')
			.setColor(0x6e00ff)
			.addField('Usage:', 'Used to list and give information on commands.')
			.addField('Syntax:', '`c help`/`c help {command}`')
			.addField('Example:', '`c help`/`c help ban`');
		message.channel.send(embed);
	},
};
