const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');

const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Mathias Vraa");
});

app.get("/players", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Example app is listening on localhost: ${port}`);
});