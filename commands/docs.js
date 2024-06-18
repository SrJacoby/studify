const {SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder} = require("discord.js");

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions({
                label: "javascript",
                description: "Veja a documentação de JavaScript",
                value: "javascript"
            },
            {
                label: "python",
                description: "Veja a documentação de Python",
                value: "python"
            },
            {
                label: "java",
                description: "Veja a documentação de Java",
                value: "java"
            },
            {
                label: "C#",
                description: "Veja a documentação de C#",
                value: "csharp"
            }
            
        )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia desejada!"),

    async execute (interaction){
        await interaction.reply({content: "Selecione uma das tecnologias abaixo:", components: [row]})
    }
}
