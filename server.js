const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log(`Server listening for requests on port ${PORT}`);
});

app.get("/", (_req, res) => {
  res.redirect("/order-summary");
});

app.get("/order-summary", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});
