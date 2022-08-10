import {
    channelLink,
    Client,
    DiscordAPIError,
    EmbedBuilder,
    GatewayIntentBits,
    Guild,
    Partials,
    WebhookClient,
    WelcomeChannel,
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
    logHelper.log(`Logged in as ${client.user?.username}`);

    const myEmbed = new EmbedBuilder()
        .setTitle("Wilkommen")
        .setDescription(
            `Moin <@${client.user.id}>! Willkommen bei **/Jailtime** .`
        )
        .setThumbnail(
            "https://cdn.discordapp.com/icons/838452466202443797/a_5e72df05275b8c886150f7e4ced79ac4.png?size=2048"
        );

    const webhookClient = new WebhookClient({
        id: config.webHookId,
        token: config.webHookToken,
    });

    webhookClient.send({ embeds: [myEmbed] });
});

client.on("guildMemberAdd", (newMember) => {
    try {
        let roleOne = newMember.guild.roles.cache.find(
            (role) => role.id === config.joinrole
        );
        newMember.roles.add(roleOne);

        // const myEmbed = new EmbedBuilder()
        //     .setTitle("Wilkommen")
        //     .setDescription(
        //         `Moin ${newMember.user.tag}! Willkommen bei ${Guild.name}.`
        //     )
        //     .setThumbnail(newMember.displayAvatarURL + "");

        // const webhookClient = new WebhookClient({
        //     id: config.webHookId,
        //     token: config.webHookToken,
        // });

        // webhookClient.send({ embeds: [myEmbed] });

        // let wChannel:   = newMember.guild.channels.cache.find((channel) => channel.id == config.welcomeChannel)
    } catch (err) {
        console.log(err);
    }
});

client.login(config.token);
