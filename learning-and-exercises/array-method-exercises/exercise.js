// Complete the below questions using this array:
const array = [
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

//Create an array using map that has all the usernames with a "? to each of the usernames
const addQuestionMark = array.map(name => name.username + `?`);
console.log(addQuestionMark);

//Filter the array to only include users who are on team: red
const filterTeamRed = array.filter(user => user.team === 'red');
console.log(filterTeamRed)

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, number) => acc + number.score, 0);
console.log(totalScore);

// (1), what is the value of i? Index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);
console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!"
  });
  return user;
})
console.log(answer);

class Animal {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
}

class Mammal extends Animal {
  constructor(name, type, color){
    super(name, type, color)
  }
  sound() {
    console.log(`Yo poes my name is ${this.name} ek se. I am fokken lekker ${this.color} ${this.type}`);
  }
}

const cow = new Mammal('Jen', 'pink', 'flamingo');
cow.sound();