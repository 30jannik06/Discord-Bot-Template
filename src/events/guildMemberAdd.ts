import { GuildMember } from "discord.js";

module.exports = {
    name: "guildMemberAdd",
    once: false,
    execute(member: GuildMember) {
        try {
            console.log(`${member.id} joined the Guild!`);
        } catch (e) {
            console.error("Ready Event: " + e);
        }
    },
};
