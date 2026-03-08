require("./keep_alive");

const mineflayer = require("mineflayer");

function createBot() {

  const bot = mineflayer.createBot({
    host: "pandasmp_35.aternos.me",  // buraya Aternos IP veya domain
    port: 15528,
    username: "BumBObot" // buraya bot ismi
  });

  bot.on("spawn", () => {
    console.log("Bot sunucuya girdi");

    // AFK hareketi
    setInterval(() => {
      bot.setControlState("jump", true);
      setTimeout(() => bot.setControlState("jump", false), 500);
    }, 30000);
  });

  bot.on("end", () => {
    console.log("Bot atıldı, yeniden bağlanıyor...");
    setTimeout(createBot, 10000);
  });

  bot.on("error", (err) => console.log(err));
}

createBot();