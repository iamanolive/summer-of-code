export class Person {
    constructor (firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    };
    info() {
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.age);
    };
};


export class AnotherPerson {
    constructor (firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    };
    info() {
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.age);
    };
};



const hello = "hello, world!";
export default hello;