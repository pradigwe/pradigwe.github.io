const eventCountDown = () => {
    const currentDate = new Date();
    const nextEvent = new Date(2025, 9, 3, 17);
    let timeBetween = nextEvent - currentDate;

    // converts from milliseconds to minute, hours, and days
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    timeBetween %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(timeBetween / (1000 * 60 * 60));
    timeBetween %= (1000 * 60 * 60);

    const minutes = Math.floor(timeBetween / (1000 * 60));

    // stores remaining time in nextEventCountdown variable
    const countdown = document.getElementById('nextEventCountdown');
    if (countdown !== null){
        countdown.innerHTML = `${days} days, ${hours} hours, and ${minutes} minutes left!`;
    }
};

// dynamically updates the event countdown timer every minute
eventCountDown();
const timer = setInterval(eventCountDown, 60000);

let slideIndex = 1;
const galleryCaptions = {
    1: 'placeholder image 1',
    2: 'placeholder image 2',
    3: 'placeholder image 3'
};

const showSlides = (n) => {
    const slides = document.getElementsByClassName('slides');
    const captionText = document.getElementById('caption');

    if (slides.length === 0) return;

    // Wrap around logic
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Show the correct slide
    slides[slideIndex - 1].style.display = 'block';

    // Update caption
    if (captionText) {
        captionText.innerText = galleryCaptions[slideIndex] || '';
    }
};

const plusSlides = (n) => {
    slideIndex += n;
    showSlides(slideIndex);
};

const currentSlide = (n) => {
    slideIndex = n;
    showSlides(slideIndex);
};

// Ensure everything loads after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initial display
    showSlides(slideIndex);

    // Set up event listeners
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
        });
    }
});