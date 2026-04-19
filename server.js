const express = require("express");

const app = express();

let lastAbility = null;

// 🏆
app.get("/win", (req, res) => {
    console.log("Winner:", req.query.winner);
    res.send("ok");
});

// ⚡ abilities
app.get("/ability", (req, res) => {
    const { player, type } = req.query;

    lastAbility = {
        player,
        type,
        time: Date.now()
    };

    res.send("ok");
});

// 📤 send ability
app.get("/ability-data", (req, res) => {
    res.json(lastAbility || {});
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});