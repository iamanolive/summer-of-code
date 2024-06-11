// microtask queue
console.log("script starts here!");

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// promise production
const friedRice = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice"))
        resolve("fried rice");
    else reject("Promise broken");
});

// promise consumption
friedRice.then(
    (myFriedRice) => {console.log("let's eat", myFriedRice)},
    (error) => {console.log(error)}
);

friedRice.then((myFriedRice) => {
    console.log("let's eat", myFriedRice);
}).catch((error) => {
    console.log(error);
});

setTimeout(() => {
    console.log("hello from inside set timeout");
});

for (let i = 0; i <= 100; i++)
    console.log(i, Math.random());

console.log("script ends here!");