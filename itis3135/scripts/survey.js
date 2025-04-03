// elements that affect the form
const form = document.querySelector('form');
const image = document.getElementById('image-intro');
const courseList = document.getElementById('course-list');
const courseBtn = document.getElementById('course-btn');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');

// form elements
const name = document.getElementById('name');
const mascot = document.getElementById('mascot');
const caption = document.getElementById('image-caption');
const personalBackground = document.getElementById('background-personal');
const professionalBackground = document.getElementById('background-professional');
const academicBackground = document.getElementById('background-academic');
const webDevBackground = document.getElementById('background-webdev');
const platform = document.getElementById('platform');
const funnyFact = document.getElementById('funny-fact');
const extraFact = document.getElementById('extra-fact');
const instructions = document.getElementById('instructions');

let courseCount = 0;

// Pre fills out the form with my introduction page information
const prePopulate = () => {
    const myCourses = [
        {
            name: 'EDUC 1511 - Local Social Science'
        },
        {
            name: 'ITLN 1202 - Elementary Italian II'
        },
        {
            name: 'ITSC 1200 - Freshman Seminar'
        },
        {
            name: 'ITIS 3135 -  Web-Based Application Design and Development'
        },
        {
            name: 'ITSC 2175 - Logic and Algorithms'
        },
        {
            name: 'MATH 2164 - Matrices and Linear Algebra'
        }
    ];
    
    // pre populates courses into the form
    myCourses.forEach((course) => {
        courseCount++;
        const courseDiv = document.createElement('div');
        courseDiv.innerHTML = `
            <label for="course${courseCount}">
                Course:
                <input type="text" class="course" name="course${courseCount}" value="${course.name}">
                <input type="button" class="delete-course" name="delete-course" value="Delete Course">
            </label>
        `;
        courseList.insertBefore(courseDiv, courseBtn);

        // deletes selected course button
        courseDiv.querySelector('.delete-course').addEventListener('click', () => {
            courseCount--;
            courseList.removeChild(courseDiv);
        });
    });

    name.value = 'Precious Adigwe';
    mascot.value = 'Passionate Auk';
    caption.value = "Me about to head out for a Career Trek to Lowe's Tech Hub";
    personalBackground.value = "Hello! My name is Precious and I'm 18. I was born and raised in Raleigh, NC, and in my free time I like to read, draw, play video games, and practice the guitar.";
    professionalBackground.value = "I haven't worked for anything CS related right now, but I'm currently working at Panera.";
    academicBackground.value = "Currently a junior studying Computer Science with a concentration in Web and Mobile Development, and a minor in Italian";
    webDevBackground.value = 'This semester is my first semester working with web development.';
    platform.value = ' Windows 11';

    // pre checks the confirmation checkbox
    const confirmation = document.getElementById('confirm');
    confirmation.checked = 'true';
    
    // adds my image to image element
    image.src = "images/lowes-hub.jpg";
};


const introduction = document.getElementById('custom-introduction');
// displays introduction image onto page
const displayImage = () => {
    // if image file is selected returns preview image
    if (image.files.length) {
        let imageEle;
        imageEle = document.createElement('img');
        imageEle.src = URL.createObjectURL(image.files[0]);
        imageEle.id = 'image-preview';
        imageEle.alt = 'user introduction image';
        return imageEle;
    } else { // if image file is not selected, returns my pre filled image
        const myImage = document.getElementById('image-preview');
        return myImage;
    }
};

// checks if image selected by user is valid
const validImage = () => {
    if (!image.files.length){
        return true;
    } else {
        const file = image.files[0].type;
        if (file === 'image/png' || file === 'image/jpg' || file === 'image/jpeg'){
            return true;
        } else {
            alert('Please choose an image file with the extension .png, .jpg. or .jpeg');
            return false;
        }
    }
    
};

