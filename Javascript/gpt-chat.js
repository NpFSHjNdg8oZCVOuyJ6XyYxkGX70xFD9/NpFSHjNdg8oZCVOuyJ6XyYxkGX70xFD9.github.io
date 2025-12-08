const botResponses = [
    "Im the real Israel GPT, how can I assist you?",
    "Shalom! What would you like to know about Israel?",
    "Did you know that Israel is known as the Start-Up Nation due to its vibrant tech industry?"
];

const messagesContainer = document.getElementById('messages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    chatInput.value = '';

    setTimeout(() => {
        const response = botResponses[Math.floor(Math.random() * botResponses.length)];
        addMessage(response, false);
    }, 1000);
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});