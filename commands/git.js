const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

const exampleEmbed = new EmbedBuilder()
	.setColor("Purple")
	.setTitle('Comandos do Git')
	.setURL('https://discord.js.org/')
	.addFields(
        { name: '\u200B', value: '\u200B' }, //Quebra linha
		{ name: '$ git init [nome-do-projeto]', value: 'Cria um novo repositório local com um nome específico', inline: true},
		{ name: '$git clone [url]', value: 'Some value here', inline: true },
		{ name: '$git stash', value: 'Some value here', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '$git status', value: 'Some value here', inline: true },
        { name: '$git add [arquivo]', value: 'Some value here', inline: true },
        { name: '$git commit -m "[mensagem]"', value: 'Some value here', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '$git branch', value: 'Some value here', inline: true },
        { name: '$git branch [nome-branch', value: 'Some value here', inline: true },
        { name: '$git switch -c [nome-branch]', value: 'Some value here', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '$git merge [nome-branch]', value: 'Some value here', inline: true },
        { name: '$git push [alias] [branch]', value: 'Some value here', inline: true },
        { name: '$git pull', value: 'Some value here', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do Git'!"),

    async execute (interaction){
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}