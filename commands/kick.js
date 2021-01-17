module.exports = {
    name: 'kick',
    description: 'kick users',
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('You need to tag a target to kick them!');
        }
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        let banReason = args.join(/ +/).slice(22);
        if (!banReason) {
            banReason = "Reason undefined";
        }
        console.log(`User: ${User.displayName} has been kicked because of ${banReason}`);
        User.kick({
            reason: banReason
        });
    },
};