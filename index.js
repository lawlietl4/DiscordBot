const fs = require('fs'); //enables file reading for commands that are in their own files

const Discord = require('discord.js'); //this is the brains of all the discord operations and can be installed with yarn install discord.js or npm install discord.js
//it should also be setup to have yarn/npm install work

const {
    prefix,
    token
} = require('./config.json'); //prefix is anything that proceeds your command and token is what it says it is lol

const client = new Discord.Client(); //makes a new Discord client connection

client.commands = new Discord.Collection(); //makes a collection of the commands in the discord bot's memory

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //reads every file that ends in .js in the specified directory

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
} //allows the calling of all commands in the directory

client.on('ready', () => {
    console.log('Bot is online!');
}); //if bot started then you get a message that it did

client.on('message', message => {
    // console.log(message.content);
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName) || message.author.bot) return;
    else {
        switch (commandName) {
            case 'foo':
                client.commands.get('foo').execute(message, args);
                break;
            case 'ping':
                client.commands.get('ping').execute(message, args);
                break;
            case 'beep':
                client.commands.get('beep').execute(message, args);
                break;
            case 'server':
                client.commands.get('server').execute(message, args);
                break;
            case 'userinfo':
                client.commands.get('userinfo').execute(message, args);
                break;
            case 'kick':
                client.commands.get('kick').execute(message, args);
                break;
            case 'avatar':
                client.commands.get('avatar').execute(message, args);
                break;
            case 'prune':
                client.commands.get('prune').execute(message, args);
                break;
            case 'ban':
                client.commands.get('ban').execute(message, args);
                break;
            case 'reset':
                client.commands.get('reset').execute(message,args);
                break;
        }
    }
}); //these were my commands but the cases and their subsequent commands can be changed

client.login(token); //logs the bot into your server/DM's
