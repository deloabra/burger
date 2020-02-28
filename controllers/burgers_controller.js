var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        res.render("index", {burger: data});
    });
});

module.exports = router;