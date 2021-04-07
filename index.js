var readlineSync = require('readline-sync');
const chalk = require('chalk');

// creating own chalk themes
//bonus homework: using chalk
var welcome = chalk.bold.red.bgBlue;
var italic = chalk.italic;
var correct = chalk.bgGreen.bold.red;
var wrong = chalk.bgRedBright.bold.white;
var scoreColour = chalk.bgYellow.bold.white;
var underline = chalk.underline
var g = chalk.bold.green;
var r = chalk.bold.red;
var l = chalk.yellow;
var lvl = chalk.bold.magenta.bgWhite;
var hf = chalk.bgMagentaBright.bold.black;
var nt = chalk.bgRed;
var u = 0;
var score = 0;
var level = 1;
var userName; // to acess 'userName' outside of function 'welcomefn'

// welcome your user
function welcomefn(){
  userName = readlineSync.question('Enter Your Name : ');
  console.log(welcome('Hello!! ' + userName + italic(' Welcome To The "Companies G.K" (Quiz). ')));
}

//Data of high Scorers at the beginning of the game.
var highScores = [
  {
    name: "Bob",
    score: 11
  },

  {
    name: "Alice",
    score: 9
  },
]

// Functions
function play(que,ans){
  console.log(que);
  var userAns = readlineSync.question("Choose The Correct Option : ");

  // Branching
  if (userAns.toUpperCase() === ans.toUpperCase()){
    score++;
    console.log("Hurray " + underline(userName) + " Your Answer Is " + correct("Correct.") + g(" !!! "));
  } else {
    score--;
    console.log(underline(userName) + " Your Answer Is " + wrong("Wrong") + ", sorry" + r(" !!!"));
    console.log('The Correct Answer is : ' + '"' + correct(" " + ans + " ") + '"');
  }
  console.log("Your " + underline("Current Score") + " is : " + "" +scoreColour(" " + score + " "));

  //Introducing levels:
  if (score == 5 || score == 10){
  level++;
  console.log(lvl("CONGRATULATIONS " + "YOU HAVE REACHED " + " LEVEL: " + level + " "));
}
  console.log(l("------------------------------------------------"));
}

//Array Of Objects (quiz questions).
var questions = [
{
  que: ` Volkswagen is a company based in  
  a)Germany 
  b)Sweden 
  c)France 
  d)Russia 
  `,
  ans: "a"
  
},
{
  que: `
  With which company is Sundar Pichai associated?
  a)Amazon
  b)Microsoft
  c)Google
  c)Yahoo
   `,
  ans: "c"
},{
  que: `
   Nike is a multinational company with its headquarters in?
  a)France
  b)Germany
  c)U.S.A.
  d)Sweden
  `,
  ans: "c"
},{
  que: `
  Which company manufactures Pixel brand of mobile phones?
  a)Google
  b)Microsoft
  c)Amazon
  d)Motorola
  `,
  ans: "a"
},{
  que: `
  TAG Heuer is a famous brand of ?
  a)Watches
  b)Cars
  c)Jeans
  d)Pens
  `,
  ans: "a"
},{
  que: `
  Who is the founder of space transport services company, SpaceX?
  a)Jeff Bezos
  b)Elon Musk
  c)Evan Spiegel
  d)Jack Dorsey
  `,
  ans: "b"
},{
  que: `
  The headquarters of Amazon company are located in –
  a)California
  b)Seattle
  c)New York
  d)Detroit
  `,
  ans: "b"
},{
  que: `
  This company was famously started out of a Silicon Valley garage by two high-school friends ?
  a)Apple
  b)Microsoft
  c)Viewsonic
  d)Google
  `,
  ans: "a"
},{
  que: `
  This company got its start by selling books online.
  a)Toshiba
  b)Apple
  c)AOL
  d)Amazon
  `,
  ans: "d"
},{
  que: `
  Lufthansa is an airline company headquartered in –
  a)Germany
  b)France 
  c)Austria
  d)Spain
  `,
  ans: "a"
},{
  que: `
   Who of the following is the founder of Facebook?
  a)Tim Berners Lee
  b)Jimmy Wales
  c)Julian Assange
  d)Mark Zuckerburg
  `,
  ans: "d"
},{
  que: `RACEMO Sports Car was recently unveiled by –
  a)Maruti Suzuki
  b)Toyota
  c)yundai
  d)Tata Motors
  `,
  ans: "d"
}
];

// Loop For Acsessing The Array And Calling "play" Function. 
function game() {
  for (var v=0;v<questions.length;v++){
    var currentQues = questions[v];
    play(currentQues.que,currentQues.ans);
    }
}

// Hall of Fame
function hof(){
console.log(nt("Welcome To The Hall Of Fame <3"));
console.log("....,Here you Will Find The List Of Full And High Scorers");
}

// High Scorers
function highScoresOfGame(){
  console.log(nt(" Note : ") + " Check out the high scores after playimng the game, if you should be there ping me and I'll update it");
  console.log(l("------------------------------------------------"));
  console.log(hf("List Of High Scorers " + g(underline("hitherto (so far) !!! "))));
  for(var i=0;i<highScores.length;i++){
    var ch = highScores[i];
    console.log(g(ch.name));
    console.log(g(ch.score));
    console.log('---------------');
  }
}

//bonus homework: has the user beaten high score?
//Function to chaeck if the user is a highscorer.
//if user is a high scorer then his name will be added to list
function highScoreCheck(){
  for(var i=0;i<highScores.length;i++){
    var ch = highScores[i];
    if (score >= ch.score){
      console.log(g(userName));
      console.log(g(score));
      console.log('---------------');
      highScores.push({
        name: userName,
        score: score
        },);
      break; // The break statement terminates the current loop (if not used the data may repeat in our case...)
      }
    }
}

// Full Scorers (Note : appears only if you have scored full !!)
function fullScoreCheck(){
  if (score == 12){
    console.log(lvl("CONGRATULATIONS " + userName + " ALL ANSWERS ARE CORRECT :)"));
    console.log(hf("List Of Full Scorers : "));
    var fullScores = [userName,"Developer","Admin,.....",];
    for(var i=0;i<fullScores.length;i++){
    console.log(fullScores[i]);
    }
  }
}

//Print Your Final Score
function finalScore(){
console.log("Your " + underline("Final Score") + " is : " + "" +scoreColour(" " + score + " "));
console.log(l("------------------------------------------------"));
}

//  
function updatedArrayOfHighScores(){
  console.log(nt("Updated array of HighScores : "))
  for(var i=0;i<highScores.length;i++){
    console.log(highScores[i]);
  }
}



welcomefn();        // Function to welcome the user
highScoresOfGame(); // Functiuon to check highScores before the user plays the game.
game();             // Funtion ehich calls play Function to start quiz.
finalScore();       // function to print the finalScore.
hof();              // Funtion to weclcome user in hall of fame.
highScoresOfGame(); // Function to check highScores After the user plays the game.
highScoreCheck();   // Function to verify and add the current user into the highScorer's list.
fullScoreCheck();   // Function to list all the fullScores of the game.
updatedArrayOfHighScores(); // Function for Printing Updated Array Of HighScores.



