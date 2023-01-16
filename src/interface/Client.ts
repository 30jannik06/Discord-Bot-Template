import { Client } from "discord.js";
import { intents, partials } from "../util/config/config";

export class DiscordBot extends Client {
    constructor(token: any) {
        super({
            intents: intents,
            partials: partials,
        });

        this.login(token);
    }
}
