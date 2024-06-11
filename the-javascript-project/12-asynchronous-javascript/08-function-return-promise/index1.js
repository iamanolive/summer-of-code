function ricePromise() {
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
    return new Promise ((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice"))
            resolve("fried rice for you");
        else reject("promise broken");
    })
}


ricePromise().then((myFriedRice) => {
    console.log(myFriedRice)
}).catch((error) => {
    console.log(error);
});