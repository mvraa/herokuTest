const express = require("express");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const importData = require("./data.json");
let port = process.env.PORT || 3000;

// router:
const layouts = require("express-ejs-layouts");
app.use(layouts);
var mypageRouter = require('./routes/mypage');
app.use('/mypage', mypageRouter);

app.get("/", (req, res) => {
    res.send("Mathias Vraa");


});

app.get("/players", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Example app is listening on localhost: ${port}`);
});