// Generates custom introduction page using the filled out form
const generateIntro = () => {
    // hides form and instructions
    instructions.style.display = 'none';
    form.style.display = 'none';
    introduction.style.display = 'flex';
    introduction.innerHTML = ``;

    // displays image that is in the preview
    const userImage = displayImage();
    introduction.innerHTML += `
        <div>
            <h3 id="userName">${name.value} || ${mascot.value}</h3>
        </div>   
    `;
    introduction.appendChild(displayImage());
    // displays form information
    introduction.innerHTML += `
        <caption>${caption.value}</caption>
        <ul class="list left no-bullet">
            <li><span class="strong">Personal Background: </span>${personalBackground.value}
            </li>
            <li><span class="strong">Professional Background: </span>${professionalBackground.value}
            </li>
            <li><span class="strong">Academic Background: </span>${academicBackground.value}
            </li>
            <li><span class="strong">Web Development Background: </span>${webDevBackground.value}
            </li>
            <li><span class="strong">Primary Computer Platform: </span>${platform.value}
            </li>
        </ul>
        <h4><span class="strong">Courses Currently Taking</span></h4>
        <ul id="class-container" class="indent left"></ul>
        <ul class="list left no-bullet" id="facts-container"></ul>
        <button id="reset-form-btn">Reset Form</button>
    `;
    // Displays forms' courses to page
    const classContainer = document.getElementById("class-container");
    const courses = Array.from(document.getElementsByClassName('course'));
    courses.forEach((course) => {
        if (!course.innerText) {
            if (course.value){
                const courseHTML = document.createElement('li');
                const text = document.createTextNode(course.value);
                courseHTML.appendChild(text);
                courseHTML.className = 'strong';
                classContainer.appendChild(courseHTML);
            }
        }        
    });
    const factsContainer = document.getElementById("facts-container");
    // checks if user enters a funny fact and displays the result
    if (!funnyFact.value.trim().length) {
        const fact = document.createElement('li');
        fact.innerHTML = `<span class="strong">Fun Fact:</span> N/A`;
        factsContainer.appendChild(fact);
    } else {
        const fact = document.createElement('li');
        fact.innerHTML = `<span class="strong">Fun Fact:</span> ${funnyFact.value}`;
        factsContainer.appendChild(fact);
    }

    // checks if user enters an extra fact and displays the result
    if (!extraFact.value.trim().length) {
        const fact = document.createElement('li');
        fact.innerHTML = `<span class="strong">Extra Fact:</span> N/A`;
        factsContainer.appendChild(fact);
    } else {
        const fact = document.createElement('li');
        fact.innerHTML = `<span class="strong">Extra Fact:</span> ${extraFact.value}`;
        factsContainer.appendChild(fact);
    }
    
    // creates reset button for user to create a new introduction page
    const formResetBtn = document.getElementById('reset-form-btn');
    formResetBtn.addEventListener('click', () => {
        // fixes bug with previewImage disappearing after button is clicked
        const previewContainer = document.getElementById('preview-container');
        const previewImage = document.createElement('img');
        previewImage.id='image-preview';
        previewImage.src = 'images/lowes-hub.jpg';
        previewImage.alt = 'users introduction image';
        previewContainer.appendChild(previewImage);

        // hides the custom introduction and redisplays the form
        introduction.style.display = 'none';
        instructions.style.display = 'block';
        form.style.display = 'flex';
        
    });
};

// Event Listeners
courseBtn.addEventListener('click', () => {
    courseCount++;
    const courseDiv = document.createElement('div');
    courseDiv.innerHTML = `
        <label for="course${courseCount}">
            Course:
            <input type="text" class="course" name="course${courseCount}">
            <input type="button" class="delete-course" name="delete-course" value="Delete Course">
        </label>
    `;
    courseList.insertBefore(courseDiv, courseBtn);
    // deletes selected course button
    courseDiv.querySelector('.delete-course').addEventListener('click', () => {
        courseCount--;
        courseList.removeChild(courseDiv);
    });
});

// changes preview image if user changes image file
image.addEventListener('change', (userImage) => {
    userImage = displayImage();
    const previewContainer = document.getElementById("preview-container");
    previewContainer.innerHTML = '';
    previewContainer.appendChild(userImage);
}, false);


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        if (validImage()) {
            generateIntro();
        }
    } else {
        form.reportValidity();
    }
});

// resets everything within the form 
resetBtn.addEventListener('click', () => {
    const courses = courseList.querySelectorAll('div');
    courses.forEach((course) => {
        courseList.removeChild(course);
    });
    courseCount = 0;
});

window.onload = () => {
    prePopulate();
};
