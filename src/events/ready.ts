import { clear, clog, error, evnt } from "../util/helper/logHelper";
import { Client } from "discord.js";
import fs = require("node:fs");
import { registerSlashCommands } from "../util/functions/registerSlashCommands";

module.exports = {
    name: "ready",
    once: true,
    execute(client: Client) {
        try {
            clear();
            clog(`Ready! Logged in as ${client.user?.tag}`);
            registerSlashCommands();
        } catch (e) {
            error("Ready Event: " + e);
        }
    },
};