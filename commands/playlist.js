const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist!"),

    async execute (interaction){
        await interaction.reply("https://open.spotify.com/playlist/2v8VmSdTRSyMhWauhnhWYq?si=a765970175724b00")
    }
}