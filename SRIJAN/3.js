let captchaQuestion = document.getElementById('captcha-question');
let resultDiv = document.getElementById('result');

function generateCaptcha() {
    let num1 = Math.floor(Math.random() * 10) + 1; 
    let num2 = Math.floor(Math.random() * 10) + 1; 
    captchaQuestion.textContent = `What is ${num1} + ${num2}?`;
    return num1 + num2; 
}

let correctAnswer = generateCaptcha();
function checkCaptcha() {
    let userAnswer = parseInt(document.getElementById('captcha-answer').value);
    if (userAnswer === correctAnswer) {
        resultDiv.textContent = 'My phone number is: +91 7903385276' ; 
        resultDiv.classList.remove('hidden');
    } else {
        resultDiv.textContent = 'Incorrect answer, please try again.';
        resultDiv.classList.remove('hidden');
        correctAnswer = generateCaptcha(); 
    }
}

function toggleDashboard() {
    document.querySelector('.dashboard').classList.toggle('open');
}
