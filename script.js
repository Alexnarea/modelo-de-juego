const questions = [

        {
            question: "¿Cuál es el factor común de la expresión 4x + 8?",
            options: ["4", "x", "2", "8"],
            correctAnswer: "a"
        },
        {
            question: "Factoriza la expresión 5a - 10.",
            options: ["5(a - 2)", "10(a - 1)", "5(a + 2)", "10(a + 1)"],
            correctAnswer: "a"
        },
        // ... Otras preguntas de Factor Común
        {
            question: "¿Cuántos números hay en la tercera fila del triángulo de Pascal?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "c"
        },
        {
            question: "¿Cuál es el valor en la tercera fila y segunda columna del triángulo de Pascal?",
            options: ["1", "2", "3", "4"],
            correctAnswer: "b"
        },
        {
            question: "¿Cuál es el factor común de la expresión 4x + 8?",
            options: ["4", "x", "2", "8"],
            correctAnswer: "a"
        },
        {
            question: "Factoriza la expresión 5a - 10.",
            options: ["5(a - 2)", "10(a - 1)", "5(a + 2)", "10(a + 1)"],
            correctAnswer: "a"
        },
        // ... Otras preguntas de Factor Común
        {
            question: "¿Cuántos números hay en la tercera fila del triángulo de Pascal?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "c"
        },
        {
            question: "¿Cuál es el valor en la tercera fila y segunda columna del triángulo de Pascal?",
            options: ["1", "2", "3", "4"],
            correctAnswer: "b"
        },
      
    ];
    

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = String.fromCharCode("a".charCodeAt(0) + selectedIndex);

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score += 10; // Puedes ajustar el puntaje según tus preferencias
        resultContainer.innerHTML = `<p>¡Correcto! Puntuación actual: ${score}</p>`;
    } else {
        resultContainer.innerHTML = `<p>Incorrecto. La respuesta correcta es ${currentQuestion.correctAnswer.toUpperCase()}.</p>`;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";

    resultContainer.innerHTML = `<h2>Tu calificación final es: ${score}/100</h2>`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Iniciar el juego con la primera pregunta
showQuestion();
