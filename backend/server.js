const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Api running");
});

app.get("/api/chats", (req, res) => {
  //const jsonContent = JSON.stringify(chats);
  //res.json(jsonContent);
  res.json(chats);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
