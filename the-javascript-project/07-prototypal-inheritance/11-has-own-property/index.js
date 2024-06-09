function CreateUser(firstname, lastname, email, age, address) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.address = address;
};

CreateUser.prototype.about = function () {
    return `i am ${this.firstname} ${this.lastname}`;
}; 
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.sing = function () {
    return "toon na na na la la";
};

const user1 = new CreateUser("cassidy", "blake", "cassandtheghosts@gmail.com", 11, "you have reached cassidy's house");
const user2 = new CreateUser("jacob", "unknown", "jacobtheghost@gmail.com", 11, "you have reached the Veil");
const user3 = new CreateUser("findley", "forgotten", "findleythebeliever@gmail.com", 11, "you have reached the humble dwelling of findley. here's a cuppa tea");


// looping through all properties set in prototype
for (let key in user1)
    console.log(key);
// looping through all properties not set in prototype
for (let key in user1)
    if (user1.hasOwnProperty(key))
        console.log(key);