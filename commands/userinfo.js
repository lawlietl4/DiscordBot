module.exports = {
    name: 'userinfo',
    description: 'user info sheet',
    execute(message, args){
        return message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    },
};