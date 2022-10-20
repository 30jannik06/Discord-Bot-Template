import { EmbedBuilder } from "discord.js";
import { createClient, Photo } from "pexels";
import { err, evnt, log } from "../helper/consoleHelper";
import { webhookClient } from "../helper/webhookHelper";

class Pexels {
    public apiK: string;
    constructor() {
        this.apiK = "563492ad6f91700001000001e7510feef86844b796397635ededd172";
    }

    pexelPhoto() {
        // const pexelsClient = createClient(this.apiK)
        createClient("563492ad6f91700001000001e7510feef86844b796397635ededd172")
            .photos.random()
            .then((pex: any) => {
                try {
                    let name: Photo = pex.alt;
                    let picture: Photo = pex.src.original;

                    const myEmbed = new EmbedBuilder()
                        .setTitle(name + "")
                        .setImage(picture + "")
                        .setColor("Random");

                    webhookClient(
                        "975868107421790230",
                        "eY3KUfMudPzi5nI9lHkGBaVBsrKckN174adnJTivqaF6ld1PtNu-2EZVuthUJryx6LGx",
                        "",
                        [myEmbed]
                    );
                } catch (error: any) {
                    err(error);
                }
            });
    }
}

export const { pexelPhoto } = new Pexels();
