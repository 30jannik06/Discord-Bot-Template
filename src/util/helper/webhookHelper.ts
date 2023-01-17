import { WebhookClient } from "discord.js";

class WebhookHelper {
    async webhookClient(
        wID: string,
        wToken: string,
        msg?: string,
        embed?: any[],
        file?: any[]
    ) {
        const webhookClient = new WebhookClient({
            id: wID,
            token: wToken,
        });

        await webhookClient.send({
            content: msg,
            embeds: embed,
            files: file,
        });
    }
}

export const { webhookClient } = new WebhookHelper();
