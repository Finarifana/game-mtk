let score = 0;
let timeLeft = 10;
let timer;
let currentQuestion = {};

function startGame() {
    score = 0;
    timeLeft = 10;
    document.getElementById('score').innerText = `Skor: ${score}`;
    document.getElementById('startButton').disabled = true;
    document.getElementById('answer').disabled = false;
    document.getElementById('submitButton').disabled = false;
    document.getElementById('clearButton').disabled = false;
    nextQuestion();
}

function nextQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    currentQuestion = generateQuestion();
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('feedback').innerText = '';
    document.getElementById('answer').value = '';
    startTimer();
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const type = Math.random() > 0.5 ? 'GCD' : 'LCM';
    const question = `${type} dari ${num1} dan ${num2}?`;
    const answer = type === 'GCD' ? calculateGCD(num1, num2) : calculateLCM(num1, num2);
    return { question, answer };
}

function calculateGCD(a, b) {
    if (b === 0) return a;
    return calculateGCD(b, a % b);
}

function calculateLCM(a, b) {
    return (a * b) / calculateGCD(a, b);
}

function startTimer() {
    document.getElementById('timer').innerText = `Waktu: ${timeLeft} detik`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Waktu: ${timeLeft} detik`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

function submitAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentQuestion.answer) {
        score += 10;
        document.getElementById('feedback').innerText = 'Benar!';
    } else {
        document.getElementById('feedback').innerText = `Salah. Jawaban yang benar adalah ${currentQuestion.answer}`;
    }
    document.getElementById('score').innerText = `Skor: ${score}`;
    nextQuestion();
}

function clearAnswer() {
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function gameOver() {
    document.getElementById('question').innerText = 'Permainan Selesai!';
    document.getElementById('timer').innerText = '';
    document.getElementById('feedback').innerText = `Skor Akhir: ${score}`;
    document.getElementById('answer').value = '';
    document.getElementById('answer').disabled = true;
    document.getElementById('submitButton').disabled = true;
    document.getElementById('clearButton').disabled = true;
    document.getElementById('startButton').disabled = false;
}
