// methods are the same for every instance of an object
const userMethods = {
    about: function () {
        return `i am ${this.firstname} ${this.lastname}`;
    },
    is18: function () {
        return this.age >= 18;
    }
}

// methods are created and stored as many times as the number of users
function createUser(firstname, lastname, email, age, address) {
    const user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;

    // REFERENCE to the functions
    // not stored multiple times
    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    return user;
};



// creating multiple users
const user1 = createUser("cassidy", "blake", "cassandtheghosts@gmail.com", 11, "you have reached cassidy's house");
const user2 = createUser("jacob", "unknown", "jacobtheghost@gmail.com", 11, "you have reached the Veil");
const user3 = createUser("findley", "forgotten", "findleythebeliever@gmail.com", 11, "you have reached the humble dwelling of findley. here's a cuppa tea");



// object methods
console.log(user1.about());
console.log(user2.about());