function createUser(firstname, lastname, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
};

const user1 = createUser("cassidy", "blake", "cassandtheghosts@gmail.com", 11, "you have reached cassidy's house");
const user2 = createUser("jacob", "unknown", "jacobtheghost@gmail.com", 11, "you have reached the Veil");
const user3 = createUser("findley", "forgotten", "findleythebeliever@gmail.com", 11, "you have reached the humble dwelling of findley. here's a cuppa tea");

createUser.prototype.about = function () {
    return `i am ${this.firstname} ${this.lastname}`;
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
};
createUser.prototype.sing = function () {
    return "toon na na na la la";
};


console.log(user1);
console.log(user1.is18());