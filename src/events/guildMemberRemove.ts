import { GuildMember } from "discord.js";

module.exports = {
    name: "guildMemberRemove",
    once: false,
    execute(member: GuildMember) {
        try {
            console.log(`${member.id} left the Guild!`);
        } catch (e) {
            console.error("Ready Event: " + e);
        }
    },
};
