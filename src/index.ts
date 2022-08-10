import {
    Client,
    Colors,
    EmbedBuilder,
    GatewayIntentBits,
    Partials,
    WebhookClient,
} from "discord.js";
import { config } from "./utils/config";
import { logHelper } from "./utils/logHelper";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildWebhooks,
    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember,
    ],
});

client.on("ready", () => {
    logHelper.clear();
    logHelper.log(`Logged in as ${client.user?.username}`);
});

client.on("guildMemberAdd", (discordMember) => {
    try {
        let roleOne = discordMember.guild.roles.cache.find(
            (role) => role.id === config.joinrole
        );
        discordMember.roles.add(roleOne);

        const myEmbed = new EmbedBuilder()
            .setColor(Colors.White)
            .setTitle("Wilkommen")
            .setDescription(
                `Moin <@${discordMember.id}>! Willkommen bei **/Jailtime** .`
            )
            .setThumbnail(
                "https://cdn.discordapp.com/icons/838452466202443797/a_5e72df05275b8c886150f7e4ced79ac4.png?size=2048"
            );

        const webhookClient = new WebhookClient({
            id: config.webHookIdWelcome,
            token: config.webHookTokenWelcome,
        });

        webhookClient.send({ embeds: [myEmbed] });
    } catch (err) {
        console.log(err);
    }
});

client.on("guildMemberRemove", (discordMember)=> {
        try {
            const myEmbed = new EmbedBuilder()
                .setColor(Colors.White)
                .setTitle("Leave")
                .setDescription(
                    `<@${discordMember.id}> ist geleavt!`
                )
                .setThumbnail(
                    "https://cdn.discordapp.com/icons/838452466202443797/a_5e72df05275b8c886150f7e4ced79ac4.png?size=2048"
                );

            const webhookClient = new WebhookClient({
                id: config.webhookIdLeave,
                token: config.webhookTokenLeave,
            });

            webhookClient.send({ embeds: [myEmbed] });
        } catch (err) {
            console.log(err);
        }
});

client.login(config.token);
