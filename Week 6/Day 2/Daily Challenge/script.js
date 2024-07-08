const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
//1)
let arr = []
gameInfo.forEach((user) => {
arr.push(user.username + "!")
});
console.log(arr)


//2)
let scores = []
gameInfo.forEach((users) =>{
    if (users.score > 5) {
scores.push(users.username)
}
});
console.log(scores);

//3)
let sum = gameInfo.reduce((total, user) => total + user.score, 0);
console.log("The total score is:", sum);













