import express from "express";
import cors from 'cors';
import codeRouter from "./routers/router";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use("/vigenere", codeRouter);

const run = async () => {
  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
};

void run();
