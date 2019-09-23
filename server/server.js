const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, "..", "public");

// Autentíquese con la API de Google Spreadsheets.
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public\\index.html"));
});
app.listen(port, () => {
  console.log("Server is up! in: "+port);
});
