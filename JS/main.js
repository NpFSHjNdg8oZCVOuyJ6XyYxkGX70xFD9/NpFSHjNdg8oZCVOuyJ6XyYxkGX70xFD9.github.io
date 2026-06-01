document.addEventListener('DOMContentLoaded', function() {

  let tabs = document.querySelectorAll('.tab');
  let categories = document.querySelectorAll('.category');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      
      categories.forEach(function(category) {
        category.style.display = 'none';
      });

      tabs.forEach(function(t) {
        t.classList.remove('active');
      });

      let categoryId = tab.dataset.category;
      document.getElementById(categoryId).style.display = 'flex';
      tab.classList.add('active');
    });
  });

  if (tabs.length > 0) {
    tabs[0].click();
  }

  let moneyString = localStorage.getItem('money');
  let money = 10000;
  
  if (moneyString !== null) {
      money = Number(moneyString);
  }

  let moneyDisplay = document.getElementById('money-display');
  moneyDisplay.innerText = 'Money: $' + money;

  let buyButtons = document.querySelectorAll('.item button');

  buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      
      let itemBox = button.closest('.item');
      
      let priceText = itemBox.querySelector('.price').innerText;
      priceText = priceText.replace('$', '');
      priceText = priceText.replace(',', '');
      let price = Number(priceText);

      if (money >= price) {
        
        money = money - price;
        localStorage.setItem('money', money);
        moneyDisplay.innerText = 'Money: $' + money;

        let skinName = itemBox.querySelector('h3').innerText;
        let skinImage = itemBox.querySelector('img').src;
        let skinWear = itemBox.querySelector('.wear-rating').innerText;

        let inventoryString = localStorage.getItem('inventory');
        let inventory = [];
        
        if (inventoryString !== null) {
            inventory = JSON.parse(inventoryString);
        }

        let newItem = {
            name: skinName,
            image: skinImage,
            wear: skinWear,
            price: price
        };
        
        inventory.push(newItem);
        localStorage.setItem('inventory', JSON.stringify(inventory));
      }
    });
  });

});