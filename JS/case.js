let skins = [
    { name: "AK-47 | Alice", image: "Assets/Skins/ak47-alice.png", wear: "Factory New", price: 8000 },
    { name: "AWP | Dragon Lore", image: "Assets/Skins/awp-dragon-lore.png", wear: "Factory New", price: 11244 },
    { name: "USPS | Printstream", image: "Assets/Skins/usps-printstream.png", wear: "Minimal Wear", price: 113 },
    { name: "Glock 18 | Fully Tuned", image: "Assets/Skins/glock18-fully-tuned.png", wear: "Factory New", price: 205 },
    { name: "Glock-18 | Neo-Noir", image: "Assets/Skins/glock-18-neo-noir.png", wear: "Factory New", price: 199 },
    { name: "Glock-18 | Dragon Tattoo", image: "Assets/Skins/glock-18-dragon-tattoo.png", wear: "Minimal Wear", price: 50 }
];

function openCase(i) {
    let inv = JSON.parse(localStorage.getItem('inventory'));
    inv.splice(i, 1);
    
    let skin = skins[Math.floor(Math.random() * skins.length)];
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