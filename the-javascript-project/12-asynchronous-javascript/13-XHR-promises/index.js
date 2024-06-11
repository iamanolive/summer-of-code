const postsURL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error("something went wrong"));
            }
        }

        xhr.onerror = function () {
            reject(new Error("something went wrong"));
        }

        xhr.send();
    })
}


sendRequest("GET", postsURL)
    .then(response => {
        const data = JSON.parse(response);
        return data;
    }).then(data => {
        const id = data[3].id;
        return id;
    }).then(id => {
        const url1 = `${postsURL}/${id}`;
        return sendRequest("GET", url1);
    }).then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    }).catch(error => {
        console.log(error);
    })