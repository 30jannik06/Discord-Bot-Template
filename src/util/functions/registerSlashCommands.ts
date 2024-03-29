import { REST, Routes } from "discord.js";
import { clientId, guildId, token } from "../config/config";
import fs from "node:fs";
import { cmd, error, evnt } from "../helper/logHelper";

class SlashCommand {
    async registerSlashCommands() {
        try {
            const commands = [];
            const commandFiles = fs
                .readdirSync(process.cwd() + "\\out\\commands")
                .filter((file) => file.endsWith(".js"));

            for (const file of commandFiles) {
                const command = require(process.cwd() +
                    `\\out\\commands/${file}`);
                commands.push(command.data.toJSON());
            }

            const rest = new REST({ version: "10" }).setToken(token);

            evnt(
                `Started refreshing ${commands.length} application [/] commands.`
            );

            const data = await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: commands }
            );

            evnt(`Successfully reloaded  application [/] commands.`);

            commands.forEach((x) => {
                cmd(x.name);
            });
        } catch (err) {
            error(err);
        }
    }
}

export const { registerSlashCommands } = new SlashCommand();
