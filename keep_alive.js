const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot çalışıyor");
});

app.listen(3000, () => {
  console.log("Keep alive aktif");
});