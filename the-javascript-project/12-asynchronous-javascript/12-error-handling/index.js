const postsURL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", postsURL);

xhr.onload = (() => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.response;
        const data = JSON.parse(response);
    } else console.log("something went wrong");
});

xhr.onerror = (() => {
    console.log("network error");
});

xhr.send();