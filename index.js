const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = "67853f854a598db46b4d87fe003b1416";
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Amazon Scraper API");
});

//! GET product details
app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  try {
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/dp/${productId}`
    );
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
