module.exports = {
    name: "reset",
    description: "resets the bot",
    guildOnly: true,
    execute(message, args) {
      console.log("Bot reset!");
      message.channel.send("bot resetting");
      process.exit(0);
    }
};
