import { Events, GuildMember } from "discord.js";

module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    execute(member: GuildMember) {
        try {
            console.log("join" + member.id);
        } catch (e) {
            console.error("Ready Event: " + e);
        }
    },
};
