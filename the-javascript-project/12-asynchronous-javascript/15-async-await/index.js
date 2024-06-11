const postsURL = "https://jsonplaceholder.typicode.com/posts";


// return value = promise
async function getPosts() {
    // await => waits until resolved
    const response = await fetch(postsURL);
    if (!response.ok)
        throw new Error("something went wrong");
    const data = await response.json();
    return data;
}

getPosts()
    .then(data => { console.log(data) })
    .catch(error => { console.log(error) })



fetch(postsURL)
    .then(response =>  response.json())
    .then(data => { console.log(data) })

// arrow function
const getPostsAgain = async () => {
    const response = await fetch(postsURL);
    if (!response.ok)
        throw new Error("something went wrong");
    const data = await response.json();
    return data;
}