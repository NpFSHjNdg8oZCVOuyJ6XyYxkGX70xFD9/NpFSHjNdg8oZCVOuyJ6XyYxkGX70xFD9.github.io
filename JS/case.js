let caseSkins = {
    "Kilowatt Case": [
        { name: "AK-47 | Alice", image: "Assets/Skins/ak47-alice.png", wear: "Factory New", price: 8000 },
        { name: "AWP | Dragon Lore", image: "Assets/Skins/awp-dragon-lore.png", wear: "Factory New", price: 11244 },
        { name: "USPS | Printstream", image: "Assets/Skins/usps-printstream.png", wear: "Minimal Wear", price: 113 },
        { name: "Glock 18 | Fully Tuned", image: "Assets/Skins/glock18-fully-tuned.png", wear: "Factory New", price: 205 },
        { name: "Desert Eagle | Hand Cannon", image: "Assets/Skins/desert-eagle-hand-cannon.png", wear: "Minimal Wear", price: 250 },
        { name: "MP7 | Bloodsport", image: "Assets/Skins/mp7-bloodsport.png", wear: "Factory New", price: 15 }
    ],
    "Gallery Case": [
        { name: "AK-47 | Crane Flight", image: "Assets/Skins/ak47-craneflight.png", wear: "Factory New", price: 120 },
        { name: "AWP | Desert Hydra", image: "Assets/Skins/awp-desert-hydra.png", wear: "Field-Tested", price: 1500 },
        { name: "USPS | Dark Water", image: "Assets/Skins/usps-dark-water.png", wear: "Minimal Wear", price: 65 },
        { name: "Glock-18 | Neo-Noir", image: "Assets/Skins/glock-18-neo-noir.png", wear: "Factory New", price: 199 },
        { name: "Desert Eagle | Kumicho Dragon", image: "Assets/Skins/desert-eagle-kumicho-dragon.png", wear: "Field-Tested", price: 25 },
        { name: "MP7 | Abyssal Apparition", image: "Assets/Skins/mp7-abyssal-apparition.png", wear: "Factory New", price: 10 }
    ],
    "Fever Case": [
        { name: "AK-47 | The Oligarch", image: "Assets/Skins/ak47-the-oligarch.png", wear: "Field-Tested", price: 50 },
        { name: "AWP | Printstream", image: "Assets/Skins/awp-printstream.png", wear: "Factory New", price: 250 },
        { name: "USPS | Purple DDPAT", image: "Assets/Skins/usps-purple-ddpat.png", wear: "Minimal Wear", price: 15 },
        { name: "Glock-18 | Dragon Tattoo", image: "Assets/Skins/glock-18-dragon-tattoo.png", wear: "Minimal Wear", price: 50 },
        { name: "Desert Eagle | Light Rail", image: "Assets/Skins/desert-eagle-light-rail.png", wear: "Factory New", price: 12 },
        { name: "MP7 | Smoking Kills", image: "Assets/Skins/mp7-smoking-kills.png", wear: "Minimal Wear", price: 8 }
    ]
};

function openCase(i) {
    let inv = JSON.parse(localStorage.getItem('inventory'));
    let caseName = inv[i].name;
    inv.splice(i, 1);
    
    let pool = caseSkins[caseName];
    let skin = null;
    let expensive = [];
    let cheap = [];

    for (let i = 0; i < pool.length; i++) {
        if (pool[i].price >= 5000) {
            expensive.push(pool[i]);
        } else {
         cheap.push(pool[i]);
        }
    }

    let skinList = cheap;
        if (cheap.length == 0) {
        skinList = pool;
    }

    let gotRare = false;
    if (expensive.length > 0) {
        let chance = Math.random();
        if (chance < 0.004) {
            gotRare = true;
        }
    }

    if (gotRare == true) {
        let randomIndex = Math.floor(Math.random() * expensive.length);
        skin = expensive[randomIndex];
    } else {
        let totalWeight = 0;
        for (let i = 0; i < skinList.length; i++) {
            totalWeight = totalWeight + (1000 / skinList[i].price);
        }

        let roll = Math.random() * totalWeight;
        let current = 0;
        let found = false;

        for (let i = 0; i < skinList.length; i++) {
            current = current + (1000 / skinList[i].price);
            if (roll <= current && found == false) {
                skin = skinList[i];
                found = true;
            }
        }

        if (skin == null) {
            skin = skinList[0];
        }
    }
    
    inv.push(skin);
    
    localStorage.setItem('inventory', JSON.stringify(inv));
    alert("You got: " + skin.name);
    location.reload();
}

window.onload = function() {
    let inv = JSON.parse(localStorage.getItem('inventory') || "[]");
    let html = "";

    for (let i = 0; i < inv.length; i++) {
        if (inv[i].name.includes("Case")) {
            html += "<div class='item'>";
            html += "<img src='" + inv[i].image + "'>";
            html += "<div class='info'>";
            html += "<h3>" + inv[i].name + "</h3>";
            html += "<button onclick='openCase(" + i + ")'>Open Case</button>";
            html += "</div></div>";
        }
    }

    document.getElementById('case-inventory').innerHTML = html || "No cases.";
};