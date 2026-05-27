document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const categories = document.querySelectorAll('.category');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categories.forEach(category => category.style.display = 'none');
            tabs.forEach(t => t.classList.remove('active'));
            
            document.getElementById(tab.dataset.category).style.display = 'flex';
            tab.classList.add('active');
        });
    });

    if (tabs.length > 0) {
        tabs[0].click();
    }
});