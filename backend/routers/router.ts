import { Router } from "express";

const codeRouter = Router();
const Vigenere = require("caesar-salad").Vigenere;

codeRouter.post("/encode", async (req, res) => {
  const codedWord = req.body.message;
  const password = req.body.password;
  const codedText = Vigenere.Cipher(password).crypt(codedWord);
  res.send(codedText);
});

codeRouter.post("/decode", async (req, res) => {
  const codedWord = req.body.message;
  const password = req.body.password;
  const decodedText = Vigenere.Decipher(password).crypt(codedWord);
  res.send(decodedText);
});

export default codeRouter;