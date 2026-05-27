document.addEventListener('DOMContentLoaded', function() {

  const tabs = document.querySelectorAll('.tab');
  const categories = document.querySelectorAll('.category');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      categories.forEach(function(category) {
        category.style.display = 'none';
      });
      tabs.forEach(function(t) {
        t.classList.remove('active');
      });

      document.getElementById(tab.dataset.category).style.display = 'flex';
      tab.classList.add('active');
    });
  });

  if (tabs.length > 0) {
    tabs[0].click();
  }

  let money = 10000;
  const moneyDisplay = document.getElementById('money-display');
  const buyButtons = document.querySelectorAll('.item button');

  buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {

      const priceElement = button.parentElement.querySelector('.price');
      const priceText = priceElement.innerText;

      const cleanedText = priceText.replace('$', '').replace(',', '');
      const price = Number(cleanedText);
      
      if (money >= price) {
        money = money - price;
        moneyDisplay.innerText = 'Money: $' + money;
      }

    });
  });

});