const person = {
    name: "cassidy",
    age: 11,
    hobbies: ["ghost-hunting", "photography", "comics"]
}; console.log(person);

// the for-in loop
for (let key in person) // object keys
    console.log(key);
for (let key in person) // object values
    console.log(person[key]);
for (let key in person) // key-value pairs
    console.log(`${key}: ${person[key]}`);

// object.keys
console.log(Object.keys(person));
console.log(typeof Object.keys(person));
console.log(Array.isArray((Object.keys(person))));
for (let key of Object.keys(person))
    console.log(key); // keys
for (let key of Object.keys(person))
    console.log(person[key]); // values
for (let key of Object.keys(person))
    console.log(`${key}: ${person[key]}`); // pairs