const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

// router:
var mypageRouter = require('./routes/mypage');
app.use('/mypage', mypageRouter);

app.get("/", (req, res) => {
    res.send("Mathias Vraa");

    res.render('mypage', {
        title: 'My List Page'
    });
});

app.get("/players", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Example app is listening on localhost: ${port}`);
});