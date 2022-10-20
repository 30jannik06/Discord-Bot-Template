/*
 * Class created by .jannik
 * https://www.github.com/30jannik06
 * 09.09.22, 08:22
 */
//#region Imports
/*
 * Needs at least:
 * @napi-rs/canvas@0.1.29
 * discord.js@14.3.0
 * (if not installed you also need "undici")
 */

import Canvas from "@napi-rs/canvas";
import { AttachmentBuilder, GuildMember, WebhookClient } from "discord.js";
import { request } from "undici";
//#endregion

class CanvasCreator {
    async canvas(
        user: GuildMember, //Sets the username.
        msg: string, // Sets the message in the Top row on the Picture.
        state: string, // Sets the ending of the picture name. Example at Row: "81".
        webhId: string, // Sets the webhookID where it should send to.
        webhToken: string // Sets the webhookToken where it should send to.
    ) {
        /*
         * USAGE: Sets the hight and width of the Picture.
         */
        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext("2d");

        /*
         * USAGE: Sets the Background of the Picture.
         * !!ATTENTION!!: The Background picture needs to be Uploaded,
         * then it only works right.
         */
        const background = await Canvas.loadImage(
            "https://i.imgur.com/9iSSezU.jpeg"
        );
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        /*
         * USAGE: Draws the a Border around the Background.
         */
        context.strokeStyle = "#ff0000";
        context.strokeRect(0, 0, canvas.width, canvas.height);

        /*
         * USAGE: Sets the Text about the Username.
         */
        context.font = "28px monteserrat";
        context.fillStyle = "#ffffff";
        context.fillText(msg, canvas.width / 2.5, canvas.height / 3.5);

        /*
         * USAGE: Sets the Username Text
         */
        context.font = applyText(canvas, `${user.user.username}!`);
        context.fillStyle = "#ffffff";
        context.fillText(
            `${user.user.username}!`,
            canvas.width / 2.5,
            canvas.height / 1.8
        );

        /*
         * USAGE: Draws the Avatar of the User.
         */
        context.beginPath();
        context.arc(125, 125, 100, 0, Math.PI * 2, true);
        context.closePath();
        context.clip();
        const { body } = await request(
            user.displayAvatarURL({ extension: "jpg" })
        );
        const avatar = await Canvas.loadImage(await body.arrayBuffer());
        context.drawImage(avatar, 25, 25, 200, 200);

        /*
         * Takes all Variables and puts it into a Picture.
         * The Picture name will be like in the Example:
         * EXAMPLE: 084820342490242-join.png <- UserID-State.png (State needs to be set in the Variable.)
         */
        const attachment = new AttachmentBuilder(await canvas.encode("png"), {
            name: `${user.id}-${state}.png`,
        });

        /*
         * USAGE: Creates a new WebhookClient to send the Message with the Welcome Picture.
         */
        const webhookClient = new WebhookClient({
            id: webhId,
            token: webhToken,
        });

        /*
         * USAGE: Sends the Picture with the WebhookClient.
         */
        webhookClient.send({ files: [attachment] });
    }
}

let applyText = (canvas: any, text: string) => {
    const context = canvas.getContext("2d");
    let fontSize = 70;
    do {
        context.font = `${(fontSize -= 10)}px sans-serif`;
    } while (context.measureText(text).width > canvas.width - 300);
    return context.font;
};

export const { canvas } = new CanvasCreator();
