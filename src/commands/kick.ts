import {
    ChatInputCommandInteraction,
    EmbedBuilder, GuildMember,
    PermissionsBitField,
    SlashCommandBuilder,
    userMention
} from "discord.js";
import {logChannel} from "../util/config/config";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Replies with Pong!')
        .addUserOption(option =>
            option
                .setName('targetmember')
                .setDescription("Choose the member you want to kick!")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("Reason why you want to kick!")
                .setRequired(false)
        )
        .setDefaultMemberPermissions(PermissionsBitField.Flags.KickMembers),
    async execute(interaction: any) {
        const targetMember: GuildMember = interaction.options.getUser('targetmember')
        const reason = interaction.options.getString('reason')
        const logCH = interaction.guild.channels.fetch(logChannel)

        const simpleKickEmbed = new EmbedBuilder()
            .setColor("#272727")
            .setTitle("Kick Notify")
            .setDescription(`${userMention(targetMember.id)} has been kicked...`)
            .setFooter({
                text: `${interaction.guild.name}`,
                iconURL: interaction.guild.iconURL({
                    size: 4096,
                    extension: "png"
                })
            });

        if (reason != null) {
            const kickEmbedReason = new EmbedBuilder()
                .setColor("#272727")
                .setTitle("Kick Log")
                .setDescription(`${userMention(targetMember.id)} has been kicked by ${userMention(interaction.user.id)}`)
                .addFields({
                    name: "Kick Reason",
                    value: "" + reason,
                    inline: false
                })
                .setFooter({
                    text: `${interaction.guild.name}`,
                    iconURL: interaction.guild.iconURL({
                        size: 4096,
                        extension: "png"
                    })
                });
            interaction.guild.members.fetch(targetMember.id)
                .then(mb =>{
                    mb.kick(reason.toLocaleString())
                })
            logCH.then(ch =>{
                ch.send({embeds: [kickEmbedReason]})
            })
            interaction.reply({embeds: [simpleKickEmbed]})
        } else {
            const kickEmbed = new EmbedBuilder()
                .setColor("#272727")
                .setTitle("Kick Log")
                .setDescription(`${userMention(targetMember.id)} has been kicked by ${userMention(interaction.user.id)}`)
                .setFooter({
                    text: `${interaction.guild.name}`,
                    iconURL: interaction.guild.iconURL({
                        size: 4096,
                        extension: "png"
                    })
                });
            interaction.guild.members.fetch(targetMember.id)
                .then(mb =>{
                    mb.kick()
                })
            logCH.then(ch =>{
                ch.send({embeds: [kickEmbed]})
            })
            interaction.reply({embeds: [simpleKickEmbed]})
        }
    },
};
