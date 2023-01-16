import { GuildMember, Events } from "discord.js";

module.exports = {
    name: Events.GuildMemberRemove,
    once: false,
    execute(member: GuildMember) {
        try {
            console.log("left" + member.id);
        } catch (e) {
            console.error("Ready Event: " + e);
        }
    },
};
