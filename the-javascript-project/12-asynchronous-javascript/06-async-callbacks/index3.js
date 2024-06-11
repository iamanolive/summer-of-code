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

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback)
                onSuccessCallback();
        } else {
            console.log("element does not exist");
            if (onFailureCallback)
                onFailureCallback();
        }
    }, time);
};

// the pyramid of doom

changeText(heading1, "one", "violet", 2000, () => {
    changeText(heading2, "two", "purple", 1000, () => {
        changeText(heading3, "three", "red", 1000, () => {
            changeText(heading4, "four", "pink", 1000, () => {
                changeText(heading5, "five", "green", 2000, () => {
                    changeText(heading6, "six", "blue", 1000, () => {
                        changeText(heading7, "seven", "brown", 1000, () => {
                            changeText(heading8, "eight", "cyan", 1000, () => {
                                changeText(heading9, "nine", "#cda562", 1000, () => {
                                    changeText(heading10, "ten", "#dca652", 1000, () => {
                                    }, () => { console.log("heading10 does not exist") });
                                }, () => { console.log("heading9 does not exist") });
                            }, () => { console.log("heading8 does not exist") });
                        }, () => { console.log("heading7 does not exist") });
                    }, () => { console.log("heading6 does not exist") });
                }, () => { console.log("heading5 does not exist") }); 
            }, () => { console.log("heading4 does not exist") });
        }, () => { console.log("heading3 does not exist") });
    }, () => { console.log("heading2 does not exist") });
}, () => { console.log("heading1 does not exist") });