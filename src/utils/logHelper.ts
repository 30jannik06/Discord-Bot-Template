class LogHelper {
    async log(msg: string) {
        console.log("📗[BOT] " + msg);
    }
    async error(msg: string) {
        console.error("📕[ERROR] " + msg);
    }
    async warn(msg: string) {
        console.warn("📙[WARN] " + msg);
    }
    async cmd(msg: string) {
        console.log("📘[CMD] " + msg);
    }
    async evnt(msg: string) {
        console.log("📓[EVENT] " + msg);
    }
    async clear() {
        console.clear();
    }
}

export const logHelper = new LogHelper();
