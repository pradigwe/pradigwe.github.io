const currentSection = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');
const header = document.getElementsByClassName('home')[0];
const homeBtn = document.getElementById("home-btn");

function hideAll() {
    currentSection.forEach((section) => {
        section.style.display = 'none';
    });
    header.style.display = 'none'; 
}

function showPage (id) {
    console.log('showPage start');
    if (id === 'what'){
        header.style.display = '';
        homeBtn.style.display = 'none';
    } else {
        homeBtn.style.display = 'inline-block';
    }
    const section = document.getElementById(id);
    section.style.display = 'flex';
}

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        hideAll();
        const id = e.target.getAttribute('href').substring(1);
        showPage(id);
    });
});

window.addEventListener('load', () => {
    hideAll();
    showPage('what');
});
