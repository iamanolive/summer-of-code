class Person {
    constructor (firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    static classInfo() { return `this is the Person class` }
    static desc = "static property";

    get fullname() { return `${this.firstname} ${this.lastname}`};
    set fullname(fullname) {
        const [firstname, lastname] = fullname.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }

    eat() { return `${this.firstname} is eating` }
    isSuperCute() { return this.age <= 1 }
    isCute() { return true }
}


const person1 = new Person("cassidy", "blake", 11);
console.log(person1.eat());

console.log(Person.classInfo()); // static method
console.log(Person.desc); // static property