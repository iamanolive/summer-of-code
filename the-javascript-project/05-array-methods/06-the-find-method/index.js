const myArray = ["hello", "cat", "dog", "lion"];
// returns first occurrence that satisties condition
const lengthThree = myArray.find(string => {
    return string.length === 3;
}); console.log(lengthThree);
// returns undefined if no such occurrence
const lengthOne = myArray.find(string => {
    return string.length === 1;
}); console.log(lengthOne);


const users = [
    {userID: 1, username: "cassidy"},
    {userID: 2, username: "jacob"},
    {userID: 3, username: "lara"},
    {userID: 4, username: "findley"},
    {userID: 5, username: "alice"}
]; const userID3 = users.find(user => {
    return user.userID === 3;
}); console.log(userID3);