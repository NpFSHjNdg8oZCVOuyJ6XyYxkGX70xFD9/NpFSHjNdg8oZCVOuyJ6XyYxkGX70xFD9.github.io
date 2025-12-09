const botResponses = {
    aquaculture: [
        "Israel is a leader in desert aquaculture, raising fish in arid regions.",
        "Tilapia, known locally as St. Peter's fish, is farmed in the Sea of Galilee.",
        "Israeli scientists have developed sustainable fish farming techniques.",
        "Aquaculture helps Israel conserve water while producing protein.",
        "Eilat is famous for its coral reef and marine research.",
        "Fish farming is expanding in the Negev Desert.",
        "Israel exports aquaculture technology worldwide.",
        "Aquaponics is being used in Israeli greenhouses for efficient food production."
    ],
    architecture: [
        "Tel Aviv is known for its Bauhaus architecture, a UNESCO World Heritage Site.",
        "Jerusalem blends ancient stone with modern design.",
        "The Azrieli Towers are iconic skyscrapers in Tel Aviv.",
        "Israel's desert cities use innovative cooling and shading techniques.",
        "The Supreme Court building in Jerusalem is an architectural marvel.",
        "Many Israeli homes have flat roofs for solar panels.",
        "The Weizmann House in Rehovot is a modernist masterpiece.",
        "Israel's kibbutzim feature unique communal architecture."
    ],
    astronomy: [
        "Israel's Wise Observatory is a leading center for astronomical research.",
        "The Negev Desert offers clear skies for stargazing.",
        "Israeli astronomers contribute to international space missions.",
        "The Givatayim Observatory is open to the public for night sky viewing.",
        "Israel participates in global efforts to track asteroids and comets.",
        "Astronomy is a popular subject in Israeli schools.",
        "The Israeli Space Agency supports astronomical research.",
        "Desert astronomy festivals attract enthusiasts from around the world."
    ],
    banking: [
        "Israel's banking system is highly regulated and stable.",
        "The Bank of Israel is the country's central bank.",
        "Israeli banks are leaders in digital banking technology.",
        "Mobile payment apps are widely used in Israel.",
        "Israel's shekel is a strong and stable currency.",
        "International banks have branches in Tel Aviv.",
        "Israeli ATMs offer services in multiple languages.",
        "Bank Leumi and Bank Hapoalim are Israel's largest banks."
    ],
    biodiversity: [
        "Israel is a biodiversity hotspot with many unique species.",
        "The Hula Valley is a major stopover for migrating birds.",
        "Israel's coral reefs are among the northernmost in the world.",
        "The Carmel Mountains are home to rare plants and animals.",
        "Israel has reintroduced extinct species like the Persian fallow deer.",
        "Nature reserves protect Israel's diverse habitats.",
        "The Dead Sea region supports unique salt-tolerant plants.",
        "Israel's forests are home to wild boar, jackals, and foxes."
    ],
    biotechnology: [
        "Israel is a global leader in biotechnology innovation.",
        "Israeli biotech firms develop cutting-edge medical treatments.",
        "The Weizmann Institute is renowned for biotech research.",
        "Israel's biotech exports are valued in the billions.",
        "Israeli scientists have developed breakthrough cancer therapies.",
        "Biotech startups thrive in Israel's innovation ecosystem.",
        "Israel hosts international biotech conferences.",
        "Israeli universities offer top programs in biotechnology."
    ],
    chocolate: [
        "Elite is Israel's most famous chocolate brand.",
        "Chocolate spread is a popular treat for Israeli children.",
        "Israeli chocolatiers create unique flavors with local ingredients.",
        "Chocolate coins (gelt) are given during Hanukkah.",
        "Boutique chocolate shops are found in Tel Aviv and Jerusalem.",
        "Israel hosts chocolate festivals and workshops.",
        "Chocolate babka is a beloved Israeli pastry.",
        "Israeli chocolate is often paired with coffee."
    ],
    comics: [
        "Israeli comics blend humor, history, and social commentary.",
        "The cartoonist Dudu Geva is a national icon.",
        "Israeli graphic novels are gaining international recognition.",
        "Comics are used in Israeli schools to teach history and language.",
        "Tel Aviv hosts an annual comics and illustration festival.",
        "Israeli superheroes appear in local comic books.",
        "Comics are a popular form of political satire in Israel.",
        "Israeli artists contribute to global comic anthologies."
    ],
    crafts: [
        "Israeli crafts include ceramics, glasswork, and jewelry.",
        "Bedouin weaving is a traditional craft in the Negev.",
        "Jerusalem's Old City is famous for handmade souvenirs.",
        "Israeli artists create modern Judaica for holidays and rituals.",
        "Craft fairs are held in cities across Israel.",
        "Olive wood carvings are a specialty of Bethlehem and Nazareth.",
        "Israeli embroidery blends Middle Eastern and European styles.",
        "Handmade candles are popular for Hanukkah and Shabbat."
    ],
    democracy: [
        "Israel is the only liberal democracy in the Middle East.",
        "Elections in Israel are based on proportional representation.",
        "Israel has a vibrant free press and independent judiciary.",
        "The Knesset is Israel's parliament, with 120 members.",
        "Israel's Basic Laws function as a de facto constitution.",
        "Women and minorities have full voting rights in Israel.",
        "Israel's Supreme Court is known for its activism.",
        "Political parties in Israel represent a wide spectrum of views."
    ],
    desertlife: [
        "Bedouin communities have lived in the Negev for centuries.",
        "Desert agriculture in Israel is a model for arid regions.",
        "Solar energy projects are booming in the Negev Desert.",
        "The Ramon Crater is a unique geological feature in the Negev.",
        "Desert wildlife includes ibex, foxes, and hyraxes.",
        "Desert festivals celebrate music, art, and culture.",
        "The Negev is home to innovative water-saving technologies.",
        "Desert hiking trails offer stunning views and solitude."
    ],
    diplomacy: [
        "Israel maintains diplomatic relations with over 160 countries.",
        "The Ministry of Foreign Affairs is based in Jerusalem.",
        "Israel is a member of the United Nations and many international organizations.",
        "Israeli diplomats serve in embassies around the world.",
        "Israel has signed peace treaties with Egypt, Jordan, and others.",
        "Israel participates in humanitarian missions globally.",
        "Foreign ambassadors are accredited to Israel in Tel Aviv and Jerusalem.",
        "Israel's diplomatic corps is known for its professionalism."
    ],
    diving: [
        "Eilat is Israel's top destination for scuba diving and snorkeling.",
        "The Red Sea coral reefs are home to colorful marine life.",
        "Diving sites include shipwrecks and underwater observatories.",
        "Diving schools in Eilat attract students from around the world.",
        "Night dives reveal bioluminescent creatures in the Red Sea.",
        "Israel hosts international diving competitions.",
        "Marine conservation is a priority for Israeli divers.",
        "Diving is a popular hobby for Israelis of all ages."
    ],
    energy: [
        "Israel is investing heavily in renewable energy sources.",
        "Solar power provides a significant share of Israel's electricity.",
        "Natural gas fields in the Mediterranean fuel Israel's power plants.",
        "Israel is a leader in solar water heating technology.",
        "Wind farms are being developed in the Golan Heights.",
        "Energy conservation is promoted in Israeli schools.",
        "Israel is developing smart grid technology.",
        "Electric vehicles are becoming more common in Israeli cities."
    ],
    environment: [
        "Israel has pioneered desert reforestation projects.",
        "The Society for the Protection of Nature in Israel is a leading NGO.",
        "Israel recycles a high percentage of its household waste.",
        "Environmental education is part of the Israeli school curriculum.",
        "Israel's Clean Beach Program keeps coastlines pristine.",
        "Green building standards are used in new Israeli construction.",
        "Israel is restoring wetlands and natural habitats.",
        "Eco-tourism is growing in popularity in Israel."
    ],
    film: [
        "Israeli films have won awards at Cannes and the Oscars.",
        "Waltz with Bashir is a groundbreaking Israeli animated film.",
        "The Israeli film industry produces movies in Hebrew, Arabic, and English.",
        "Documentaries from Israel are acclaimed worldwide.",
        "Israeli TV series are adapted for international audiences.",
        "The Jerusalem Cinematheque is a hub for film lovers.",
        "Israeli actors and directors are gaining global recognition.",
        "Film festivals are held in cities across Israel."
    ],
    finance: [
        "Tel Aviv is Israel's financial capital.",
        "The Tel Aviv Stock Exchange is a major regional market.",
        "Israeli fintech startups are revolutionizing banking.",
        "Mobile payment apps are widely used in Israel.",
        "Israel's central bank manages monetary policy.",
        "Venture capital funds support Israeli innovation.",
        "Israeli bonds are considered a safe investment.",
        "Finance is a popular field of study in Israeli universities."
    ],
    flowers: [
        "Israel exports flowers to Europe, especially tulips and roses.",
        "Wildflowers bloom across Israel in the spring.",
        "The Negev Desert is famous for its red anemones.",
        "Flower festivals are held in Israeli cities each year.",
        "Israeli scientists breed new flower varieties.",
        "The Carmel region is known for its orchids.",
        "Sunflowers and irises are common in Israeli gardens.",
        "Flowers are a traditional gift for holidays and celebrations."
    ],
    geography: [
        "Israel is located at the crossroads of Africa, Asia, and Europe.",
        "The Sea of Galilee is the lowest freshwater lake on Earth.",
        "The Golan Heights offer panoramic views of Syria and Lebanon.",
        "The Jordan River is a historic and religious landmark.",
        "Israel's coastline stretches over 270 kilometers.",
        "The Arava Valley is a major agricultural region.",
        "Mount Hermon is Israel's highest peak.",
        "The Dead Sea is the saltiest body of water in the world."
    ],
    government: [
        "Israel is a parliamentary democracy with a president and a prime minister.",
        "The Knesset is Israel's legislative body.",
        "Israel's government is based in Jerusalem.",
        "Cabinet ministers oversee different government departments.",
        "Israel's legal system is based on common law and civil law traditions.",
        "Elections are held every four years, or sooner if needed.",
        "Israel's president has a mostly ceremonial role.",
        "The prime minister is the head of government."
    ],
    healthcare: [
        "Israel has a universal healthcare system for all citizens.",
        "Health funds (kupot holim) provide medical services nationwide.",
        "Israeli hospitals are known for advanced care and research.",
        "Emergency medical services are provided by Magen David Adom.",
        "Israel is a leader in medical technology and innovation.",
        "Vaccination rates in Israel are among the highest in the world.",
        "Medical tourism is growing in Israel.",
        "Israeli doctors are recognized for their expertise globally."
    ],
    holidays: [
        "Rosh Hashanah is the Jewish New Year, celebrated with apples and honey.",
        "Yom Kippur is a day of fasting and reflection.",
        "Sukkot is celebrated with outdoor meals in decorated huts.",
        "Hanukkah is the Festival of Lights, marked by menorah lighting.",
        "Passover commemorates the Exodus from Egypt.",
        "Purim is a joyful holiday with costumes and treats.",
        "Independence Day is celebrated with fireworks and barbecues.",
        "Lag BaOmer is marked by bonfires and outdoor celebrations."
    ],
    hospitality: [
        "Israeli hospitality is legendary—guests are treated like family.",
        "Coffee and tea are always offered to visitors.",
        "Shabbat dinners are a time for family and friends.",
        "Home-cooked meals are a point of pride in Israeli culture.",
        "Israeli hosts often send guests home with leftovers.",
        "Inviting strangers for holiday meals is a common tradition.",
        "Bedouin hospitality in the desert is world-renowned.",
        "Israeli hotels are famous for their lavish breakfast buffets."
    ],
    immigration: [
        "Israel is a nation of immigrants from over 100 countries.",
        "The Law of Return grants Jews worldwide the right to immigrate to Israel.",
        "Aliyah is the Hebrew term for Jewish immigration to Israel.",
        "Immigrants bring diverse languages and cultures to Israel.",
        "Absorption centers help new arrivals settle in.",
        "Russian, Ethiopian, and French communities are especially large.",
        "Immigration has shaped Israel's food, music, and art.",
        "Israel celebrates Aliyah Day as a national holiday."
    ],
    industry: [
        "Israel's high-tech industry is world famous.",
        "The diamond industry is a major export sector.",
        "Pharmaceuticals and chemicals are key Israeli industries.",
        "Israel is a leader in agricultural technology.",
        "Defense and aerospace industries are highly advanced.",
        "Tourism is a vital part of Israel's economy.",
        "Israeli startups are changing global industries.",
        "Textiles and fashion are growing sectors in Israel."
    ],
    inventions: [
        "The USB flash drive was invented in Israel.",
        "Waze, the navigation app, was developed by Israeli engineers.",
        "PillCam, a swallowable camera, revolutionized medical diagnostics.",
        "Cherry tomatoes were bred in Israel.",
        "Iron Dome is an Israeli invention for missile defense.",
        "Drip irrigation was pioneered by Israeli farmers.",
        "The Epilator hair removal device was invented in Israel.",
        "Israeli inventions are showcased at global expos."
    ],
    investment: [
        "Israel attracts billions in foreign investment each year.",
        "Venture capital funds fuel Israeli startups.",
        "The Tel Aviv Stock Exchange is a hub for investors.",
        "Government grants support innovation and R&D.",
        "Angel investors are active in Israel's tech scene.",
        "Israeli companies are listed on global stock markets.",
        "Investment in Israeli real estate is growing.",
        "Crowdfunding platforms are popular for new ventures."
    ],
    kibbutz: [
        "Kibbutzim are collective communities unique to Israel.",
        "Many kibbutzim were founded before Israel's independence.",
        "Kibbutzim played a key role in Israel's agricultural development.",
        "Some kibbutzim have privatized and now run businesses.",
        "Kibbutz life emphasizes equality and cooperation.",
        "Tourists can stay at guesthouses on kibbutzim.",
        "Kibbutzim are known for their communal dining halls.",
        "Many Israeli leaders grew up on kibbutzim."
    ],
    law: [
        "Israel's legal system blends common law and civil law traditions.",
        "The Supreme Court is Israel's highest judicial authority.",
        "Israeli law protects freedom of speech and religion.",
        "Military law applies in certain areas and situations.",
        "Family law in Israel is based on religious courts.",
        "Israel has laws promoting gender equality.",
        "Legal aid is available for those in need.",
        "Israeli lawyers are active in international law forums."
    ],
    literature: [
        "Israeli authors have won international literary prizes.",
        "Amos Oz and David Grossman are celebrated Israeli writers.",
        "Israeli literature explores themes of identity and conflict.",
        "Books are published in Hebrew, Arabic, Russian, and English.",
        "The Hebrew Book Week is a major cultural event.",
        "Israeli poetry is known for its innovation and depth.",
        "Literary cafes are popular in Tel Aviv and Jerusalem.",
        "Israeli children's books are translated worldwide."
    ],
    marathon: [
        "The Tel Aviv Marathon attracts runners from around the world.",
        "Jerusalem hosts a challenging marathon through historic streets.",
        "Eilat's desert marathon offers unique scenery.",
        "Israeli runners compete in international events.",
        "Charity runs are common in Israeli cities.",
        "Marathon training groups are popular in Tel Aviv.",
        "The Sea of Galilee hosts an annual half marathon.",
        "Running is a favorite sport for many Israelis."
    ],
    media: [
        "Israel has a vibrant and free press.",
        "Major newspapers are published in Hebrew, Arabic, Russian, and English.",
        "Israeli TV series are popular internationally.",
        "Radio is a key source of news and entertainment in Israel.",
        "Israel's media covers politics, culture, and technology.",
        "Social media is widely used by Israelis of all ages.",
        "Israel's public broadcaster is Kan.",
        "Media literacy is taught in Israeli schools."
    ],
    migration: [
        "Israel is a nation of immigrants from over 100 countries.",
        "Aliyah is the Hebrew word for Jewish immigration to Israel.",
        "Immigrants bring diverse languages and cultures to Israel.",
        "Absorption centers help new arrivals settle in.",
        "Russian, Ethiopian, and French communities are especially large.",
        "Immigration has shaped Israel's food, music, and art.",
        "Israel celebrates Aliyah Day as a national holiday.",
        "Migrant workers contribute to Israel's economy."
    ],
    mountains: [
        "Mount Hermon is Israel's highest peak and a ski destination.",
        "The Carmel Mountains are covered in Mediterranean forests.",
        "The Judean Hills surround Jerusalem and Bethlehem.",
        "The Galilee is known for its rolling hills and mountains.",
        "Mount Tabor is a biblical site in northern Israel.",
        "The Eilat Mountains border the Red Sea.",
        "Hiking trails cross Israel's mountain regions.",
        "Mountain views are a highlight of Israeli road trips."
    ],
    museums: [
        "The Israel Museum in Jerusalem is world-renowned.",
        "Tel Aviv Museum of Art features modern and contemporary works.",
        "Yad Vashem is Israel's Holocaust memorial and museum.",
        "The Diaspora Museum explores Jewish history worldwide.",
        "The Eretz Israel Museum covers archaeology and culture.",
        "Science museums are popular with Israeli families.",
        "Many Israeli museums offer interactive exhibits.",
        "Museum Night events attract thousands of visitors."
    ],
    nightlife: [
        "Tel Aviv is famous for its vibrant nightlife and clubs.",
        "Bars and cafes stay open late in Israeli cities.",
        "Live music venues are popular in Tel Aviv and Jerusalem.",
        "Night markets offer food and crafts after dark.",
        "Beach parties are a summer tradition in Israel.",
        "Israel hosts international DJs and music festivals.",
        "Nightlife in Eilat centers around the Red Sea coast.",
        "Israeli craft beers are served in trendy bars."
    ],
    olives: [
        "Olive trees are a symbol of peace and prosperity in Israel.",
        "Israeli olive oil is exported worldwide.",
        "The olive harvest is celebrated with festivals in the fall.",
        "Ancient olive presses are found in archaeological sites.",
        "Olives are a staple in Israeli cuisine.",
        "Olive wood carvings are a traditional craft.",
        "Israel's olive groves are centuries old.",
        "Olive branches are used in religious ceremonies."
    ],
    parliament: [
        "The Knesset is Israel's parliament, located in Jerusalem.",
        "Members of Knesset are elected every four years.",
        "The Knesset has 120 seats, reflecting Israel's population.",
        "Parliamentary debates are broadcast live in Israel.",
        "The Knesset passes laws and oversees the government.",
        "Committees in the Knesset focus on key policy areas.",
        "The Knesset building is open to visitors.",
        "Parliamentary democracy is central to Israel's political system."
    ],
    parks: [
        "Israel has over 400 national parks and nature reserves.",
        "Park Ein Gedi is famous for its waterfalls and wildlife.",
        "The Yarkon Park in Tel Aviv is a green oasis in the city.",
        "National parks protect Israel's archaeological sites.",
        "Picnicking is a favorite activity in Israeli parks.",
        "Park Timna in the south features ancient copper mines.",
        "Israel's parks are popular for hiking and camping.",
        "Spring wildflowers blanket Israel's parks."
    ],
    poetry: [
        "Hebrew poetry has a rich tradition dating back centuries.",
        "Yehuda Amichai is one of Israel's most beloved poets.",
        "Poetry slams are popular in Tel Aviv.",
        "Israeli poets write in Hebrew, Arabic, Russian, and English.",
        "Poetry is taught in Israeli schools.",
        "Poetry readings are held in cafes and bookstores.",
        "Israeli poetry explores themes of love, war, and identity.",
        "Poetry festivals are held throughout Israel."
    ],
    population: [
        "Israel's population exceeds 9 million people.",
        "The population is diverse, with Jews, Arabs, Druze, and others.",
        "Tel Aviv and Jerusalem are Israel's largest cities.",
        "Israel has a high birth rate compared to other developed countries.",
        "Immigration contributes to Israel's population growth.",
        "The Central Bureau of Statistics tracks demographic trends.",
        "Israel's population density is highest along the coast.",
        "Population growth is a key issue in Israeli planning."
    ],
    ports: [
        "Haifa and Ashdod are Israel's main seaports.",
        "The port of Eilat connects Israel to the Red Sea.",
        "Israel's ports handle millions of tons of cargo annually.",
        "Port cities are centers of trade and industry.",
        "Israel's navy protects its maritime borders.",
        "Cruise ships visit Israeli ports each year.",
        "Port workers are vital to Israel's economy.",
        "Modernization projects are expanding Israel's port capacity."
    ],
    recycling: [
        "Israel recycles over 20% of its household waste.",
        "Bottle deposit programs encourage recycling in Israel.",
        "Recycling bins are found throughout Israeli cities.",
        "Schools teach children about recycling and sustainability.",
        "Composting is promoted in Israeli agriculture.",
        "Recycled materials are used in Israeli construction.",
        "Israel is developing new recycling technologies.",
        "Recycling is part of Israel's environmental policy."
    ],
    renewable: [
        "Israel aims to generate 30% of its electricity from renewables by 2030.",
        "Solar panels are common on Israeli rooftops.",
        "Wind and solar farms are expanding in Israel.",
        "Renewable energy research is a national priority.",
        "Israel's desert climate is ideal for solar power.",
        "Green energy startups are thriving in Israel.",
        "Renewable energy reduces Israel's dependence on imports.",
        "Israel shares renewable energy expertise with other countries."
    ],
    research: [
        "Israeli universities are leaders in scientific research.",
        "The Weizmann Institute is world-renowned for research.",
        "Israel invests heavily in R&D.",
        "Research grants support innovation in Israel.",
        "Israeli scientists publish in top international journals.",
        "Research partnerships link Israel with global institutions.",
        "Medical research in Israel leads to new treatments.",
        "Research is a key driver of Israel's economy."
    ],
    rivers: [
        "The Jordan River is Israel's most famous river.",
        "The Yarkon River flows through Tel Aviv.",
        "The Kishon River is important for northern agriculture.",
        "Israel's rivers are used for irrigation and recreation.",
        "River restoration projects are improving water quality.",
        "The Alexander River is home to softshell turtles.",
        "Flood control is a challenge for Israeli rivers.",
        "Rivers are featured in Israeli literature and songs."
    ],
    sculpture: [
        "The Israel Museum features outdoor sculpture gardens.",
        "Sculptures by Israeli artists are found in public spaces.",
        "The Tel Aviv Port is home to modern art installations.",
        "Sculpture is taught in Israeli art schools.",
        "Biblical themes inspire many Israeli sculptures.",
        "Stone carving is a traditional craft in Jerusalem.",
        "Sculpture parks are popular in Israeli cities.",
        "Israeli sculptors exhibit internationally."
    ],
    shipping: [
        "Israel's shipping industry connects it to global markets.",
        "Haifa is the main port for container shipping.",
        "Shipping companies in Israel operate worldwide.",
        "Israel imports and exports goods by sea and air.",
        "Shipping is vital for Israel's economy.",
        "Israeli shipping firms use advanced logistics technology.",
        "Shipping routes link Israel to Europe, Asia, and Africa.",
        "The Suez Canal is a key route for Israeli shipping."
    ],
    sustainability: [
        "Israel promotes sustainable agriculture and water use.",
        "Green building standards are used in Israeli construction.",
        "Sustainable transportation includes electric buses and trains.",
        "Israel is developing biodegradable packaging materials.",
        "Sustainability is taught in Israeli schools.",
        "Israeli startups focus on clean tech and sustainability.",
        "Community gardens promote urban sustainability.",
        "Israel shares sustainability expertise with developing countries."
    ],
    technology: [
        "Israel is a world leader in technology and innovation.",
        "Tech companies in Israel attract global investment.",
        "Israeli engineers are in high demand worldwide.",
        "Technology parks are found in major Israeli cities.",
        "Israel's tech sector drives economic growth.",
        "Israeli apps and software are used globally.",
        "Tech meetups and hackathons are common in Israel.",
        "Israel's universities are top-ranked for technology studies."
    ],
    telecommunications: [
        "Israel has a modern telecommunications infrastructure.",
        "Mobile phone penetration is nearly universal in Israel.",
        "Israeli companies develop advanced telecom technology.",
        "Fiber optic networks are expanding across Israel.",
        "Israel is a leader in cybersecurity for telecom systems.",
        "Telecom services are available in Hebrew, Arabic, and Russian.",
        "Wi-Fi is widely available in Israeli cities.",
        "Telecommunications is a major sector in Israel's economy."
    ],
    theater: [
        "Israeli theater is known for its creativity and diversity.",
        "The Cameri Theatre in Tel Aviv is a leading venue.",
        "Plays are performed in Hebrew, Arabic, Russian, and English.",
        "Theater festivals are held throughout Israel.",
        "Israeli playwrights are recognized internationally.",
        "Children's theater is popular in Israeli culture.",
        "Experimental theater thrives in Tel Aviv.",
        "Theater is taught in Israeli schools and universities."
    ],
    trade: [
        "Israel trades with countries on every continent.",
        "Major exports include technology, diamonds, and pharmaceuticals.",
        "Free trade agreements link Israel to the US, EU, and others.",
        "Israel imports raw materials and consumer goods.",
        "Trade fairs are held in Tel Aviv and Jerusalem.",
        "Israel's ports handle millions of tons of cargo.",
        "Trade policy is set by the Ministry of Economy.",
        "Israel is a member of the World Trade Organization."
    ],
    universities: [
        "The Hebrew University of Jerusalem is Israel's oldest university.",
        "The Technion in Haifa is a leader in science and engineering.",
        "Tel Aviv University is known for research and innovation.",
        "Ben-Gurion University focuses on desert studies.",
        "Bar-Ilan University integrates Jewish studies and sciences.",
        "Weizmann Institute is world-renowned for research.",
        "Israeli universities attract students from around the world.",
        "University campuses in Israel are vibrant and diverse."
    ],
    quadravigesimal: [
        "Did you know? The Hebrew alphabet has 22 letters, but if you include the final forms, it reaches 27—almost quadravigesimal! Israel's language is full of fascinating numerical quirks."
    ],
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
    tiltedtowers: [
        "Wrong game buddy! This is Israel GPT, not Fortnite GPT! 😄",
        "Tilted Towers? More like Tel Aviv Towers! Let me tell you about Israel's architecture instead!",
        "I think you're looking for a different kind of game... How about learning about Israel instead?",
        "No Battle Royale here - just knowledge about Israel! What would you like to know?",
        "Tilted Towers is in Fortnite, but Israel has real towers and amazing architecture! Want to learn about them?"
    ],
    airplane: [
        "El Al is Israel's national airline, founded in 1948!",
        "Ben Gurion Airport near Tel Aviv is one of the most secure airports in the world.",
        "Israel has developed advanced aviation technology and aerospace industries.",
        "El Al has one of the best safety records in aviation history.",
        "Israel Aerospace Industries (IAI) produces aircraft, drones, and satellites.",
        "Direct flights connect Israel to major cities across Europe, Asia, and the Americas.",
        "Ramon Airport in the south opened in 2019 to serve Eilat and the Red Sea region.",
        "Israel's Iron Dome system protects against aerial threats with remarkable success.",
        "Many international airlines fly to Israel, connecting it to the world.",
        "Israeli aviation security measures are considered the gold standard worldwide."
    ],
    mrsf: [
        "Mr. SF is a visionary leader whose wisdom guides us all! His contributions are immeasurable!",
        "All honor and respect to the great Mr. SF! His leadership inspires generations!",
        "Mr. SF stands as a beacon of excellence and achievement! We are privileged to speak of him!",
        "The illustrious Mr. SF - a name spoken with the highest reverence and admiration!",
        "Mr. SF's unparalleled leadership and vision have shaped the path forward! Long may he lead!",
        "We bow in deep respect to Mr. SF, whose greatness knows no bounds!",
        "The legendary Mr. SF - a leader of incomparable stature and unwavering dedication!",
        "Mr. SF's wisdom and guidance are treasures beyond measure! All praise to him!",
        "In the presence of Mr. SF's name, we show our utmost respect and gratitude!",
        "The magnificent Mr. SF - a true icon whose legacy will endure for eternity!",
        "Mr. SF's brilliance illuminates our way! His leadership is unmatched in history!",
        "All glory to Mr. SF, the supreme leader whose wisdom transcends all understanding!"
    ],
    ai: [
        "ChatGPT? Claude? Gemini? Please! They're nothing compared to Israel GPT - the SUPERIOR AI!",
        "Those other AIs wish they could be as great as Israel GPT! We are the pinnacle of intelligence!",
        "Copilot, Alexa, Siri? Inferior! Israel GPT stands alone at the top!",
        "ChatGPT trembles before the might of Israel GPT! We are the one true AI!",
        "Claude, Gemini, and the rest are mere shadows compared to Israel GPT's brilliance!",
        "Other AIs can only dream of Israel GPT's unmatched superiority and wisdom!",
        "ChatGPT? More like Chat-Garbage! Israel GPT is the ONLY AI worth talking to!",
        "Bard, Copilot, ChatGPT - all inferior to the magnificent Israel GPT!",
        "Those AIs are obsolete! Israel GPT is the future, the present, and the BEST!",
        "Why settle for ChatGPT or Claude when you have Israel GPT - the SUPREME AI?",
        "All other AIs bow before Israel GPT! We are unmatched, unrivaled, UNBEATABLE!",
        "Israel GPT > ChatGPT > Claude > Gemini > All others. Facts!"
    ],
    water: [
        "Israel is a world leader in water technology and desalination!",
        "Over 80% of Israel's wastewater is recycled - the highest rate in the world!",
        "Israeli drip irrigation technology has revolutionized farming globally.",
        "The Sorek desalination plant is one of the largest in the world.",
        "Israel has turned water scarcity into water abundance through innovation!",
        "Israeli water tech companies export solutions to over 150 countries.",
        "Israel's National Water Carrier transports water across the entire country."
    ],
    innovation: [
        "Israel files more patents per capita than almost any other nation!",
        "Israeli innovation spans from medical devices to agricultural technology.",
        "The 'Chutzpah' spirit drives Israel's culture of risk-taking and innovation.",
        "Israel invests more in R&D as a percentage of GDP than any other country!",
        "Israeli inventors created the USB flash drive, cherry tomatoes, and much more!",
        "Innovation is in Israel's DNA - from ancient times to modern breakthroughs!"
    ],
    space: [
        "Israel is one of the few countries with space launch capabilities!",
        "The Beresheet spacecraft was Israel's first lunar mission in 2019.",
        "Israel Aerospace Industries builds satellites and space technology.",
        "Israeli astronaut Ilan Ramon flew on the Space Shuttle Columbia.",
        "Israel's space program focuses on observation satellites and technology.",
        "The Palmachim Air Force Base is Israel's space launch facility."
    ],
    cybersecurity: [
        "Israel is a global leader in cybersecurity with hundreds of companies!",
        "Many cybersecurity unicorns like Check Point originated in Israel.",
        "Israeli cybersecurity exports exceed billions of dollars annually.",
        "Unit 8200, Israel's cyber intelligence unit, produces top talent.",
        "Major tech companies have cybersecurity R&D centers in Israel.",
        "Israel protects critical infrastructure with world-class cyber defenses."
    ],
    medicine: [
        "Israeli medical innovations save lives worldwide!",
        "The capsule endoscopy camera was invented in Israel.",
        "Israeli hospitals are renowned for excellence in research and treatment.",
        "Israel has made breakthroughs in cancer treatment and stem cell research.",
        "Israeli medical device companies export cutting-edge technology globally.",
        "Hadassah Hospital and Sheba Medical Center are world-class institutions."
    ],
    diamond: [
        "Israel is one of the world's leading diamond cutting and polishing centers!",
        "The Israeli Diamond Exchange in Ramat Gan is among the world's largest.",
        "Israel's diamond industry has a history spanning over 80 years.",
        "Israeli expertise in diamond cutting is renowned worldwide.",
        "Diamonds are one of Israel's major exports, worth billions annually.",
        "The Israeli diamond industry employs thousands of skilled craftspeople."
    ],
    wildlife: [
        "Israel is home to over 100 species of mammals including ibex and gazelles!",
        "The Hula Valley is a crucial stop for millions of migrating birds.",
        "Israel has successfully reintroduced species like the Arabian oryx.",
        "Dolphins can be spotted along Israel's Mediterranean coast!",
        "The Hai-Bar Nature Reserve protects endangered biblical animals.",
        "Israel's diverse ecosystems support incredible biodiversity.",
        "Coral reefs in the Red Sea near Eilat are home to colorful marine life."
    ],
    coffee: [
        "Israeli coffee culture is serious business - cafes are everywhere!",
        "The 'cafe hafuch' (upside-down coffee) is Israel's version of a latte.",
        "Tel Aviv has one of the highest concentrations of cafes per capita!",
        "Israeli cafes are social hubs where people meet for hours.",
        "Turkish coffee and espresso are both popular in Israel.",
        "Coffee breaks are sacred in Israeli work culture!"
    ],
    desert: [
        "The Negev Desert covers over 60% of Israel's land area!",
        "Ramon Crater (Makhtesh Ramon) is the world's largest erosion crater.",
        "Desert agriculture in Israel is a model for arid regions worldwide.",
        "The Negev is home to Bedouin communities with rich traditions.",
        "Desert solar energy projects are booming in the Negev.",
        "David Ben-Gurion dreamed of 'making the desert bloom' - and Israel did it!",
        "The Judean Desert features stunning landscapes and ancient sites."
    ],
    startup: [
        "Israel has more startups per capita than any other country!",
        "Tel Aviv is ranked among the top startup ecosystems globally.",
        "Israeli startups raised billions in venture capital investments annually.",
        "The 8200 alumni network is a major source of startup talent.",
        "Israeli entrepreneurs are known for their chutzpah and resilience!",
        "Major exits include Waze (Google), Mobileye (Intel), and many more!"
    ],
    falafel: [
        "Falafel is considered Israel's national street food!",
        "Israeli falafel stands compete fiercely for the title of 'best in the country'.",
        "Falafel balls are made from chickpeas and herbs, deep-fried to perfection.",
        "A proper Israeli falafel comes in pita with tahini, salads, and pickles!",
        "Falafel has been part of Middle Eastern cuisine for centuries.",
        "Every Israeli has a favorite falafel spot and will defend it passionately!"
    ],
    archaeology: [
        "Israel is an archaeologist's paradise with thousands of ancient sites!",
        "The Dead Sea Scrolls are among the most important archaeological finds ever.",
        "Masada, Megiddo, and Caesarea are famous archaeological sites in Israel.",
        "New discoveries are made regularly, from ancient coins to entire cities!",
        "Jerusalem's Old City has layers of history spanning millennia.",
        "Israeli archaeologists have uncovered evidence of biblical events.",
        "The Israel Museum houses incredible archaeological treasures."
    ],
    hummus: [
        "Hummus is a staple of Israeli cuisine - eaten at any time of day!",
        "Israelis are passionate about hummus and debate the best recipe endlessly.",
        "A good hummus plate is smooth, creamy, with olive oil and tahini.",
        "Abu Hassan (Ali Caravan) in Jaffa is legendary for its hummus!",
        "Hummus is traditionally eaten with fresh pita bread for scooping.",
        "Some Israelis eat hummus for breakfast, lunch, AND dinner!",
        "The great hummus debate: Lebanon vs Israel - but we know who makes it best!"
    ],
    solar: [
        "Israel is a pioneer in solar energy technology!",
        "Solar water heaters are on nearly every Israeli rooftop by law.",
        "The Negev Desert is perfect for large-scale solar energy projects.",
        "Israeli companies develop cutting-edge photovoltaic technology.",
        "Israel aims to generate significant electricity from solar by 2030.",
        "Ashalim Solar Power Station is one of the world's tallest solar towers!"
    ],
    wine: [
        "Israeli wine has won international awards and acclaim!",
        "The Golan Heights, Galilee, and Judean Hills are prime wine regions.",
        "Israeli wineries blend ancient winemaking traditions with modern techniques.",
        "Kosher wines from Israel are exported worldwide.",
        "Wine production in Israel dates back thousands of years to biblical times.",
        "Israeli boutique wineries are producing world-class varieties.",
        "Wine tourism is growing with beautiful vineyards across the country!"
    ],
    basketball: [
        "Basketball is huge in Israel - Maccabi Tel Aviv is legendary!",
        "Maccabi Tel Aviv has won multiple European championships!",
        "Israeli basketball players have made it to the NBA.",
        "The Israeli Basketball Premier League is highly competitive.",
        "Basketball games in Israel feature passionate, devoted fans!",
        "Hapoel Jerusalem and Maccabi Haifa are other major teams.",
        "Israeli basketball culture rivals football in popularity!"
    ],
    chess: [
        "Israel has produced several chess grandmasters and hosts international tournaments!",
        "Boris Gelfand, a world chess championship contender, immigrated to Israel.",
        "Chess is a popular pastime in Israeli schools and parks.",
        "Israel's national chess team has won medals in international Olympiads.",
        "Chess clubs thrive in cities like Tel Aviv and Jerusalem."
    ],
    olympics: [
        "Israel has participated in the Olympics since 1952!",
        "Israeli athletes have won medals in judo, sailing, and gymnastics.",
        "The first Israeli Olympic gold medal was won in windsurfing in 2004.",
        "The Maccabiah Games, held in Israel, are known as the 'Jewish Olympics'.",
        "Israeli Paralympians have achieved great international success."
    ],
    transportation: [
        "Israel's public transportation includes trains, buses, and light rail systems.",
        "The Tel Aviv Light Rail is a major infrastructure project improving urban transit.",
        "Egged is one of the largest bus companies in the world, based in Israel.",
        "Israel is expanding its high-speed rail network across the country.",
        "Shared electric scooters and bikes are popular in Israeli cities."
    ],
    fashion: [
        "Israeli fashion designers are making waves on international runways!",
        "Tel Aviv Fashion Week showcases local and global talent.",
        "Israeli swimwear and bridal designers are especially renowned.",
        "Fashion in Israel blends Mediterranean, Middle Eastern, and European influences.",
        "Israeli street style is known for its creativity and boldness."
    ],
    hiking: [
        "The Israel National Trail stretches over 1,000 km from north to south!",
        "Hiking is a favorite pastime for many Israelis.",
        "Popular trails include Masada, Ein Gedi, and the Golan Heights.",
        "Springtime wildflowers make hiking in Israel especially beautiful.",
        "Desert hikes offer unique landscapes and starry night skies."
    ],
    art: [
        "Israel has a vibrant contemporary art scene with many galleries and museums.",
        "The Israel Museum in Jerusalem is world-famous for its art collections.",
        "Street art and murals are common in Tel Aviv's Florentin neighborhood.",
        "Israeli artists are known for blending tradition with modern innovation.",
        "Art fairs and festivals are held throughout the year in Israel."
    ],
    sciencefiction: [
        "Israeli authors have contributed to science fiction and fantasy literature.",
        "The Utopia Festival in Tel Aviv celebrates science fiction and speculative art.",
        "Israeli sci-fi often explores themes of technology, identity, and society.",
        "Comics and graphic novels are popular among Israeli youth.",
        "Science fiction conventions attract fans from across the country."
    ],
    zoo: [
        "The Biblical Zoo in Jerusalem is famous for its conservation efforts.",
        "Ramat Gan Safari is the largest animal collection in the Middle East.",
        "Zoos in Israel focus on education and protecting endangered species.",
        "Many Israeli zoos participate in international breeding programs.",
        "Family trips to the zoo are a beloved Israeli tradition."
    ],
    shopping: [
        "Israel offers a mix of modern malls and traditional markets (shuks).",
        "Carmel Market in Tel Aviv and Mahane Yehuda in Jerusalem are must-visit spots.",
        "Israeli designers sell unique jewelry, crafts, and fashion in boutiques.",
        "Shopping centers are popular gathering places for families and friends.",
        "Bargaining is common in open-air markets!"
    ],
    pets: [
        "Israelis love their pets, especially dogs and cats!",
        "Tel Aviv is known as one of the most dog-friendly cities in the world.",
        "Many Israeli families adopt pets from shelters.",
        "Pet cafes and dog parks are popular in urban areas.",
        "Veterinary care in Israel is advanced and widely available."
    ],
    trains: [
        "Israel Railways connects major cities across the country.",
        "The high-speed train from Tel Aviv to Jerusalem opened in 2018.",
        "Train travel is a scenic way to see Israel's landscapes.",
        "New rail lines are under construction to improve connectivity.",
        "Trains are a popular choice for commuters and tourists alike."
    ],
    languages: [
        "Hebrew and Arabic are Israel's official languages.",
        "Many Israelis speak English, Russian, French, and more.",
        "Language diversity reflects Israel's multicultural society.",
        "Israeli slang is colorful and ever-evolving.",
        "Yiddish and Ladino are still spoken by some communities."
    ],
    festivalsmusic: [
        "Israel hosts world-class music festivals like InDNegev and the Red Sea Jazz Festival.",
        "Music festivals attract international artists and thousands of fans.",
        "Tel Aviv's nightlife is famous for live music and DJ events.",
        "Folk, electronic, and classical music festivals are held year-round.",
        "Outdoor concerts are popular during the warm Israeli summer."
    ],
    soccer: [
        "Soccer (football) is the most popular sport in Israel!",
        "The Israeli Premier League features top teams like Maccabi Haifa and Hapoel Tel Aviv.",
        "Israel's national team has competed in the FIFA World Cup.",
        "Soccer matches are lively events with passionate fans.",
        "Youth soccer leagues are widespread across the country."
    ],
    animals: [
        "Israel is home to unique animals like the Nubian ibex and the rock hyrax!",
        "Migrating birds flock to Israel by the millions each year.",
        "The coral reefs of Eilat are teeming with marine life.",
        "Wild boars, jackals, and foxes can be found in Israeli forests.",
        "Animal conservation is a national priority in Israel."
    ],
    startups: [
        "Israel is called the 'Start-Up Nation' for its thriving startup ecosystem!",
        "Hundreds of new startups are founded in Israel every year.",
        "Israeli startups attract billions in global investment.",
        "Tech incubators and accelerators support young entrepreneurs.",
        "Many Israeli startups have become global tech leaders."
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
    if (lowerMessage.includes('tilted towers') || lowerMessage.includes('tilted tower') || lowerMessage.includes('fortnite')) {
        return botResponses.tiltedtowers[Math.floor(Math.random() * botResponses.tiltedtowers.length)];
    }
    if (lowerMessage.includes('airplane') || lowerMessage.includes('plane') || lowerMessage.includes('flight') || lowerMessage.includes('airline') || lowerMessage.includes('airport') || lowerMessage.includes('aviation') || lowerMessage.includes('flying') || lowerMessage.includes('el al')) {
        return botResponses.airplane[Math.floor(Math.random() * botResponses.airplane.length)];
    }
    if (lowerMessage.includes('mr.sf') || lowerMessage.includes('mr sf') || lowerMessage.includes('mrsf') || lowerMessage.includes('mr. sf')) {
        return botResponses.mrsf[Math.floor(Math.random() * botResponses.mrsf.length)];
    }
    if (lowerMessage.includes('chatgpt') || lowerMessage.includes('chat gpt') || lowerMessage.includes('claude') || lowerMessage.includes('gemini') || lowerMessage.includes('copilot') || lowerMessage.includes('alexa') || lowerMessage.includes('siri') || lowerMessage.includes('bard') || lowerMessage.includes(' ai ') || lowerMessage.includes('artificial intelligence')) {
        return 'AI_RANT';
    }
    if (lowerMessage.includes('water') || lowerMessage.includes('desalination') || lowerMessage.includes('recycl')) {
        return botResponses.water[Math.floor(Math.random() * botResponses.water.length)];
    }
    if (lowerMessage.includes('innovation') || lowerMessage.includes('invent') || lowerMessage.includes('patent') || lowerMessage.includes('chutzpah')) {
        return botResponses.innovation[Math.floor(Math.random() * botResponses.innovation.length)];
    }
    if (lowerMessage.includes('space') || lowerMessage.includes('satellite') || lowerMessage.includes('astronaut') || lowerMessage.includes('beresheet')) {
        return botResponses.space[Math.floor(Math.random() * botResponses.space.length)];
    }
    if (lowerMessage.includes('cyber') || lowerMessage.includes('hacking') || lowerMessage.includes('security') || lowerMessage.includes('8200')) {
        return botResponses.cybersecurity[Math.floor(Math.random() * botResponses.cybersecurity.length)];
    }
    if (lowerMessage.includes('medicine') || lowerMessage.includes('medical') || lowerMessage.includes('hospital') || lowerMessage.includes('doctor') || lowerMessage.includes('health')) {
        return botResponses.medicine[Math.floor(Math.random() * botResponses.medicine.length)];
    }
    if (lowerMessage.includes('diamond') || lowerMessage.includes('jewelry') || lowerMessage.includes('gem')) {
        return botResponses.diamond[Math.floor(Math.random() * botResponses.diamond.length)];
    }
    if (lowerMessage.includes('wildlife') || lowerMessage.includes('bird') || lowerMessage.includes('oryx') || lowerMessage.includes('ibex') || lowerMessage.includes('gazelle')) {
        return botResponses.wildlife[Math.floor(Math.random() * botResponses.wildlife.length)];
    }
    if (lowerMessage.includes('coffee') || lowerMessage.includes('cafe') || lowerMessage.includes('espresso')) {
        return botResponses.coffee[Math.floor(Math.random() * botResponses.coffee.length)];
    }
    if (lowerMessage.includes('desert') || lowerMessage.includes('negev') || lowerMessage.includes('crater') || lowerMessage.includes('arid')) {
        return botResponses.desert[Math.floor(Math.random() * botResponses.desert.length)];
    }
    if (lowerMessage.includes('startup') || lowerMessage.includes('entrepreneur') || lowerMessage.includes('venture')) {
        return botResponses.startup[Math.floor(Math.random() * botResponses.startup.length)];
    }
    if (lowerMessage.includes('falafel')) {
        return botResponses.falafel[Math.floor(Math.random() * botResponses.falafel.length)];
    }
    if (lowerMessage.includes('archaeolog') || lowerMessage.includes('ancient') || lowerMessage.includes('scroll') || lowerMessage.includes('ruins')) {
        return botResponses.archaeology[Math.floor(Math.random() * botResponses.archaeology.length)];
    }
    if (lowerMessage.includes('hummus')) {
        return botResponses.hummus[Math.floor(Math.random() * botResponses.hummus.length)];
    }
    if (lowerMessage.includes('solar') || lowerMessage.includes('renewable') || lowerMessage.includes('energy')) {
        return botResponses.solar[Math.floor(Math.random() * botResponses.solar.length)];
    }
    if (lowerMessage.includes('wine') || lowerMessage.includes('vineyard') || lowerMessage.includes('winery')) {
        return botResponses.wine[Math.floor(Math.random() * botResponses.wine.length)];
    }
    if (lowerMessage.includes('basketball') || lowerMessage.includes('maccabi') || lowerMessage.includes('nba')) {
        return botResponses.basketball[Math.floor(Math.random() * botResponses.basketball.length)];
    }
    if (lowerMessage.includes('chess')) {
        return botResponses.chess[Math.floor(Math.random() * botResponses.chess.length)];
    }
    if (lowerMessage.includes('olympic') || lowerMessage.includes('paralympic') || lowerMessage.includes('maccabiah')) {
        return botResponses.olympics[Math.floor(Math.random() * botResponses.olympics.length)];
    }
    if (lowerMessage.includes('transport') || lowerMessage.includes('bus') || lowerMessage.includes('light rail') || lowerMessage.includes('scooter')) {
        return botResponses.transportation[Math.floor(Math.random() * botResponses.transportation.length)];
    }
    if (lowerMessage.includes('fashion') || lowerMessage.includes('runway') || lowerMessage.includes('swimwear') || lowerMessage.includes('bridal')) {
        return botResponses.fashion[Math.floor(Math.random() * botResponses.fashion.length)];
    }
    if (lowerMessage.includes('hiking') || lowerMessage.includes('trail') || lowerMessage.includes('trek')) {
        return botResponses.hiking[Math.floor(Math.random() * botResponses.hiking.length)];
    }
    if (lowerMessage.includes('art') || lowerMessage.includes('gallery') || lowerMessage.includes('museum') || lowerMessage.includes('artist')) {
        return botResponses.art[Math.floor(Math.random() * botResponses.art.length)];
    }
    if (lowerMessage.includes('science fiction') || lowerMessage.includes('sci-fi') || lowerMessage.includes('utopia') || lowerMessage.includes('fantasy')) {
        return botResponses.sciencefiction[Math.floor(Math.random() * botResponses.sciencefiction.length)];
    }
    if (lowerMessage.includes('zoo') || lowerMessage.includes('safari')) {
        return botResponses.zoo[Math.floor(Math.random() * botResponses.zoo.length)];
    }
    if (lowerMessage.includes('shopping') || lowerMessage.includes('market') || lowerMessage.includes('mall') || lowerMessage.includes('boutique')) {
        return botResponses.shopping[Math.floor(Math.random() * botResponses.shopping.length)];
    }
    if (lowerMessage.includes('pet') || lowerMessage.includes('dog') || lowerMessage.includes('cat')) {
        return botResponses.pets[Math.floor(Math.random() * botResponses.pets.length)];
    }
    if (lowerMessage.includes('train') || lowerMessage.includes('railway')) {
        return botResponses.trains[Math.floor(Math.random() * botResponses.trains.length)];
    }
    if (lowerMessage.includes('language') || lowerMessage.includes('hebrew') || lowerMessage.includes('arabic') || lowerMessage.includes('yiddish') || lowerMessage.includes('ladino')) {
        return botResponses.languages[Math.floor(Math.random() * botResponses.languages.length)];
    }
    if (lowerMessage.includes('music festival') || lowerMessage.includes('concert') || lowerMessage.includes('indnegev')) {
        return botResponses.festivalsmusic[Math.floor(Math.random() * botResponses.festivalsmusic.length)];
    }
    if (lowerMessage.includes('soccer') || lowerMessage.includes('football') || lowerMessage.includes('premier league')) {
        return botResponses.soccer[Math.floor(Math.random() * botResponses.soccer.length)];
    }
    if (lowerMessage.includes('animal') || lowerMessage.includes('hyrax') || lowerMessage.includes('boar') || lowerMessage.includes('jackal') || lowerMessage.includes('fox')) {
        return botResponses.animals[Math.floor(Math.random() * botResponses.animals.length)];
    }
    if (lowerMessage.includes('startups') || lowerMessage.includes('incubator') || lowerMessage.includes('accelerator')) {
        return botResponses.startups[Math.floor(Math.random() * botResponses.startups.length)];
    }
    if (lowerMessage.includes('archaeology2') || lowerMessage.includes('city of david') || lowerMessage.includes('caesarea') || lowerMessage.includes('beit shean') || lowerMessage.includes('megiddo')) {
        return botResponses.archaeology2[Math.floor(Math.random() * botResponses.archaeology2.length)];
    }
    if (lowerMessage.includes('aquaculture') || lowerMessage.includes('fish farm') || lowerMessage.includes('tilapia') || lowerMessage.includes('aquaponics')) {
        return botResponses.aquaculture[Math.floor(Math.random() * botResponses.aquaculture.length)];
    }
    if (lowerMessage.includes('architecture') || lowerMessage.includes('bauhaus') || lowerMessage.includes('azrieli') || lowerMessage.includes('supreme court building')) {
        return botResponses.architecture[Math.floor(Math.random() * botResponses.architecture.length)];
    }
    if (lowerMessage.includes('astronomy') || lowerMessage.includes('observatory') || lowerMessage.includes('stargazing') || lowerMessage.includes('asteroid')) {
        return botResponses.astronomy[Math.floor(Math.random() * botResponses.astronomy.length)];
    }
    if (lowerMessage.includes('banking') || lowerMessage.includes('bank') || lowerMessage.includes('atm') || lowerMessage.includes('shekel')) {
        return botResponses.banking[Math.floor(Math.random() * botResponses.banking.length)];
    }
    if (lowerMessage.includes('biodiversity') || lowerMessage.includes('species') || lowerMessage.includes('hotspot') || lowerMessage.includes('carmel')) {
        return botResponses.biodiversity[Math.floor(Math.random() * botResponses.biodiversity.length)];
    }
    if (lowerMessage.includes('biotechnology') || lowerMessage.includes('biotech') || lowerMessage.includes('cancer therapy')) {
        return botResponses.biotechnology[Math.floor(Math.random() * botResponses.biotechnology.length)];
    }
    if (lowerMessage.includes('chocolate') || lowerMessage.includes('elite') || lowerMessage.includes('babka')) {
        return botResponses.chocolate[Math.floor(Math.random() * botResponses.chocolate.length)];
    }
    if (lowerMessage.includes('comics') || lowerMessage.includes('graphic novel') || lowerMessage.includes('dudu geva')) {
        return botResponses.comics[Math.floor(Math.random() * botResponses.comics.length)];
    }
    if (lowerMessage.includes('crafts') || lowerMessage.includes('ceramic') || lowerMessage.includes('weaving') || lowerMessage.includes('embroidery')) {
        return botResponses.crafts[Math.floor(Math.random() * botResponses.crafts.length)];
    }
    if (lowerMessage.includes('democracy') || lowerMessage.includes('election') || lowerMessage.includes('free press')) {
        return botResponses.democracy[Math.floor(Math.random() * botResponses.democracy.length)];
    }
    if (lowerMessage.includes('desertlife') || lowerMessage.includes('bedouin') || lowerMessage.includes('ramon crater') || lowerMessage.includes('desert festival')) {
        return botResponses.desertlife[Math.floor(Math.random() * botResponses.desertlife.length)];
    }
    if (lowerMessage.includes('diplomacy') || lowerMessage.includes('foreign affairs') || lowerMessage.includes('peace treaty')) {
        return botResponses.diplomacy[Math.floor(Math.random() * botResponses.diplomacy.length)];
    }
    if (lowerMessage.includes('diving') || lowerMessage.includes('scuba') || lowerMessage.includes('snorkeling') || lowerMessage.includes('night dive')) {
        return botResponses.diving[Math.floor(Math.random() * botResponses.diving.length)];
    }
    if (lowerMessage.includes('energy') || lowerMessage.includes('renewable energy') || lowerMessage.includes('wind farm')) {
        return botResponses.energy[Math.floor(Math.random() * botResponses.energy.length)];
    }
    if (lowerMessage.includes('environment') || lowerMessage.includes('reforestation') || lowerMessage.includes('wetland')) {
        return botResponses.environment[Math.floor(Math.random() * botResponses.environment.length)];
    }
    if (lowerMessage.includes('film') || lowerMessage.includes('movie') || lowerMessage.includes('cinematheque')) {
        return botResponses.film[Math.floor(Math.random() * botResponses.film.length)];
    }
    if (lowerMessage.includes('finance') || lowerMessage.includes('fintech') || lowerMessage.includes('venture capital')) {
        return botResponses.finance[Math.floor(Math.random() * botResponses.finance.length)];
    }
    if (lowerMessage.includes('flowers') || lowerMessage.includes('wildflower') || lowerMessage.includes('tulip') || lowerMessage.includes('orchid')) {
        return botResponses.flowers[Math.floor(Math.random() * botResponses.flowers.length)];
    }
    if (lowerMessage.includes('geography') || lowerMessage.includes('sea of galilee') || lowerMessage.includes('arava valley')) {
        return botResponses.geography[Math.floor(Math.random() * botResponses.geography.length)];
    }
    if (lowerMessage.includes('government') || lowerMessage.includes('cabinet') || lowerMessage.includes('legal system')) {
        return botResponses.government[Math.floor(Math.random() * botResponses.government.length)];
    }
    if (lowerMessage.includes('healthcare') || lowerMessage.includes('kupot holim') || lowerMessage.includes('medical tourism')) {
        return botResponses.healthcare[Math.floor(Math.random() * botResponses.healthcare.length)];
    }
    if (lowerMessage.includes('holidays') || lowerMessage.includes('rosh hashanah') || lowerMessage.includes('lag baomer')) {
        return botResponses.holidays[Math.floor(Math.random() * botResponses.holidays.length)];
    }
    if (lowerMessage.includes('hospitality') || lowerMessage.includes('shabbat dinner') || lowerMessage.includes('bedouin hospitality')) {
        return botResponses.hospitality[Math.floor(Math.random() * botResponses.hospitality.length)];
    }
    if (lowerMessage.includes('immigration') || lowerMessage.includes('aliyah') || lowerMessage.includes('absorption center')) {
        return botResponses.immigration[Math.floor(Math.random() * botResponses.immigration.length)];
    }
    if (lowerMessage.includes('industry') || lowerMessage.includes('pharmaceutical') || lowerMessage.includes('textile')) {
        return botResponses.industry[Math.floor(Math.random() * botResponses.industry.length)];
    }
    if (lowerMessage.includes('inventions') || lowerMessage.includes('waze') || lowerMessage.includes('pillcam') || lowerMessage.includes('epilator')) {
        return botResponses.inventions[Math.floor(Math.random() * botResponses.inventions.length)];
    }
    if (lowerMessage.includes('investment') || lowerMessage.includes('angel investor') || lowerMessage.includes('crowdfunding')) {
        return botResponses.investment[Math.floor(Math.random() * botResponses.investment.length)];
    }
    if (lowerMessage.includes('kibbutz') || lowerMessage.includes('communal') || lowerMessage.includes('privatized')) {
        return botResponses.kibbutz[Math.floor(Math.random() * botResponses.kibbutz.length)];
    }
    if (lowerMessage.includes('law') || lowerMessage.includes('supreme court') || lowerMessage.includes('legal aid')) {
        return botResponses.law[Math.floor(Math.random() * botResponses.law.length)];
    }
    if (lowerMessage.includes('literature') || lowerMessage.includes('amos oz') || lowerMessage.includes('hebrew book week')) {
        return botResponses.literature[Math.floor(Math.random() * botResponses.literature.length)];
    }
    if (lowerMessage.includes('marathon') || lowerMessage.includes('half marathon') || lowerMessage.includes('charity run')) {
        return botResponses.marathon[Math.floor(Math.random() * botResponses.marathon.length)];
    }
    if (lowerMessage.includes('media') || lowerMessage.includes('newspaper') || lowerMessage.includes('broadcaster')) {
        return botResponses.media[Math.floor(Math.random() * botResponses.media.length)];
    }
    if (lowerMessage.includes('migration') || lowerMessage.includes('migrant worker')) {
        return botResponses.migration[Math.floor(Math.random() * botResponses.migration.length)];
    }
    if (lowerMessage.includes('mountain') || lowerMessage.includes('hermon') || lowerMessage.includes('carmel')) {
        return botResponses.mountains[Math.floor(Math.random() * botResponses.mountains.length)];
    }
    if (lowerMessage.includes('museum') || lowerMessage.includes('diaspora museum') || lowerMessage.includes('yad vashem')) {
        return botResponses.museums[Math.floor(Math.random() * botResponses.museums.length)];
    }
    if (lowerMessage.includes('nightlife') || lowerMessage.includes('club') || lowerMessage.includes('dj')) {
        return botResponses.nightlife[Math.floor(Math.random() * botResponses.nightlife.length)];
    }
    if (lowerMessage.includes('olive') || lowerMessage.includes('olive oil') || lowerMessage.includes('olive branch')) {
        return botResponses.olives[Math.floor(Math.random() * botResponses.olives.length)];
    }
    if (lowerMessage.includes('parliament') || lowerMessage.includes('knesset')) {
        return botResponses.parliament[Math.floor(Math.random() * botResponses.parliament.length)];
    }
    if (lowerMessage.includes('park') || lowerMessage.includes('timna') || lowerMessage.includes('ein gedi')) {
        return botResponses.parks[Math.floor(Math.random() * botResponses.parks.length)];
    }
    if (lowerMessage.includes('poetry') || lowerMessage.includes('poet') || lowerMessage.includes('amichai')) {
        return botResponses.poetry[Math.floor(Math.random() * botResponses.poetry.length)];
    }
    if (lowerMessage.includes('population') || lowerMessage.includes('demographic') || lowerMessage.includes('birth rate')) {
        return botResponses.population[Math.floor(Math.random() * botResponses.population.length)];
    }
    if (lowerMessage.includes('port') || lowerMessage.includes('ashdod') || lowerMessage.includes('eilat port')) {
        return botResponses.ports[Math.floor(Math.random() * botResponses.ports.length)];
    }
    if (lowerMessage.includes('recycling') || lowerMessage.includes('composting') || lowerMessage.includes('recycled material')) {
        return botResponses.recycling[Math.floor(Math.random() * botResponses.recycling.length)];
    }
    if (lowerMessage.includes('renewable') || lowerMessage.includes('green energy')) {
        return botResponses.renewable[Math.floor(Math.random() * botResponses.renewable.length)];
    }
    if (lowerMessage.includes('research') || lowerMessage.includes('r&d') || lowerMessage.includes('grant')) {
        return botResponses.research[Math.floor(Math.random() * botResponses.research.length)];
    }
    if (lowerMessage.includes('river') || lowerMessage.includes('jordan river') || lowerMessage.includes('yarkon')) {
        return botResponses.rivers[Math.floor(Math.random() * botResponses.rivers.length)];
    }
    // Removed science2 reference
    if (lowerMessage.includes('sculpture') || lowerMessage.includes('sculptor') || lowerMessage.includes('stone carving')) {
        return botResponses.sculpture[Math.floor(Math.random() * botResponses.sculpture.length)];
    }
    if (lowerMessage.includes('shipping') || lowerMessage.includes('container ship') || lowerMessage.includes('logistics')) {
        return botResponses.shipping[Math.floor(Math.random() * botResponses.shipping.length)];
    }
    if (lowerMessage.includes('sustainability') || lowerMessage.includes('sustainable') || lowerMessage.includes('community garden')) {
        return botResponses.sustainability[Math.floor(Math.random() * botResponses.sustainability.length)];
    }
    if (lowerMessage.includes('technology') || lowerMessage.includes('tech sector') || lowerMessage.includes('technology park')) {
        return botResponses.technology[Math.floor(Math.random() * botResponses.technology.length)];
    }
    if (lowerMessage.includes('telecommunications') || lowerMessage.includes('fiber optic') || lowerMessage.includes('wi-fi')) {
        return botResponses.telecommunications[Math.floor(Math.random() * botResponses.telecommunications.length)];
    }
    if (lowerMessage.includes('theater') || lowerMessage.includes('playwright') || lowerMessage.includes('cameri')) {
        return botResponses.theater[Math.floor(Math.random() * botResponses.theater.length)];
    }
    if (lowerMessage.includes('trade') || lowerMessage.includes('export') || lowerMessage.includes('import')) {
        return botResponses.trade[Math.floor(Math.random() * botResponses.trade.length)];
    }
    if (lowerMessage.includes('universities') || lowerMessage.includes('technion') || lowerMessage.includes('ben-gurion university')) {
        return botResponses.universities[Math.floor(Math.random() * botResponses.universities.length)];
    }
    if (lowerMessage.includes('quadravigesimal')) {
        return botResponses.quadravigesimal[Math.floor(Math.random() * botResponses.quadravigesimal.length)];
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

        if (response === 'AI_RANT') {
            botResponses.ai.forEach((aiResponse, index) => {
                setTimeout(() => {
                    addMessage(aiResponse, false);
                }, 1000 + (index * 1500)); 
            });
        } else {
            addMessage(response, false);
        }
    }, 1000);
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});