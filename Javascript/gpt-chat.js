const botResponses = {
    israel: [
        "Did you know that Israel is known as the Start-Up Nation due to its vibrant tech industry?",
        "Israel has over 9 million people and is home to three major religions!",
        "Israel is a leader in water conservation and desalination technology.",
        "Israel has more museums per capita than any other country!",
        "Israel's diverse landscape includes deserts, mountains, and Mediterranean coastline.",
        "Israel is roughly the size of New Jersey but packed with incredible diversity!",
        "Did you know Israel has the highest number of startups per capita in the world?"
    ],
    tech: [
        "The Israeli tech scene has produced companies like Waze, Mobileye, and Viber.",
        "Israel is known as the Start-Up Nation with a thriving technology sector!",
        "Did you know Israel has the highest number of startups per capita in the world?",
        "Israeli innovation has led to breakthroughs in cybersecurity, AI, and medical technology."
    ],
    jerusalem: [
        "Jerusalem is one of the oldest cities in the world, with over 3,000 years of history.",
        "Jerusalem is sacred to Judaism, Christianity, and Islam.",
        "The Old City of Jerusalem contains sites holy to three major religions.",
        "Jerusalem has been continuously inhabited for over 5,000 years!"
    ],
    telaviv: [
        "Tel Aviv is known for its beautiful beaches and vibrant nightlife!",
        "Tel Aviv was founded in 1909 and is now Israel's economic hub.",
        "Tel Aviv has been called 'The Mediterranean Capital of Cool'!",
        "Tel Aviv is home to the largest concentration of Bauhaus architecture in the world."
    ],
    food: [
        "Israeli cuisine is a delicious blend of Middle Eastern, Mediterranean, and Jewish influences!",
        "Hummus, falafel, and shakshuka are popular Israeli dishes!",
        "Israeli breakfast is legendary - featuring fresh salads, cheeses, and bread.",
        "Did you know that Israel has a thriving culinary scene with many Michelin-rated restaurants?"
    ],
    history: [
        "Jerusalem is one of the oldest cities in the world, with over 3,000 years of history.",
        "Israel became an independent state in 1948.",
        "The Dead Sea Scrolls, discovered near the Dead Sea, date back over 2,000 years!",
        "Masada is an ancient fortress with a dramatic history of resistance."
    ],
    politics: [
        "Israel is a parliamentary democracy with a President as head of state and a Prime Minister as head of government.",
        "The Knesset is Israel's unicameral parliament with 120 members elected every four years.",
        "Israel has a multi-party political system with diverse representation across the political spectrum.",
        "The Israeli Supreme Court is known for its independence and active role in judicial review.",
        "Israel's Basic Laws serve as a de facto constitution, protecting fundamental rights and freedoms.",
        "The President of Israel is elected by the Knesset and serves a largely ceremonial role for seven years.",
        "Israel has diplomatic relations with over 160 countries worldwide."
    ],
    default: [
        "I'm the real Israel GPT, how can I assist you?",
        "Shalom! What would you like to know about Israel?",
        "Interested in Israeli culture, history, or technology? I'm here to help!",
        "What aspect of Israel would you like to explore today?",
        "From ancient history to modern innovation - what interests you about Israel?",
        "How can I help you learn more about Israel today?"
    ]
};

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

