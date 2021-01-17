const fs = require('fs');

const Discord = require('discord.js');

const {
    prefix,
    token
} = require('./config.json');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Bot is online!');
});

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
                if (message.content.toLowerCase()) {
                    resetBot(message.channel);
                }

                
        }
    }
});

function resetBot(channel) {
    channel.send('Resetting...')
        .then(msg => client.destroy())
        .then(() => client.login(token));
}

client.login(token);