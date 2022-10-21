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
        .setName('unban')
        .setDescription('Replies with Pong!')
        .addStringOption(option =>
            option
                .setName('targetmember')
                .setDescription("Fill in the ID of the user to unban!")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("Reason why you want to unban!")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionsBitField.Flags.BanMembers),
    async execute(interaction: any) {
        const targetMember: string = interaction.options.getString('targetmember')
        const reason = interaction.options.getString('reason')
        const logCH = interaction.guild.channels.fetch(logChannel)

        const simpleUnBanEmbed = new EmbedBuilder()
            .setColor("#272727")
            .setTitle("Ban Notify")
            .setDescription(`${userMention(targetMember)} has been banned...`)
            .setFooter({
                text: `${interaction.guild.name}`,
                iconURL: interaction.guild.iconURL({
                    size: 4096,
                    extension: "png"
                })
            });

        const unbanEmbedReason = new EmbedBuilder()
            .setColor("#272727")
            .setTitle("Ban Log")
            .setDescription(`${userMention(targetMember)} has been unbanned by ${userMention(interaction.user.id)}`)
            .addFields({
                name: "Unban Reason",
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

        interaction.guild.unban(targetMember, reason.toLocaleString())
        logCH.then(ch => {
            ch.send({embeds: [unbanEmbedReason]})
        })
        interaction.reply({embeds: [simpleUnBanEmbed]})
    },
};
