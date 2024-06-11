const postsURL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest();

// the open method
xhr.open("GET", postsURL) // request type, endpoint url

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const response = xhr.response;
        const data = JSON.parse(response); // transform into JS object
    };
};

// runs when readystate === 4
xhr.onload = function () {
    const response = xhr.response;
    const data = JSON.parse(response);
};


// the send request
xhr.send()