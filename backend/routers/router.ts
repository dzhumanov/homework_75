import { Router } from "express";

const codeRouter = Router();
const Vigenere = require("caesar-salad").Vigenere;

codeRouter.post("/encode", async (req, res) => {
  const codedWord = req.body.message;
  const password = req.body.password;
  const codedText = Vigenere.Cipher(password).crypt(codedWord);

  const responseObj = {
    encoded: codedText,
  }
  res.send(responseObj);
});

codeRouter.post("/decode", async (req, res) => {
  const codedWord = req.body.message;
  const password = req.body.password;
  const decodedText = Vigenere.Decipher(password).crypt(codedWord);

  const responseObj = {
    decoded: decodedText,
  }
  res.send(responseObj);
});

export default codeRouter;