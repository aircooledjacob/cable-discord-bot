module.exports = {
	execute(message) {
		message.channel.send('ping');
	},
	help(message) {
		const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed()
			.setTitle('Help For Pong')
			.setColor(0x6e00ff)
			.addField('Usage:', 'Used to check that the bot is functioning correctly.')
			.addField('Syntax:', '`c pong`')
			.addField('Example:', '`c pong`');
		message.channel.send(embed);
	},
};
