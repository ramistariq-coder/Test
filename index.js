</> JavaScript 
const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("POS API Running 🚀");
});

app.post("/pos-sale", async (req, res) => {
  const { phone, amount } = req.body;

  console.log("POS Sale:", name, phone, amount);

  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
