module.exports = {
    name: 'server',
    description: 'server name and size',
    execute(message, args){
        return message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};