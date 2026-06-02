window.onload = function() {
    const caseInventory = document.getElementById('case-inventory');
    const inventoryString = localStorage.getItem('inventory');
    
    let inventory = [];
    if (inventoryString) {
        inventory = JSON.parse(inventoryString);
    }

    let html = "";

    for (let i = 0; i < inventory.length; i++) {
        let item = inventory[i];
        
        if (item.name.includes("Case")) {
            html += `
                <div class="item">
                    <img src="${item.image}">
                    <div class="info">
                        <h3>${item.name}</h3>
                        <button class="open-case-button">Open Case</button>
                    </div>
                </div>
            `;
        }
    }

    if (html === "") {
        caseInventory.innerHTML = '<p>You have no cases. Go to the marketplace to buy some!</p>';
    } else {
        caseInventory.innerHTML = html;
    }
};