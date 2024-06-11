console.log("script starts here");
function hello () {
    console.log("hello, world!");
};
setTimeout(hello, 1000); // milliseconds
console.log("script ends here");


setTimeout(() => {
    console.log("you are inside set timeout");
}, 1000);