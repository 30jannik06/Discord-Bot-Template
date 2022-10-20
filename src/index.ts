/*
import { ActivityType, Client, Colors, EmbedBuilder } from "discord.js";
import { intent, joinrole, partial, token } from "./util/config/config";
import { err, evnt, log } from "./util/helper/consoleHelper";
import { pexelPhoto } from "./util/apis/pexelAPI";
import { webhookClient } from "./util/helper/webhookHelper";

export const client = new Client({
    intents: intent,
    partials: partial,
});


client.on("ready", async () => {
    //clear();
    log(`Logged in as ${client.user?.username}`);
    client.user?.setPresence({
        activities: [
            {
                name: "Jailtime",
                type: ActivityType.Streaming,
                url: "https://discord.gg/jailtime",
            },
        ],
        afk: false,
        status: "online",
    });

    pexelPhoto();
});
*/
/*
client.on("guildMemberAdd", (discordMember) => {
    try {
        let roleOne: any = discordMember.guild.roles.cache.find(
            (role) => role.id === joinrole
        );
        discordMember.roles.add(roleOne);

        let myEmbed = new EmbedBuilder()
            .setColor(Colors.White)
            .setTitle("Wilkommen")

            .setThumbnail(
                "https://cdn.discordapp.com/icons/838452466202443797/a_5e72df05275b8c886150f7e4ced79ac4.png?size=2048"
            );
        webhookClient(
            "975868107421790230",
            "eY3KUfMudPzi5nI9lHkGBaVBsrKckN174adnJTivqaF6ld1PtNu-2EZVuthUJryx6LGx",
            "",
            [myEmbed]
        );
    } catch (error: any) {
        err(error);
    }
});

*/
/*
client.on("guildMemberRemove", (discordMember) => {
    try {
        const myEmbed = new EmbedBuilder()
            .setColor(Colors.White)
            .setTitle("Leave")
            .setDescription(`<@${discordMember.id}> ist geleavt!`)
            .setThumbnail(
                "https://cdn.discordapp.com/icons/838452466202443797/a_5e72df05275b8c886150f7e4ced79ac4.png?size=2048"
            );

        webhookClient(
            "975868107421790230",
            "eY3KUfMudPzi5nI9lHkGBaVBsrKckN174adnJTivqaF6ld1PtNu-2EZVuthUJryx6LGx",
            "",
            [myEmbed]
        );
    } catch (error: any) {
        err(error);
    }
});

client.login(token);

 */
