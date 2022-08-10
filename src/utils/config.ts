class settings {
    public token: string;
    public joinrole: string;
    public welcomeChannel: string;
    public leaveChannel: string;
    public loggingChannel: string;
    public webHookTokenWelcome: string;
    public webHookIdWelcome: string;
    public webhookTokenLeave: string;
    public webhookIdLeave: string;

    constructor() {
        this.token =
            "ODgyOTY5MzAwNjI4MDQ1ODQ1.GZ4boN.Yyt3iruovQtBkKH0SyrC3pZXydtE0xvYoagmqc";
        this.joinrole = "838707921596448768";
        this.welcomeChannel = "975338035539492914";
        this.leaveChannel = "975338035539492914";
        this.loggingChannel = "975338035539492914";
        this.webHookIdWelcome = "975868107421790230";
        this.webHookTokenWelcome =
            "eY3KUfMudPzi5nI9lHkGBaVBsrKckN174adnJTivqaF6ld1PtNu-2EZVuthUJryx6LGx";
        this.webhookIdLeave = "975868107421790230";
        this.webhookTokenLeave =
            "eY3KUfMudPzi5nI9lHkGBaVBsrKckN174adnJTivqaF6ld1PtNu-2EZVuthUJryx6LGx";
    }
}

export const config = new settings();
