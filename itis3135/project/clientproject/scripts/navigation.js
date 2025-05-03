const navLinks = document.querySelectorAll('#navigation a');
const currentPage = window.location.pathname;

navLinks.forEach((page) => {
    if (page.pathname === currentPage) {
        page.classList.add('active-page');
    }
});