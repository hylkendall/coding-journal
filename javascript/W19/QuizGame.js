const questions = [
  {
    category: "JavaScript",
    question: "Which method adds an item to the end of an array?",
    choices: ["push()", "pop()", "shift()"],
    answer: "push()"
  },
  {
    category: "JavaScript",
    question: "What does JSON.stringify() return?",
    choices: ["an object", "a string", "an array"],
    answer: "a string"
  },
  {
    category: "CSS",
    question: "Which declaration makes an element a flex container?",
    choices: ["display: flex", "position: flex", "flex: 1"],
    answer: "display: flex"
  },
  {
    category: "HTML",
    question: "Which tag is used for the most important heading?",
    choices: ["<head>", "<h1>", "<h6>"],
    answer: "<h1>"
  },
  {
    category: "Git",
    question: "Which command uploads your commits to GitHub?",
    choices: ["git pull", "git commit", "git push"],
    answer: "git push"
  }
];

function getRandomQuestion(questions) {
    return questions[Math.floor(questions.length * Math.random())];
}

function getRandomComputerChoice(choices) {
    return choices[Math.floor(choices.length * Math.random())];
}

function getResults(questionObj, computerChoice){
    if (computerChoice === questionObj.answer) {
        return `The computer's choice is correct!`;
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}
const questionObj = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(questionObj.choices);

console.log(questionObj.question);
console.log(computerChoice);
console.log(getResults(questionObj, computerChoice));