const userMethods = {
    about: function () {
        return `i am ${this.firstname} ${this.lastname}`;
    },
    is18: function () {
        return this.age >= 18;
    }
}

// __proto__ serves as reference to userMethods
function createUser(firstname, lastname, email, age, address) {
    const user = Object.create(userMethods);
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
};

// creating multiple users
const user1 = createUser("cassidy", "blake", "cassandtheghosts@gmail.com", 11, "you have reached cassidy's house");
const user2 = createUser("jacob", "unknown", "jacobtheghost@gmail.com", 11, "you have reached the Veil");
const user3 = createUser("findley", "forgotten", "findleythebeliever@gmail.com", 11, "you have reached the humble dwelling of findley. here's a cuppa tea");

// calling methods from __proto__
console.log(user1.about());