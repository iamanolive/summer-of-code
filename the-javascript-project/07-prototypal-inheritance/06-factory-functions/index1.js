// function that creates and returns an object
function createUser(firstname, lastname, email, age, address) {
    const user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `my name is ${this.firstname} ${this.lastname}`;
    };
    user.is18 = function () {
        return this.age >= 18 
    };

    return user;
};

// creating an instance of an object
const user1 = createUser("cassidy", "blake", "cassandtheghosts@gmail.com", 11, "you have reached cassidy's house");
const user2 = createUser("jacob", "unknown", "jacobtheghost@gmail.com", 11, "you have reached the Veil");
const user3 = createUser("findley", "forgotten", "findleythebeliever@gmail.com", 11, "you have reached the humble dwelling of findley. here's a cuppa tea");

console.log(user1);
const is18 = user1.is18(); console.log(is18);
const about = user1.about(); console.log(about);