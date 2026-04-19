const express = require("express");
const app = express();

let lastAbility = null;
let scores = {}; // 🏆 نقاط اللاعبين

// 🏆 تسجيل الفوز
app.get("/win", (req, res) => {
    const winner = req.query.winner;

    if(!scores[winner]) scores[winner] = 0;

    scores[winner] += 10;

    console.log("Winner:", winner);
    console.log("Scores:", scores);

    res.send("");
});

// 📊 ليدر بورد
app.get("/leaderboard", (req, res) => {
    let sorted = Object.entries(scores)
        .sort((a,b)=>b[1]-a[1])
        .slice(0,5);

    res.json(sorted);
});

// ⚡ abilities
app.get("/ability", (req, res) => {
    const { player, type } = req.query;

    lastAbility = {
        player,
        type,
        time: Date.now()
    };

    res.send("");
});

app.get("/ability-data", (req, res) => {
    res.json(lastAbility || {});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
