module.exports = { //following module exportation rules
    name: 'userinfo', //give module name
    description: 'user info sheet', //give module description
    execute(message, args){ //this is where the bot retrieves the important info
        return message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    },
};
