console.log("script starts here!");
const id = setTimeout(() => {
    console.log("you are inside set timeout!");
}, 0); // minimum wait time
for (let i = 0; i < 100; i++)
    console.log("...");
console.log(`set timeout ID = ${id}`);
console.log("clearing timeout");
clearTimeout(id); // timeout cleared before it runs
console.log("script ends here!");