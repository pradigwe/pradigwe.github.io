const time = document.getElementById('time');

const setTime = () => {
    const now = new Date();
    const day = now.getDate().toString();
    const month = now.toLocaleString('default', {month: 'long'}).toString();
    const year = now.getFullYear().toString();
    time.innerText = month + ' ' + day + ', ' + year;
    // console.log(ti);
};


setTime();
