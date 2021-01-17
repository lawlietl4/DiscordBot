module.exports = {
    name: 'ban',
    description: 'ban users',
    guildOnly: true,
    execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions");
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!User) return message.channel.send("Invalid User");
        if (User.hasPermission("BAN_MEMBERS")) return message.reply("Invalid Permissions");
        let banReason = args.join(/ +/).slice(22);
        let days = args.join(/ +/).slice(23);
        if (!banReason) {
            banReason = "Reason undefined";
        }
        if (!days){
            days = 1;
        }
        console.log(`${User.displayName} has been banned because of ${banReason} for ${days} days`);
        User.ban({
            days: days,
            reason: banReason
        });

    },
};