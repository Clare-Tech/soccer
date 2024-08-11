"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandoski",
    ],
    [
      "Burki",
      "Schelz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandoski", "Gnarby", "Lewandoski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// creating the 2 players

const [players1, players2] = game.players;

const [gk1, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"]

const {odds:{team1, x:draw, team2}} =game

const printGoals = function(...players){
    console.log(`${players.length} goals was scored.`);
    
}

printGoals(...game.scored)

// check if team1 < team2
team1 < team2 && console.log("Team 1 is more likely to win")