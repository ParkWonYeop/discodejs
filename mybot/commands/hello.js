const { SlashCommandBuilder } = require('discord.js');
let name = 0;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('bot say hello')
		.addStringOption(option =>
			option.setName('name')
				.setDescription('hello to who?')),
	async execute(interaction) {
        await interaction.reply('hello '+interaction.options.getString('name'));
	},
};