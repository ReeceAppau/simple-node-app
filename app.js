const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the homepage</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>My name is Reece</h1>");
});

app.listen(3000);
