const icon = document.querySelector('.icon');
const smallNav = document.querySelectorAll('#navigation a:not(:first-child)');
icon.addEventListener('click', () => {
    smallNav.forEach((e) => {
        const element = getComputedStyle(e);
        const display = element.display;
        
        if (display === 'none') {
            e.style.display  = 'block';
        } if (display === 'block') {
            e.style.display  = 'none';
        }
    });
});
