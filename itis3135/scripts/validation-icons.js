const html = document.getElementById("validation-link-html");
const css = document.getElementById("validation-link-css");
const wave = document.getElementById("validation-link-wave");

html.setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
css.setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
if (wave !== null && wave !== "") {
    wave.setAttribute("href", "https://wave.webaim.org/report#/" + location.href);
}
