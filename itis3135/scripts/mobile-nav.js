const icon = document.querySelector('.icon');
const smallNav = document.querySelectorAll('#navigation-menu .navigation a:not(.icon)');
icon.addEventListener('click', () => {
    smallNav.forEach((e) => {
        if (e.style.display === 'none') {
            e.style.display  = 'block';
        } else {
            e.style.display  = 'none';
        }

        
    });
});
