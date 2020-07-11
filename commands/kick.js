module.exports = {
	execute(message, args) {
		let modlist = []
		
		if (message.author.id in ) {

		}
	},
	help(message) {
		const config = require('../config.json');
		const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed()
			.setTitle('Help For Kick')
			.setColor(0x6e00ff)
			.addField('Usage:', 'Used to kick a member from the server.')
			.addField('Syntax:', '`c kick {user} {reason}`')
			.addField('Example:', '`c kick` ' + `<@${config.bot.id}>` + ' `spam`');
		message.channel.send(embed);
	},
};
