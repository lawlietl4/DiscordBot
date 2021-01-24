module.exports = {
    name: "reset",
    description: "resets the bot",
    guildOnly: true,
    execute(message, args) {
        const permissions = new Permissions([
            'ADMINISTRATOR',
            'MANAGE_CHANNELS',
            'EMBED_LINKS',
            'ATTACH_FILES',
            'READ_MESSAGE_HISTORY',
            'MANAGE_ROLES',
        ]);
        if (permissions.has('ADMINISTRATOR')) {
            console.log("Bot reset!");
            message.channel.send("bot resetting");
            process.exit(0);
        }
    }
};