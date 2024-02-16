"use strict";

class Estudiante {
    constructor(usuario, contraseña, logros) {
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.logros = logros;
        this.score = 0;
    }

    login() {
        let intentos = 3;

        while (intentos > 0) {
            let inputUsuario = prompt("Ingrese su nombre de usuario:");
            let inputContraseña = prompt("Ingrese su contraseña:");

            if (inputUsuario.toLowerCase() === this.usuario.toLowerCase() && inputContraseña === this.contraseña) {
                alert("Bienvenido a ALGEMANIA BALDOR EN ACCIÓN!");
                this.startQuiz();
                return; // Sale del bucle si las credenciales son correctas
            } else {
                alert(`Usuario o Contraseña Incorrecta. Te quedan ${intentos} intentos.`);
                intentos--;
            }
        }

        alert("Has agotado tus intentos. Por favor, vuelve a intentarlo más tarde.");
    }
    

    startQuiz() {
        showQuestion();
    }

    answerQuestion(selectedIndex) {
        let currentQuestion = questions[currentQuestionIndex];
        let selectedAnswer = String.fromCharCode("a".charCodeAt(0) + selectedIndex);

        if (selectedAnswer === currentQuestion.correctAnswer) {
            this.score += 10;
            resultContainer.innerHTML = `<p>¡Correcto! Puntuación actual: ${this.score}</p>`;
        } else {
            resultContainer.innerHTML = `<p>Incorrecto. La respuesta correcta es ${currentQuestion.correctAnswer.toUpperCase()}.</p>`;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            this.showResult();
        }
    }

    showResult() {
        questionContainer.style.display = "none";
        optionsContainer.style.display = "none";
        nextButton.style.display = "none";

        resultContainer.innerHTML = `<h2>Tu calificación final es: ${this.score}/100</h2>`;
        this.showAchievements();
    }

    showAchievements() {
        alert(`${this.usuario}, tu puntuación es ${this.score}.`);
    
        if (this.score >= 80 && !this.logros.includes("Maestría en Álgebra Avanzada")) {
            alert("¡Eres un maestro! Has alcanzado el nivel avanzado.");
            this.logros.push("Maestría en Álgebra Avanzada");
        } else if (this.score >= 50 && !this.logros.includes("Dominio en Factorización")) {
            alert("¡Increíble! Has alcanzado el nivel intermedio.");
            this.logros.push("Dominio en Factorización");
        } else if (this.score >= 20 && !this.logros.includes("Iniciación a las Ecuaciones")) {
            alert("¡Felicidades! Has alcanzado el nivel principiante.");
            this.logros.push("Iniciación a las Ecuaciones");
        }
    
        // Mostrar solo el último logro obtenido
        const ultimoLogro = this.logros[this.logros.length - 1];
        alert(`Logro de ${this.usuario}: ${ultimoLogro}`);
    }
}

let estudiante = new Estudiante("Alexis", "6969", ["Maestro de las ecuaciones"]);

let questions = [
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
    {
        question: "¿Cuál es el factor común de la expresión 4x + 8?",
        options: ["4", "x", "2", "8"],
        correctAnswer: "a"
    },
    {
        question: "Factoriza la expresión 5a - 10.",
        options: ["5(a - 2)", "10(a - 1)", "5(a + 2)", "10(a + 1)"],
        correctAnswer: "a"
    }
];


let currentQuestionIndex = 0;

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
        optionElement.addEventListener("click", () => estudiante.answerQuestion(index));
        optionsContainer.appendChild(optionElement);
    });
}

function showResult() {
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";

    resultContainer.innerHTML = `<h2>Tu calificación final es: ${estudiante.score}/100</h2>`;
    estudiante.showAchievements();
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Iniciar el juego con la primera pregunta
estudiante.login();
