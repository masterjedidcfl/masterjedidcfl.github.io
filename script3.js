// Questions for my quiz
// -- Answers at index 0 are the correct answer
let quizData = [
    {
        question: "Where was I born?",
        answers: ["Florida", "Georgia", "Texas", "Flo Rida"],
        correct: 0 
    },
    {
        question: "What lived in my gingerbread house?",
        answers: ["Velociraptor", "T-Rex", "Chicken", "Me"],
        correct: 0 
    },
    {
        question: "What did I like to play in when I was a toddler.",
        answers: ["Sand Box", "Slide", "Ball Pit", "McDonalds Play Place"],
        correct: 0 
    },
    {
        question: "What did I earn my black belt in?",
        answers: ["Karate", "Judo", "Aikido", "Taw Kwon Do"],
        correct: 0 
    },
    {
        question: "What is my favorite food?",
        answers: ["Pizza", "Pumpkin Pie", "The snack that smiles back", "Meat Loaf"],
        correct: 0 
    },
    {
        question: "What Major am I?",
        answers: ["Computer Science", "Criminology", "Business", "Undecided"],
        correct: 0 
    },
    {
        question: "What does the meme say when you click the image on the nav bar?",
        answers: ["Perish", "Disappear", "Vanish", "You can click that?"],
        correct: 0 
    },
    {
        question: "What hairstyle did I have in high school?",
        answers: ["Jimmy Neitron's", "Alfalfa", "BALD", "Hey Arnald's"],
        correct: 0 
    }
];

// Function to shuffle answers
function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]]; 
    }
}

// Function to load question and answers
function loadQuiz() {
    let randomIndex = Math.floor(Math.random() * quizData.length);
    let selectedSet = quizData[randomIndex];

    let questionElement = document.getElementById("question");
    if (questionElement) {
        questionElement.textContent = selectedSet.question;
    }

    let shuffledAnswers = [...selectedSet.answers];
    shuffleAnswers(shuffledAnswers);

    shuffledAnswers.forEach((answer, index) => {
        let cardTextElement = document.getElementById(`card-answer-${index + 1}`);
        if (cardTextElement) {
            cardTextElement.textContent = answer;

            if (answer === selectedSet.answers[selectedSet.correct]) {
                cardTextElement.setAttribute("data-correct", "true");
            } 
            else {
                cardTextElement.removeAttribute("data-correct");
            }
        }
    });
}

// Function to reset the quiz
function resetQuiz() {
    let bar = document.getElementById("question-bar");

    bar.style.backgroundColor = ""; 

    enableCardClicks();

    loadQuiz();
}

// Function to handle card clicks
function cardClicked(event) {
    let card = event.target;
    let isCorrect = card.getAttribute("data-correct") === "true";
    let bar = document.getElementById("question-bar");
    let congratText = document.getElementById("question");

    if (isCorrect) {
        bar.style.backgroundColor = "#478978"; 
        congratText.textContent = "Correct! Click here to continue";
    } 
    else {
        bar.style.backgroundColor = "#a44a3f"; 
        congratText.textContent = "Incorrect! Click here to continue";
    }

    disableCardClicks();
}

// Function to disable card clicks when an answer is selected
function disableCardClicks() {
    document.querySelectorAll(".card-text").forEach(card => {
        card.style.pointerEvents = "none"; 
    });
}

// Function to enable card clicks when the quiz is reset
function enableCardClicks() {
    document.querySelectorAll(".card-text").forEach(card => {
        card.style.pointerEvents = "auto";
    });
}

// Make bar clickable to continue game
function addBarListener() {
    let bar = document.getElementById("question-bar");
    if (bar) {
        bar.addEventListener("click", resetQuiz);
    }
}

// Clicking cards
function addCardListeners() {
    document.querySelectorAll(".card-text").forEach(card => {
        card.addEventListener("click", cardClicked);
    });
}

// Load quiz with page
window.onload = function () {
    loadQuiz();
    addCardListeners(); 
    addBarListener(); 
};

// Goofy modal pop up
document.getElementById('profile-pic').addEventListener('click', function(event) {
    event.preventDefault(); 

    let myModal = new bootstrap.Modal(document.getElementById('perishModal'));
    myModal.show();
});
