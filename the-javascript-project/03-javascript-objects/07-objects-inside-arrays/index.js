const users = [
    {
        userID: 1,
        firstname: "cassidy",
        lastname: "blake",
        gender: "female"
    },
    {
        userID: 2,
        firstname: "jacob",
        lastname: "unknown",
        gender: "male"
    },
    {
        userID: 3,
        firstname: "lara",
        lastname: "chowdhury",
        gender: "female"
    }
]; console.log(users);

// looping through array items or object keys
for (let user of users)
    console.log(user);
for (let user of users) // userID
    console.log(user.userID);
for (let user of users) // firstname
    console.log(user.firstname);