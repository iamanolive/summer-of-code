function CreateUser1(firstname, age) {
    this.firstname = firstname;
    this.age = age;
}; 
CreateUser1.prototype.about = function () {
    console.log(this.firstname);
    console.log(this.age);
};
// "new" creates an object with value "this"
const user0 = new CreateUser1("cassidy", 11);
console.log(user0);
user0.about(); // implicitly sets object.create(createUser.prototype)
// sets __proto__ equal to prototype



// constructor function
// capital letter if func to be called with "new" in the future
function CreateUser(firstname, lastname, email, age, address) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.address = address;
};

// creates empty object and sets it to "this"
// returns object after adding key-value pairs 
const user1 = new CreateUser("cassidy", "blake", "cassandtheghosts@gmail.com", 11, "you have reached cassidy's house");
const user2 = new CreateUser("jacob", "unknown", "jacobtheghost@gmail.com", 11, "you have reached the Veil");
const user3 = new CreateUser("findley", "forgotten", "findleythebeliever@gmail.com", 11, "you have reached the humble dwelling of findley. here's a cuppa tea");

CreateUser.prototype.about = function () {
    return `i am ${this.firstname} ${this.lastname}`;
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
};
CreateUser.prototype.sing = function () {
    return "toon na na na la la";
};

console.log(user1);
console.log(user1.about());
console.log(user1.is18());