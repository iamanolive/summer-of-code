const user1 = {
    firstname: "cassidy",
    age: 8,
    // arrow functions do not have the "this" keyword
    about: (() => {
        // takes value of "this" from surroundings
        console.log(`the person's name is ${this.firstname}`);
        console.log(`the person's age is ${this.age}`);
        console.log(this); // window
    })
}; 

// value of "this" cannot be changed in arrow functions
user1.about(); user1.about.call(user1);