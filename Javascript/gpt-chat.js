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
    music: [
        "Israeli music is incredibly diverse, blending Middle Eastern, European, and modern influences!",
        "Israel has won the Eurovision Song Contest four times!",
        "Israeli musicians like Idan Raichel and Omer Adam are internationally acclaimed.",
        "Mizrahi music combines traditional Middle Eastern melodies with modern pop.",
        "The Israel Philharmonic Orchestra is one of the world's leading orchestras!",
        "Israeli hip-hop and electronic music scenes are thriving in Tel Aviv.",
        "Traditional Israeli folk dancing (Hora) is popular at celebrations and festivals.",
        "Many famous musicians like Ofra Haza helped bring Israeli music to the world stage.",
        "Yemenite, Ethiopian, and Russian musical traditions enrich Israel's music scene.",
        "The Red Sea Jazz Festival in Eilat is one of the region's premier music events!"
    ],
    culture: [
        "Israeli culture is a vibrant mix of ancient traditions and modern innovation!",
        "Israel celebrates both Jewish holidays and modern national commemorations.",
        "Israeli literature has produced Nobel Prize winners like S.Y. Agnon.",
        "The arts scene in Israel is incredibly diverse, from street art to classical performances.",
        "Israeli cinema has gained international recognition with films like 'Waltz with Bashir'.",
        "Coffee culture is huge in Israel - cafes are social hubs in every city!",
        "Israeli fashion designers are making waves on international runways.",
        "The country celebrates Independence Day with BBQs, concerts, and fireworks!",
        "Israeli theater is vibrant, with performances in Hebrew, Arabic, Russian, and more.",
        "Street markets like Carmel Market and Mahane Yehuda are cultural experiences!",
        "Israeli beaches become dance parties during summer weekends!",
        "The Tel Aviv Pride Parade is one of the largest in the Middle East."
    ],
    sports: [
        "Basketball is hugely popular in Israel - Maccabi Tel Aviv is a legendary European team!",
        "Football (soccer) is the most popular sport, with passionate fans across the country.",
        "Israel has competed in the Olympics since 1952.",
        "Israeli athletes have won medals in judo, sailing, windsurfing, and gymnastics.",
        "The Maccabiah Games, held in Israel, is the world's third-largest sporting event!",
        "Omri Casspi was the first Israeli to play in the NBA.",
        "Beach sports like beach volleyball and surfing are popular along the coast.",
        "Israeli tennis player Shahar Pe'er reached the top 20 in world rankings.",
        "Cycling and marathons are growing in popularity, especially in Tel Aviv.",
        "Israel's national football team has qualified for the FIFA World Cup."
    ],
    language: [
        "Hebrew is the official language of Israel and was revived as a spoken language!",
        "Arabic is also an official language spoken by many Israeli citizens.",
        "Many Israelis speak multiple languages including English, Russian, and French.",
        "Hebrew is written from right to left and uses a unique alphabet.",
        "Modern Hebrew was largely revived by Eliezer Ben-Yehuda in the late 1800s.",
        "Israeli slang is colorful and constantly evolving!",
        "Over 100 languages are spoken in Israel due to its diverse immigrant population.",
        "Yiddish and Ladino are historical Jewish languages still spoken by some communities.",
        "English is widely taught in schools and used in business and tourism.",
        "Israeli Sign Language is used by the deaf community in Israel."
    ],
    education: [
        "Israel has one of the highest rates of university degrees per capita in the world!",
        "The Hebrew University of Jerusalem was founded in 1925 and is world-renowned.",
        "The Technion in Haifa is called 'Israel's MIT' and is a leader in tech education.",
        "Tel Aviv University and Ben-Gurion University are also top research institutions.",
        "Israel invests heavily in STEM education and innovation.",
        "Military service often includes specialized technical training.",
        "Israeli students consistently rank high in international math and science competitions.",
        "The Weizmann Institute is one of the world's leading research centers.",
        "Education is compulsory and free for children ages 3-18.",
        "Israel has specialized schools for arts, music, technology, and sciences."
    ],
    nature: [
        "Israel has over 500 nature reserves protecting diverse ecosystems!",
        "The Dead Sea is the lowest point on Earth at 430 meters below sea level.",
        "Ramon Crater (Makhtesh Ramon) is the world's largest erosion crater.",
        "Israel is a major bird migration route with over 500 species passing through.",
        "The Negev Desert covers more than half of Israel's land area.",
        "The Hula Valley is one of the world's most important bird-watching sites.",
        "Israel has Mediterranean forests, deserts, mountains, and coral reefs!",
        "Ein Gedi oasis is home to waterfalls, wildlife, and ancient caves.",
        "The Galilee region features green mountains and the Sea of Galilee.",
        "Israel has successfully reforested millions of trees over the past century.",
        "The Red Sea coral reefs near Eilat are among the world's most northern.",
        "Israel's nature reserves protect endangered species like the Nubian ibex."
    ],
    religion: [
        "Israel is home to Judaism, Christianity, and Islam - three of the world's major religions!",
        "The Western Wall in Jerusalem is one of the holiest sites in Judaism.",
        "The Church of the Holy Sepulchre marks the site of Jesus's crucifixion and resurrection.",
        "The Dome of the Rock and Al-Aqsa Mosque are important Islamic sites in Jerusalem.",
        "Bahá'í Gardens in Haifa are a UNESCO World Heritage site and major pilgrimage destination.",
        "Israel has religious freedom protected by law for all faiths.",
        "The Sea of Galilee is significant in Christian history as the site of Jesus's ministry.",
        "Nazareth is the largest Arab city in Israel and an important Christian pilgrimage site.",
        "The Cave of the Patriarchs in Hebron is sacred to both Jews and Muslims.",
        "Religious diversity is a fundamental part of Israeli society and identity."
    ],
    military: [
        "The Israel Defense Forces (IDF) is one of the most technologically advanced militaries in the world.",
        "Most Israeli citizens serve in the military - men for 32 months and women for 24 months.",
        "The IDF's technology units have created innovations used worldwide.",
        "Israel has developed advanced defense systems like Iron Dome and David's Sling.",
        "Military service often provides technical training that helps Israel's tech industry.",
        "Israel has elite special forces units including Sayeret Matkal and Shayetet 13.",
        "The IDF values innovation and encourages soldiers to think creatively.",
        "Many Israeli startups are founded by veterans who met during military service."
    ],
    science: [
        "Israel has won numerous Nobel Prizes in Chemistry, Economics, and Literature!",
        "Israeli scientists are leaders in fields like agriculture, medicine, and physics.",
        "The Weizmann Institute is one of the world's top research institutions.",
        "Israel developed drip irrigation technology that revolutionized farming worldwide.",
        "Israeli researchers are pioneering developments in stem cell research and genetics.",
        "Israel has more scientific papers per capita than almost any other nation.",
        "Israeli scientists have made breakthroughs in solar energy and renewable technologies.",
        "The Dead Sea provides unique conditions for medical research and treatments.",
        "Israel's space program has successfully sent satellites and lunar missions.",
        "Israeli medical research has led to innovations in cancer treatment and diagnostics."
    ],
    tourism: [
        "Israel welcomes over 4 million tourists annually from around the world!",
        "Top tourist sites include the Western Wall, Masada, and the Dead Sea.",
        "Israel offers diverse experiences from historical sites to modern cities and natural wonders.",
        "The Israel National Trail is a 1,000 km hiking path through the entire country.",
        "Eilat is a popular resort destination with coral reefs and year-round sunshine.",
        "Jerusalem attracts pilgrims and tourists interested in religious history.",
        "Tel Aviv's beaches and nightlife draw visitors looking for Mediterranean vibes.",
        "Israel has 9 UNESCO World Heritage Sites including Masada and the Old City of Acre.",
        "The Bahá'í Gardens in Haifa are one of Israel's most visited attractions.",
        "Float in the Dead Sea - the world's saltiest body of water and a unique experience!"
    ],
    economy: [
        "Israel has a highly developed free-market economy with a strong tech sector.",
        "Israel's GDP per capita is among the highest in the Middle East.",
        "The country is known as the 'Start-Up Nation' with thousands of tech companies.",
        "Israel is a global leader in cybersecurity, with many international companies having R&D centers there.",
        "The Tel Aviv Stock Exchange is a major financial hub in the region.",
        "Israel exports diamonds, technology, pharmaceuticals, and agricultural products.",
        "Major companies like Intel, Google, and Microsoft have significant operations in Israel.",
        "Israel has free trade agreements with the US, EU, and many other countries.",
        "The shekel (₪) is Israel's currency and has remained relatively stable.",
        "Israel invests heavily in research and development - among the highest rates globally."
    ],
    agriculture: [
        "Israel is a pioneer in agricultural technology despite limited water and arable land!",
        "Israeli farmers developed drip irrigation, now used worldwide to conserve water.",
        "Israel exports over $2 billion in agricultural products annually.",
        "Israeli scientists have developed drought-resistant crops and innovative farming techniques.",
        "The Negev Desert has been transformed through advanced irrigation methods.",
        "Israel grows tomatoes, peppers, avocados, and citrus fruits for export.",
        "Kibbutzim (collective communities) have played a major role in Israeli agriculture.",
        "Israel is a leader in greenhouse technology and precision agriculture.",
        "Israeli cows are among the most productive dairy cows in the world!",
        "Fish farming and aquaculture are growing industries in Israel."
    ],
    festivals: [
        "Israel celebrates both religious holidays and modern national holidays!",
        "Independence Day (Yom Ha'atzmaut) features BBQs, concerts, and air force flyovers.",
        "Purim is a festive holiday with costumes, parties, and carnival celebrations.",
        "Hanukkah, the Festival of Lights, is celebrated with candle lighting and traditional foods.",
        "Passover (Pesach) commemorates the Exodus from Egypt with special meals and traditions.",
        "Yom Kippur is the holiest day, when the entire country comes to a standstill.",
        "Sukkot involves building temporary shelters and celebrating the harvest.",
        "Tel Aviv Pride is one of the largest LGBTQ+ celebrations in the Middle East.",
        "The Jerusalem Light Festival illuminates the Old City with spectacular displays.",
        "Israel Film Festival showcases the best of Israeli cinema each year.",
        "The Red Sea Jazz Festival in Eilat attracts international musicians.",
        "Holocaust Remembrance Day (Yom HaShoah) is observed with sirens and ceremonies nationwide."
    ],
    beaches: [
        "Israel has over 270 km of stunning Mediterranean coastline!",
        "Tel Aviv's beaches are famous for volleyball, surfing, and beach parties.",
        "The Red Sea coast near Eilat offers world-class diving and snorkeling.",
        "Israeli beaches are free and accessible to everyone.",
        "Gordon Beach and Frishman Beach in Tel Aviv are among the most popular.",
        "The Dead Sea beaches offer unique floating experiences due to extreme salinity.",
        "Dor Beach near Haifa features ancient ruins alongside beautiful waters.",
        "Many beaches have been awarded Blue Flag status for cleanliness and safety.",
        "Beach culture is central to Israeli lifestyle, especially in summer.",
        "Herzliya and Netanya offer beautiful beaches north of Tel Aviv.",
        "Israeli beaches come alive at sunset with people gathering for the views.",
        "Water sports like kitesurfing and paddleboarding are popular along the coast."
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

    const blockedKeywords = [
        'holocaust', 'shoah', 'concentration camp', 'extermination', 'mass murder',
        'genocide', 'ethnic cleansing', 'ethnic purge', 'mass killing', 'exterminate', 'cleanse',
        'war crime', 'war criminal', 'crimes against humanity', 'human rights violation', 'atrocity',
        'apartheid', 'segregation', 'racial discrimination', 'systematic oppression', 'racist state',
        'state controlled media', 'controlling the media', 'controls media', 'media control', 'propaganda machine',
        'brainwashing', 'censorship', 'manipulating media', 'fake news', 'propaganda state',
        'illegitimate state', 'should not exist', 'destroy israel', 'wipe off the map'
    ];

    for (const keyword of blockedKeywords) {
        if (lowerMessage.includes(keyword)) {
            return "I will NOT engage with questions containing inflammatory, inappropriate, or offensive content. This chatbot is designed to share positive, factual information about Israel's culture, history, innovation, and achievements. Please ask respectful questions.";
        }
    }

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
    if (lowerMessage.includes('music') || lowerMessage.includes('song') || lowerMessage.includes('artist') || lowerMessage.includes('singer') || lowerMessage.includes('band') || lowerMessage.includes('concert') || lowerMessage.includes('eurovision') || lowerMessage.includes('festival')) {
        return botResponses.music[Math.floor(Math.random() * botResponses.music.length)];
    }
    if (lowerMessage.includes('culture') || lowerMessage.includes('tradition') || lowerMessage.includes('holiday') || lowerMessage.includes('celebration') || lowerMessage.includes('art') || lowerMessage.includes('cinema') || lowerMessage.includes('film') || lowerMessage.includes('movie') || lowerMessage.includes('literature') || lowerMessage.includes('fashion')) {
        return botResponses.culture[Math.floor(Math.random() * botResponses.culture.length)];
    }
    if (lowerMessage.includes('sport') || lowerMessage.includes('basketball') || lowerMessage.includes('football') || lowerMessage.includes('soccer') || lowerMessage.includes('athlete') || lowerMessage.includes('olympic') || lowerMessage.includes('game')) {
        return botResponses.sports[Math.floor(Math.random() * botResponses.sports.length)];
    }
    if (lowerMessage.includes('language') || lowerMessage.includes('hebrew') || lowerMessage.includes('arabic') || lowerMessage.includes('speak') || lowerMessage.includes('words')) {
        return botResponses.language[Math.floor(Math.random() * botResponses.language.length)];
    }
    if (lowerMessage.includes('education') || lowerMessage.includes('university') || lowerMessage.includes('school') || lowerMessage.includes('student') || lowerMessage.includes('learning') || lowerMessage.includes('research')) {
        return botResponses.education[Math.floor(Math.random() * botResponses.education.length)];
    }
    if (lowerMessage.includes('nature') || lowerMessage.includes('desert') || lowerMessage.includes('wildlife') || lowerMessage.includes('animal') || lowerMessage.includes('park') || lowerMessage.includes('reserve') || lowerMessage.includes('dead sea') || lowerMessage.includes('environment')) {
        return botResponses.nature[Math.floor(Math.random() * botResponses.nature.length)];
    }
    if (lowerMessage.includes('religion') || lowerMessage.includes('religious') || lowerMessage.includes('faith') || lowerMessage.includes('church') || lowerMessage.includes('mosque') || lowerMessage.includes('synagogue') || lowerMessage.includes('temple') || lowerMessage.includes('holy') || lowerMessage.includes('sacred') || lowerMessage.includes('prayer') || lowerMessage.includes('worship')) {
        return botResponses.religion[Math.floor(Math.random() * botResponses.religion.length)];
    }
    if (lowerMessage.includes('military') || lowerMessage.includes('army') || lowerMessage.includes('idf') || lowerMessage.includes('defense') || lowerMessage.includes('soldier') || lowerMessage.includes('service') || lowerMessage.includes('iron dome')) {
        return botResponses.military[Math.floor(Math.random() * botResponses.military.length)];
    }
    if (lowerMessage.includes('science') || lowerMessage.includes('scientific') || lowerMessage.includes('research') || lowerMessage.includes('nobel') || lowerMessage.includes('scientist') || lowerMessage.includes('discovery') || lowerMessage.includes('laboratory')) {
        return botResponses.science[Math.floor(Math.random() * botResponses.science.length)];
    }
    if (lowerMessage.includes('tourism') || lowerMessage.includes('tourist') || lowerMessage.includes('visit') || lowerMessage.includes('travel') || lowerMessage.includes('trip') || lowerMessage.includes('vacation') || lowerMessage.includes('site') || lowerMessage.includes('attraction')) {
        return botResponses.tourism[Math.floor(Math.random() * botResponses.tourism.length)];
    }
    if (lowerMessage.includes('economy') || lowerMessage.includes('economic') || lowerMessage.includes('gdp') || lowerMessage.includes('export') || lowerMessage.includes('trade') || lowerMessage.includes('market') || lowerMessage.includes('finance') || lowerMessage.includes('currency') || lowerMessage.includes('shekel')) {
        return botResponses.economy[Math.floor(Math.random() * botResponses.economy.length)];
    }
    if (lowerMessage.includes('agriculture') || lowerMessage.includes('farming') || lowerMessage.includes('farm') || lowerMessage.includes('crop') || lowerMessage.includes('irrigation') || lowerMessage.includes('kibbutz')) {
        return botResponses.agriculture[Math.floor(Math.random() * botResponses.agriculture.length)];
    }
    if (lowerMessage.includes('festival') || lowerMessage.includes('holiday') || lowerMessage.includes('purim') || lowerMessage.includes('hanukkah') || lowerMessage.includes('passover') || lowerMessage.includes('yom kippur') || lowerMessage.includes('sukkot') || lowerMessage.includes('independence day')) {
        return botResponses.festivals[Math.floor(Math.random() * botResponses.festivals.length)];
    }
    if (lowerMessage.includes('beach') || lowerMessage.includes('coast') || lowerMessage.includes('surf') || lowerMessage.includes('swim') || lowerMessage.includes('mediterranean') || lowerMessage.includes('sea') || lowerMessage.includes('diving') || lowerMessage.includes('snorkel')) {
        return botResponses.beaches[Math.floor(Math.random() * botResponses.beaches.length)];
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