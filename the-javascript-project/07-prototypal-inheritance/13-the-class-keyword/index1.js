class CreateUser {
    constructor (firstname, lastname, email, age, address) {
        console.log("constructor called");
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() { return `i am ${this.firstname} ${this.lastname}` }
    is18() { return this.age >= 18 }
    sing() { return "la la la" }

    func(a) { console.log(a) }
}


// class constructors cannot be called without "new"
const user1 = new CreateUser("cassidy", "blake", "cass@gmail.com", 11, "cassidy's home");
const user2 = new CreateUser("jacob", "unknown", "jacob@gmail.com", 11, "the Veil");
const user3 = new CreateUser("findley", "forgot", "findley@gmail.com", 899, "findley's dwelling");


console.log(user1.firstname);
console.log(user1.sing());
user1.func(12);

console.log(Object.getPrototypeOf(user1));