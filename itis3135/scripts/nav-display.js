function displayNav () {
    const smallNav = document.querySelectorAll('#navigation a:not(:first-child)');
    smallNav.forEach((e) => {
    const element = getComputedStyle(e);
    const display = element.display; 

    if (window.innerWidth > 600) {
        e.style.display = 'block';
    } else {
        e.style.display = 'none';
    }
    });
}
displayNav();
window.addEventListener("resize", displayNav);