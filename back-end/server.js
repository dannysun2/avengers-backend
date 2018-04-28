var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var heroes = ["Iron Man",
              "Thor",
              "Hulk",
              "Captain America",
              "Black Widow",
              "Dr. Strange",
              "War Machine",
              "Black Panther",
              "Vision",
              "Scarlet Witch",
              "Falcon",
              "White Wolf",
              "Heimdall",
              "Loki",
              "Eitri the Dwarf King",
              "Star-Lord",
              "Mantis",
              "Nebula",
              "Drax the Destroyer",
              "Gamora",
              "Groot",
              "Rocket",
              "Taneleer Tivan",
              "Thanos"];

app.use(bodyParser.json())

app.get('/api/characters', function (req, res) {
  res.send(heroes)
});

app.post('/api/character/delete', function (req, res) {
  heroes.splice(heroes.indexOf(req.body.character), 1)
  res.send(heroes)
})

app.listen(3000, function () {
  console.log('Ready');
});
