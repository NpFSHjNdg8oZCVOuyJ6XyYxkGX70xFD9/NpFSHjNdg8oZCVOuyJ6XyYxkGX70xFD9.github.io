document.addEventListener("DOMContentLoaded", function() {
    const caseInventory = document.getElementById('case-inventory');
    const inventory = JSON.parse(localStorage.getItem('inventory') || '[]');

    const cases = inventory.filter(item => item.name.toLowerCase().includes('case'));

    if (cases.length === 0) {
        caseInventory.innerHTML = '<p>You have no cases. Go to the marketplace to buy some!</p>';
    } else {
        cases.forEach(function (caseItem, index) {
            const div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML =
                '<img src="' + caseItem.image + '" alt="' + caseItem.name + '">' +
                '<div class="info">' +
                '<h3>' + caseItem.name + '</h3>' +
                '<button class="open-case-button">Open Case</button>' +
                '</div>';
            caseInventory.appendChild(div);
        });
    }
});