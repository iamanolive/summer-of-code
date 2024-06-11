const postsURL = "https://jsonplaceholder.typicode.com/posts";

// returns promise
fetch(postsURL)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("something went wrong");
        }
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log("inside catch");
        console.log(error);
    })


fetch(postsURL, {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }), headers: {
        "Content-type": "application/json; charset = UTF-8"
    }
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("something went wrong");
        }
    }).then(data => {
        console.log(data);
    }).then(error => {
        console.log("inside catch");
        console.log(error);
    })