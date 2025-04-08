function displayNav () {
    const smallNav = document.querySelectorAll('#navigation-menu .navigation a:not(.icon)');
    smallNav.forEach((e) => {
    if (window.innerWidth > 600) {
        e.style.display = 'block';
    } else {
        e.style.display = 'none';
    }
    });
}
displayNav();
window.addEventListener("resize", displayNav);