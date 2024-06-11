function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = true;
            if (value) resolve();
            else reject();
        }, 2000);
    });
};


function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = true;
            if (value) resolve();
            else reject();
        }, 2000);
    });
};

setTimeout(() => {
    function myPromise() {
        return new Promise((resolve, reject) => {
            const value = true;
            if (value) resolve();
            else reject();
        });
    }
}, 2000);


myPromise().then(() => {
    console.log("resolved");
}).catch(() => {
    console.log("rejected");
})