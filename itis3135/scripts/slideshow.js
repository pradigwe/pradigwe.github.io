let slideIndex = 1;
const $slides = $('.slides');
const $captionText = $('#caption');

const captions = {
    1: 'P for penguin',
    2: 'R for rice',
    3: 'E for eucalyptus',
    4: 'C for calico cat',
    5: 'I for icecream',
    6: 'O for olive tree',
    7: 'U for uranus',
    8: 'S for strawberries',
    9: 'A for azalea',
    10: 'D for duck',
    11: 'I for ivy',
    12: 'G for grapes',
    13: 'W for weeping willow',
    14: 'E for eagle'
};

const showSlides = (index) => {
    if (index > $slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = $slides.length;
    }
    $slides.hide();
    $slides.eq(slideIndex - 1).show();
    $captionText.text(captions[slideIndex] || '');
};

showSlides(slideIndex);

$('#prevBtn').click(() => {
    showSlides(--slideIndex);
});

$('#nextBtn').click(() => {
    showSlides(++slideIndex);
});
