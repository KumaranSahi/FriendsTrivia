const readlineSync=require('readline-sync');
const chalk = require('chalk');

const questions=[
  {
    "quote":"Joey doesn’t share food!",
    "banter":"Who else will know Joey better than Joey ;)",
    "answer":"Joey"
  },
  {
    "quote":"How you doin'?",
    "banter":"That one was too easy ¯\_(ツ)_/¯",
    "answer":"Joey"
  },
  {
    "quote":"They don’t know that we know they know we know.",
    "banter":"Good old Pheobe",
    "answer":"Pheobe"
  },
  {
    "quote":"Come on, Ross, you’re a paleontologist. Dig a little deeper.",
    "banter":"Now thats a burn!",
    "answer":"Pheobe"
  },
  {
    "quote":"Well, maybe I don’t need your money. Wait, wait, I said maybe!",
    "banter":"This one brings back memories.",
    "answer":"Rachel"
  },
  {
    "quote":"Okay, you have to stop the Q-Tip when there’s resistance.",
    "banter":"This was his Favorite line from the series!",
    "answer":"Chandler"
  },
  {
    "quote":"I got off the plane.",
    "banter":"This one was tough",
    "answer":"Rachel"
  },
  {
    "quote":"Your little Harmonica is hammered.",
    "banter":"It is what it is",
    "answer":"Monica"
  },
  {
    "quote":"We were on a break!",
    "banter":"Oh Ross",
    "answer":"Ross"
  },
  {
    "quote":"Pivot",
    "banter":"Classic!",
    "answer":"Ross"
  }
]

const options=["Chandler","Joey","Monica","Pheobe","Rachel","Ross"];


const askQuestion=(question)=>{
  
  console.log(question.quote);
  
  let answer = readlineSync.keyInSelect(options, 'Who might it be?');
  if(question.answer===options[answer]){
    console.log(chalk.green("That is correct!\n"))
    console.log(chalk.bgBlue(question.banter)+"\n");
    return true;
  }else{
    console.log("That is " +chalk.redBright("incorrect :("))
    console.log('The right answer is '+chalk.bgGreenBright(question.answer)+'\n')
    return false;
  }
}


const gameStart=()=>{
  let score=0;
  questions.forEach(question=>{
    askQuestion(question)?score++:null;
    console.log("Your score is "+chalk.cyan(score)+"\n");
  });
  return score;
}


let userName=readlineSync.question('Whats your name?\n')
var score=0;
console.log('Hey '+chalk.blue(userName+"!"));

if(readlineSync.keyInYN('Wanna see how well you know '+ chalk.red('friends? '))){
  console.log("I'm gonna quote some famous lines said by Joey, Chandler, Monica, Pheobe, Rachel and Ross\nYour job is to tell me who uttered those lines.\n")
  console.log("Sounds simple enough right?\nLets get Started!\n");
  let score=gameStart();
  if(score<=5){
    console.log("I'd recommend another binge watch!")
  }else if(score>5&&score<=8){
    console.log("That was a good attempt!")
  }else if(score>8){
    console.log("All Hail the binge watching legend" +chalk.red(userName)+"!!");
  }
  
}else{
  console.log('Tough Luck!')
}