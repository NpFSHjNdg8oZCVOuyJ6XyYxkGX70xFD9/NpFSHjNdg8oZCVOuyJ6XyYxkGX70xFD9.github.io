const botResponses = [
    "I'm the real Israel GPT, how can I assist you?",
    "Shalom! What would you like to know about Israel?",
    "Did you know that Israel is known as the Start-Up Nation due to its vibrant tech industry?",
    "Israel has over 9 million people and is home to three major religions!",
    "Fun fact: The Dead Sea is the lowest point on Earth at 430 meters below sea level.",
    "Tel Aviv is known for its beautiful beaches and vibrant nightlife!",
    "Jerusalem is one of the oldest cities in the world, with over 3,000 years of history.",
    "Israel is a leader in water conservation and desalination technology.",
    "Did you know Hebrew was revived as a spoken language in the 19th century?",
    "Israel has more museums per capita than any other country!",
    "The Israeli tech scene has produced companies like Waze, Mobileye, and Viber.",
    "Interested in Israeli culture, history, or technology? I'm here to help!",
    "Israel's diverse landscape includes deserts, mountains, and Mediterranean coastline.",
    "What aspect of Israel would you like to explore today?",
    "From ancient history to modern innovation - what interests you about Israel?",
    "Israel is roughly the size of New Jersey but packed with incredible diversity!",
    "Did you know Israel has the highest number of startups per capita in the world?",
    "The Negev Desert covers over half of Israel's land area.",
    "Israeli cuisine is a delicious blend of Middle Eastern, Mediterranean, and Jewish influences!",
    "How can I help you learn more about Israel today?"
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