module.exports = {
	execute(message) {
		message.channel.send('pong');
	},
	help(message) {
		const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed()
			.setTitle('Help For Ping')
			.setColor(0x6e00ff)
			.addField('Usage:', 'Used to check that the bot is functioning correctly.')
			.addField('Syntax:', '`c ping`')
			.addField('Example:', '`c ping`');
		message.channel.send(embed);
	},
};
