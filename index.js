const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// Importação dos comandos

const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands")
commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for(const file of commandsFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if("data" in command && "execute" in command){
        client.commands.set(command.data.name, command)
    } else{
        console.log(`Este comando em ${filePath} está com "data" ou "execute ausente"`)
    }
}

//Login

client.once(Events.ClientReady, readyClient => {
	console.log(`Pronto! Login realizado como ${readyClient.user.tag}`);
});

client.login(TOKEN);

//Listener

client.on(Events.InteractionCreate, async interaction => {
    if(interaction.isStringSelectMenu()){
        const selected = interaction.values[0]

        switch(selected){
            case "javascript":
                await interaction.reply("Documentação do JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript")
            break
            case "python": 
                await interaction.reply("Documentação do Python: https://www.python.org/doc/")
            break
            case "java":
                await interaction.reply("Documentação do Java: https://docs.oracle.com/en/java/")
            break
            case "csharp":
                await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/")
            break
        }
    }



    if(!interaction.isChatInputCommand())
        return
        const command = interaction.client.commands.get(interaction.commandName)
        if(!command){
            console.error("Comando não encontrado")
            return
        }
        try{
            await command.execute(interaction)
        } catch(error){
            console.error(error)
            await interaction.reply("Houve um erro ao executar esse comando")
        }
})