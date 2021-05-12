import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
  BlockchainsRouter,
  CurrenciesRouter,
  ProvidersRouter, TeamsRouter, TradingRouter,
  TransactionsRouter,
  UsersRouter
} from "./controllers";
import { zabo } from "./modules/zabo";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: true,
  })
);

app.use(CurrenciesRouter);
app.use(BlockchainsRouter);
app.use(ProvidersRouter);
app.use(TradingRouter);
app.use(TransactionsRouter);
app.use(UsersRouter);
app.use(TeamsRouter);

app.listen("8080", async () => {
  await zabo();
  console.log("Listening on *:8080");
});
