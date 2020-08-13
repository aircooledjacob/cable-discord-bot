module.exports = {
	execute(message, args) {
		const config = require('../config.json');

		const target = message.mentions.users.first();
		const reason = args[1];

		if (target && reason) {
			if (message.member.roles.cache.has(config.mod_role_id)) {
				return message.channel.send(`That isn't implemented yet <@${message.author.id}>`);
			}
			else {
				return message.channel.send(`Error trying to kick <@${target.id}>\n Are you sure that you have permission <@${message.author.id}>`);
			}
		}
		else if (target && !reason) {
			return message.channel.send(`You must provide a reason <@${message.author.id}>`);
		}
		else {
			module.exports.help(message);
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
