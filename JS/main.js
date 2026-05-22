document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab');
    var categories = document.querySelectorAll('.category');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var categoryName = tab.getAttribute('data-category');

            categories.forEach(function(category) {
                category.style.display = 'none';
            });

            tabs.forEach(function(t) {
                t.classList.remove('active');
            });

            document.getElementById(categoryName).style.display = 'flex';
            tab.classList.add('active');
        });
    });


    document.querySelector('.tab').click();
});