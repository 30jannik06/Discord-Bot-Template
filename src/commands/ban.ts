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
        .setName('ban')
        .setDescription('Replies with Pong!')
        .addUserOption(option =>
            option
                .setName('targetmember')
                .setDescription("Choose the member you want to ban!")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("Reason why you want to ban!")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionsBitField.Flags.BanMembers),
    async execute(interaction: any) {
        const targetMember = interaction.options.getUser('targetmember')
        const reason = interaction.options.getString('reason')
        const logCH = interaction.guild.channels.fetch(logChannel)

        const simpleBanEmbed = new EmbedBuilder()
            .setColor("#272727")
            .setTitle("Ban Notify")
            .setDescription(`${userMention(targetMember.id)} has been banned...`)
            .setFooter({
                text: `${interaction.guild.name}`,
                iconURL: interaction.guild.iconURL({
                    size: 4096,
                    extension: "png"
                })
            });

            /*
            const banEmbedReason = new EmbedBuilder()
                .setColor("#272727")
                .setTitle("Ban Log")
                .setDescription(`${userMention(targetMember.id)} has been banned by ${userMention(interaction.user.id)}`)
                .addFields({
                    name: "Ban Reason",
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

             *//*
            interaction.guild.members.fetch(targetMember.id)
                .then(mb =>{
                    mb.ban(reason)
                })
                */
            interaction.guild.bans.create(targetMember.id, reason);
            /*
            logCH.then(ch =>{
                ch.send({embeds: [banEmbedReason]})
            })
            interaction.reply({embeds: [simpleBanEmbed]})

             */
    },
};
