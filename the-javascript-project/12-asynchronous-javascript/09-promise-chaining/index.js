const myPromise = Promise.resolve(5);
myPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});


function anotherPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    });
};


anotherPromise().then(value => {
    console.log(value);
    value += "bar";
    return value; 
    // return Promise.resolve(value);
}).then(value => {
    console.log(value);
    value += "baaz";
    return value;
}).then(value => {
    console.log(value);
    return value;
}).then(value => {
    console.log(value);
}).then(value => {
    console.log(value);
})