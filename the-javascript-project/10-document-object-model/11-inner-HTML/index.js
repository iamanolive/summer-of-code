const headline = document.querySelector(".headline");
console.log(headline.innerHTML);

headline.innerHTML = "<h1>inner HTML changed</h1>";
headline.innerHTML += "<button class = \"btn\">learn more</button>";