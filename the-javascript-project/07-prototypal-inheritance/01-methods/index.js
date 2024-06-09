// methods = functions inside objects
const person = {
    firstname: "cassidy",
    age: 8,
    about: function () {
        console.log(this);
        console.log(`the name of the person is ${this.firstname}`);
        console.log(`${this.firstname} is ${this.age} years old`);
    } // the value of "this" is declared during function runtime
}; person.about(); // here, the value of "this" is "person"



function personInfo() {
    console.log(`the name of the person is ${this.firstname}`);
    console.log(`${this.firstname} is ${this.age} years old`);
}

const person1 = {
    firstname: "jacob",
    age: 275,
    about: personInfo
};

const person2 = {
    firstname: "lara",
    age: 687,
    about: personInfo
};

const person3 = {
    firstname: "findley",
    age: 1100,
    about: personInfo
};

personInfo(); // undefined key-value pairs
person1.about();
person2.about();
person3.about();