function answerQuestion(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('what is') || lowerMessage.includes('what\'s')) {
        if (lowerMessage.includes('capital')) {
            return "The capital of Israel is Jerusalem, though Tel Aviv is the economic and cultural center.";
        }
        if (lowerMessage.includes('population')) {
            return "Israel has a population of over 9 million people.";
        }
        if (lowerMessage.includes('size') || lowerMessage.includes('big') || lowerMessage.includes('area')) {
            return "Israel is approximately 22,000 square kilometers (8,500 square miles), roughly the size of New Jersey.";
        }
    }

    if (lowerMessage.includes('when')) {
        if (lowerMessage.includes('founded') || lowerMessage.includes('established') || lowerMessage.includes('independence')) {
            return "Israel declared independence on May 14, 1948.";
        }
    }

    if (lowerMessage.includes('where')) {
        if (lowerMessage.includes('located')) {
            return "Israel is located in the Middle East, on the eastern shore of the Mediterranean Sea, bordered by Lebanon, Syria, Jordan, and Egypt.";
        }
    }

    if (lowerMessage.includes('how many')) {
        if (lowerMessage.includes('people') || lowerMessage.includes('population')) {
            return "Israel has over 9 million people.";
        }
        if (lowerMessage.includes('cities')) {
            return "Israel has dozens of cities, with major ones including Jerusalem, Tel Aviv, Haifa, and Beersheba.";
        }
    }

    if (lowerMessage.includes('who is')) {
        if (lowerMessage.includes('prime minister') || lowerMessage.includes('leader')) {
            return "Israel is led by a Prime Minister who serves as the head of government. The current government operates through a parliamentary democracy.";
        }
        if (lowerMessage.includes('president')) {
            return "The President of Israel is the head of state and is elected by the Knesset for a seven-year term. The role is largely ceremonial.";
        }
    }

    if (lowerMessage.includes('government') || lowerMessage.includes('political system')) {
        return "Israel is a parliamentary democracy. The Knesset, with 120 members, is the legislative body. The Prime Minister leads the government.";
    }

    if (lowerMessage.includes('knesset')) {
        return "The Knesset is Israel's unicameral parliament with 120 members elected every four years through proportional representation.";
    }

    return null;
}

function getRelevantResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    const specificAnswer = answerQuestion(userMessage);
    if (specificAnswer) {
        return specificAnswer;
    }

    if (lowerMessage.includes('israel') || lowerMessage.includes('country') || lowerMessage.includes('nation')) {
        return botResponses.israel[Math.floor(Math.random() * botResponses.israel.length)];
    }
    if (lowerMessage.includes('tech') || lowerMessage.includes('startup') || lowerMessage.includes('technology') || lowerMessage.includes('innovation') || lowerMessage.includes('company') || lowerMessage.includes('companies') || lowerMessage.includes('business')) {
        return botResponses.tech[Math.floor(Math.random() * botResponses.tech.length)];
    }
    if (lowerMessage.includes('jerusalem') || lowerMessage.includes('holy city') || lowerMessage.includes('old city')) {
        return botResponses.jerusalem[Math.floor(Math.random() * botResponses.jerusalem.length)];
    }
    if (lowerMessage.includes('tel aviv') || lowerMessage.includes('telaviv') || lowerMessage.includes('beach') || lowerMessage.includes('nightlife')) {
        return botResponses.telaviv[Math.floor(Math.random() * botResponses.telaviv.length)];
    }
    if (lowerMessage.includes('food') || lowerMessage.includes('cuisine') || lowerMessage.includes('hummus') || lowerMessage.includes('falafel') || lowerMessage.includes('dish') || lowerMessage.includes('eat') || lowerMessage.includes('restaurant')) {
        return botResponses.food[Math.floor(Math.random() * botResponses.food.length)];
    }
    if (lowerMessage.includes('history') || lowerMessage.includes('historical') || lowerMessage.includes('ancient') || lowerMessage.includes('past') || lowerMessage.includes('old') || lowerMessage.includes('heritage')) {
        return botResponses.history[Math.floor(Math.random() * botResponses.history.length)];
    }
    if (lowerMessage.includes('politic') || lowerMessage.includes('government') || lowerMessage.includes('knesset') || lowerMessage.includes('democracy') || lowerMessage.includes('prime minister') || lowerMessage.includes('president') || lowerMessage.includes('parliament') || lowerMessage.includes('election') || lowerMessage.includes('vote') || lowerMessage.includes('law') || lowerMessage.includes('legislative')) {
        return botResponses.politics[Math.floor(Math.random() * botResponses.politics.length)];
    }
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    chatInput.value = '';

    setTimeout(() => {
        const response = getRelevantResponse(message);
        addMessage(response, false);
    }, 1000);
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});