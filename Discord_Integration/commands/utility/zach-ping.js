const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('zach-ping')
        .setDescription('Replies with Zach!'),
    async execute(interaction) {
        await interaction.reply("I'm Zach!!");
    },
};


