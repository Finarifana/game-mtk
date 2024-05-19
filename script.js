// Fungsi untuk menghitung GCD (PBB)
function calculateGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return calculateGCD(b, a % b);
}

// Fungsi untuk menghitung LCM (KPK)
function calculateLCM(a, b) {
    return (a * b) / calculateGCD(a, b);
}

// Fungsi untuk menangani input pengguna
function processInput() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput === "") return;

    addMessage(userInput, 'user');
    document.getElementById('userInput').value = '';

    if (userInput.includes('GCD') || userInput.includes('PBB')) {
        handleGCDInput(userInput);
    } else if (userInput.includes('LCM') || userInput.includes('KPK')) {
        handleLCMInput(userInput);
    } else {
        addMessage('Silakan masukkan pertanyaan atau bilangan yang valid.', 'bot');
    }
}

// Fungsi untuk menangani input GCD
function handleGCDInput(input) {
    const numbers = extractNumbers(input);
    if (numbers.length === 2) {
        const gcd = calculateGCD(numbers[0], numbers[1]);
        addMessage(`GCD (PBB) dari ${numbers[0]} dan ${numbers[1]} adalah: ${gcd}`, 'bot');
    } else {
        addMessage('Silakan masukkan dua bilangan untuk menghitung GCD.', 'bot');
    }
}

// Fungsi untuk menangani input LCM
function handleLCMInput(input) {
    const numbers = extractNumbers(input);
    if (numbers.length === 2) {
        const lcm = calculateLCM(numbers[0], numbers[1]);
        addMessage(`LCM (KPK) dari ${numbers[0]} dan ${numbers[1]} adalah: ${lcm}`, 'bot');
    } else {
        addMessage('Silakan masukkan dua bilangan untuk menghitung LCM.', 'bot');
    }
}

// Fungsi untuk mengekstrak bilangan dari input pengguna
function extractNumbers(input) {
    return input.match(/\d+/g).map(Number);
}

// Fungsi untuk menambahkan pesan ke chatbox
function addMessage(text, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const imgElement = document.createElement('img');
    imgElement.src = sender === 'bot' ? 'bot.png' : 'user.png';
    messageElement.appendChild(imgElement);

    const textElement = document.createElement('p');
    textElement.innerText = text;
    messageElement.appendChild(textElement);

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
