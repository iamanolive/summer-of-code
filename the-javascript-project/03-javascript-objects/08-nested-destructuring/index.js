const users = [
    { userID: 1, firstname: "cassidy", lastname: "blake", gender: "female" },
    { userID: 2, firstname: "jacob", lastname: "unknown", gender: "male" },
    { userID: 3, firstname: "lara", lastname: "chowdhury", gender: "female" }
]; console.log(users);

const [ user1, user2, user3 ] = users;
console.log(user1, user2, user3);

const [ {firstname}, , {gender} ] = users;
console.log(firstname);
console.log(gender);

const [ {firstname: user1firstname, userID}, , {gender: user3gender} ] = users;
console.log(user1firstname);
console.log(userID);
console.log(user3gender);