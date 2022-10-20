import {clear, clog, err} from "../util/helper/consoleHelper";
import {token, clientId, guildId} from "../util/config/config";
import {Client, REST, Routes} from 'discord.js';
import fs = require('node:fs');
import {registerSlashCommands} from "../util/functions/registerSlashCommands";

module.exports = {
    name: 'ready',
    once: true,
    execute(client: Client) {
        try {
            clear();
            clog(`Ready! Logged in as ${client.user?.tag}`);
            registerSlashCommands()
        } catch (e) {
            err("Ready Event: " + e);
        }
    },
};
