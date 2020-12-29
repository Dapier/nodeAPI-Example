const express = require("express");
const path = require("path");

const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You're amazing",
    "Thats a new shirt? because you looks nice",
    "I'm really proud of you",
    "You are pretty"
];

//Insults
const motivations = [
    "As soon as you trust yourself, you will know how to live.",
    "You cannot be lonely if you like the person you're alone with.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Never bend your head. Always hold it high. Look the world straight in the eye.",
    "Believe you can and you're halfway there.",
    "You can do it . I believe in you!"
]


//  make random component with Math.random
function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

function getRandomMotivation() {
    const randomIndex = Math.floor(Math.random() * motivations.length)
    return motivations[randomIndex]
}

const app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function (req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
});

app.get("/motivation", function (req2, res2) {
    res2
        .json({
            motivation: getRandomMotivation()
        })
        .end();
})


app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");