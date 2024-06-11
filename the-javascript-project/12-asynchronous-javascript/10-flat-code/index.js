const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");



function changeText (element, text, color, time) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else reject("element not found");
        }, time);
    });
};


changeText(heading1, "heading 1", "red", 1000)
    .then(() => changeText(heading2, "heading 2", "purple", 1000))
    .then(() => changeText(heading3, "heading 3", "green", 1000))
    .then(() => changeText(heading4, "heading 4", "orange", 1000))
    .then(() => changeText(heading5, "heading 5", "violet", 1000))
    .then(() => changeText(heading6, "heading 6", "red", 1000))
    .then(() => changeText(heading7, "heading 7", "pink", 1000))
    .then(() => changeText(heading8, "heading 8", "magenta", 1000))
    .then(() => changeText(heading9, "heading 9", "blue", 1000))
    .then(() => changeText(heading10, "heading 10", "cyan", 1000))
    .catch((error) => { alert(error) });