module.exports = {
    name: "reset",
    description: "resets the bot",
    guildOnly: true,
    execute(message,args) {
        if(message.author.id !== '196436703752355840'){
            message.channel.send("You are not allowed to use this command");
        }
	console.log("Bot reset!");
        message.channel.send("bot resetting");
        process.exit(0);
    }
};
