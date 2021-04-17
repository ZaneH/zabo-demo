const express = require("express");
const router = require("./controllers/balances");
const { zabo } = require("./modules/zabo");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: true,
  })
);
app.use(router);

app.listen("8080", async () => {
  await zabo();
  console.log("Listening on *:8080");
});
