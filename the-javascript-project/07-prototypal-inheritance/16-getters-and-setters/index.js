class Person {
    constructor (firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get fullname() { return `${this.firstname} ${this.lastname}` }
    
    setName(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    set fullname(fullname) {
        const [firstname, lastname] = fullname.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const person1 = new Person("cassidy", "blake", 11);

console.log(person1);
// console.log(person1.fullname()); // method (without get)
console.log(person1.firstname); // property

// getting method as property
console.log(person1.fullname);


// setters
person1.setName("jacob", "unknown");
console.log(person1.firstname);
console.log(person1.lastname);


person1.firstname = "findley";
person1.lastname = "forgot";
console.log(person1.firstname);
console.log(person1.lastname);

person1.fullname = "cassidy blake";
console.log(person1.fullname);
console.log(person1.firstname);
console.log(person1.lastname);