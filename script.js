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

// coding challenge 2
// let scoredGoals = game.scored
// let numGoals = scoredGoals.length - scoredGoals.length
// console.log(scoredGoals);
// for(const goals of scoredGoals){
//   numGoals += 1
//   console.log(`Goal ${numGoals}: ${goals} `);

// }
let entries1 = game.scored.entries()

for(let [key, value] of Object.entries(game.scored)){
  console.log(`Goal ${Number(key) + 1}: ${value} `); 
  
}

// calculate the average odd
let avgOdds = 0;
let odds = Object.values(game.odds)

for(const odd of odds){
  avgOdds += odd
  avgOdds /= odds.length
  console.log(avgOdds);
  
}

// 3
const threeOdds = Object.entries(game.odds);
for(const [team, odd] of threeOdds){
  const teamString = team === "x" ? "draw" : `victory ${game[team]}`
  // console.log(team);
  
  console.log(`Odd of ${teamString}: ${odd}`);
  
}

// bonus exercise
// const scorers ={
//   Gnarby: 1,
//   Hummels:1,
//   Lewandowski:2
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//   console.log(scorers[player]);
  
// }

//  console.log(scorers);

const  scored = ["Lewandoski", "Gnarby", "Lewandoski", "Hummels"]
const actualGoals = {}

for(const value of scored){
  actualGoals[value] ? actualGoals[value]++ : actualGoals[value] = 1
  // console.log(actualGoals);
   
}
console.log(actualGoals);