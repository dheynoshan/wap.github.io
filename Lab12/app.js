const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.enable("case sensitive routing");

app.use("/users", (req, res, next) => {
    fs.
  res.send("Hi");
});

app.use("/products", (req, res, next) => {
    res.send("products");
});

app.listen(3000, () => console.log("Listening on 3000"));
