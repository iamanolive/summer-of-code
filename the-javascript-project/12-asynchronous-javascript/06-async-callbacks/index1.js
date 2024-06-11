const headings = document.querySelectorAll("h1");
const colors = ["violet", "purple", "red", "pink", "green", "blue", "brown"];
const times = [1, 2, 2, 1, 2, 3, 1];

for (let i = 0; i < headings.length; i++) {
    setTimeout(() => {
        headings[i].textContent = "heading " + String(i + 1);
        headings[i].style.color = colors[i];
    }, 1000 * times[i]);
};