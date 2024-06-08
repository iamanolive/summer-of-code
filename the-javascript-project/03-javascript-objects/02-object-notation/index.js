const person = {
    name: "cassidy blake",
    age: 11,
    hobbies: ["ghost-hunting", "photography", "comics"],
}; console.log(person);

// accessing data using dot notation
console.log(person.name);
console.log(person.age);
// adding a key-value pair using dot notation
person.gender = "female";
console.log(person);

// accessing data using bracket notation
console.log(person["name"]);
console.log(person["age"]);
// adding a key-value pair using bracket notation
person["enemy"] = "raven in red";
console.log(person);

// two-word keys cannot be accessed with dot notation
person["best friend"] = "jacob";
console.log(person["best friend"]);

// using values stored in variables as keys
const key = "email";
person[key] = "cassandtheghosts@gmail.com";
console.log(person);