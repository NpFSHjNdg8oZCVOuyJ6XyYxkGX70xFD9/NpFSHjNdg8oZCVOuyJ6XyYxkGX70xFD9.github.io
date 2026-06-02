window.onload = function() {

  let tabs = document.querySelectorAll('.tab');
  let categories = document.querySelectorAll('.category');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function() {
      
      for (let j = 0; j < categories.length; j++) {
        categories[j].style.display = 'none';
      }

      for (let j = 0; j < tabs.length; j++) {
        tabs[j].className = 'tab';
      }

      let categoryId = tabs[i].getAttribute('data-category');
      document.getElementById(categoryId).style.display = 'flex';
      tabs[i].className = 'tab active';
    };
  }

  if (tabs.length > 0) {
    tabs[0].onclick();
  }

  let money = 10000;
  if (localStorage.getItem('money')) {
      money = parseInt(localStorage.getItem('money'));
  }

  let moneyDisplay = document.getElementById('money-display');
  moneyDisplay.innerText = 'Money: $' + money;

  let buyButtons = document.querySelectorAll('.item button');

  for (let i = 0; i < buyButtons.length; i++) {
    buyButtons[i].onclick = function() {
      
      let itemBox = buyButtons[i].closest('.item');
      
      let priceText = itemBox.querySelector('.price').innerText;
      priceText = priceText.replace('$', '');
      priceText = priceText.replace(',', '');
      let price = parseInt(priceText);

      if (money >= price) {
        
        money = money - price;
        localStorage.setItem('money', money);
        moneyDisplay.innerText = 'Money: $' + money;

        let skinName = itemBox.querySelector('h3').innerText;
        let skinImage = itemBox.querySelector('img').src;
        let skinWear = itemBox.querySelector('.wear-rating').innerText;

        let inventory = [];
        if (localStorage.getItem('inventory')) {
            inventory = JSON.parse(localStorage.getItem('inventory'));
        }

        inventory.push({
            name: skinName,
            image: skinImage,
            wear: skinWear,
            price: price
        });
        
        localStorage.setItem('inventory', JSON.stringify(inventory));
      }
    };
  }

};