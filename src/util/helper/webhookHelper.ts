import { WebhookClient } from "discord.js";

class WebhookHelper {
    async webhookClient(wID: string, wToken: string, embed?: any) {
        const webhookClient = new WebhookClient({
            id: wID,
            token: wToken,
        });

        await webhookClient.send({
            embeds: [embed],
        });
    }
}

export const { webhookClient } = new WebhookHelper();
