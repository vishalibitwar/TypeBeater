window.addEventListener('load', init);
// Available Levels
const levels = {
  easy: 6,
  medium: 4,
  hard: 2,
  difficult: 1
};

// To change level
let currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;
let highscore = 0;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const hscore = document.querySelector('#highscore');
const levelmessage = document.getElementById('levelmessage');

const words = [
  'VISHAL',
  'Dell',
  'Laptop',
  'Rushikesh',
  'Raka',
  'Sam',
  'NM17',
  'krish',
  'chota jay',
  'Battery',
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'jason',
  'Itspara',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'sahebrao',
  'MuttonDinner',
  'space',
  'definition',
  'facebook',
  'instagram',
  'snapchat',
  'lavekarsir',
  'Builder',
  'schiffer',
  'Leopard'
];

// Initialize Game
function init() {
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  levelNumber(currentLevel);
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if (score > 35) {
    currentLevel = levels.difficult;
  } else if (score > 22) {
    currentLevel = levels.hard;
  } else if (score > 10) {
    currentLevel = levels.medium;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = localStorage.getItem('currentscore');
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function levelNumber(currentLevel) {
  if (currentLevel == levels.easy) {
    levelmessage.innerHTML = ` Level I`;
  } else if (currentLevel == levels.medium) {
    levelmessage.innerHTML = ` Level II`;
  } else if (currentLevel == levels.hard) {
    levelmessage.innerHTML = ` Level III`;
  } else if (currentLevel == levels.difficult) {
    levelmessage.innerHTML = ` Level IV`;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    return true;
  } else {
    return false;
  }
}


function showWord(words) {

  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    if (score != -1) {
      localStorage.setItem('currentscore', score);
    }
    message.innerHTML = 'Game Over!!!';
    message.style.color = "red";
    currentWord.innerHTML = 'New Game!!';
    currentLevel = levels.easy;
    setLocalStorage(score);
    score = -1;
  } else {
    message.innerHTML = '';
  }
}

function setLocalStorage(score) {
  highscore = localStorage.getItem('highscore');
  if (highscore < score) {
    localStorage.setItem('highscore', score);
  }
  hscore.innerHTML = localStorage.getItem('highscore');

}

// document.oncontextmenu = function () {
//   return false;
// }

// document.onkeydown = function (event) {
//   if (event.which == 123)
//     return false;
//   else if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
//     return false;
//   else if (event.ctrlKey && event.which == 85)
//     return false;
// }