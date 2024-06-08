// object literals
const person = { 
    firstname: "cassidy", 
    1: "one", 
    2: "two" 
}; console.log(person.firstname);
console.log(person["firstname"]);
// keys are always of string or symbol type
for (let key in person)
    console.log(typeof key);
console.log(person[1]);
console.log(person["1"]);


// creating an empty map
const personMap = new Map();
console.log(personMap);
// setting key-value pairs
personMap.set("firstname", "cassidy");
personMap.set("age", 7);
console.log(personMap);
// keys can be of any data type
personMap.set(1, 1);
console.log(personMap);
// accessing value of given key
console.log(personMap.get("firstname"));
console.log(personMap.get(1));
// the keys method
console.log(personMap.keys());
for (let key of personMap.keys())
    console.log(key, typeof key);
// key of array data type
personMap.set([1, 2, 3], "onetwothree");
console.log(personMap);
// key of object literal data type
personMap.set({"username": "cassidy"}, "blake");
console.log(personMap);

// maps are arrays made of keys and values
for (let key of personMap)
    console.log(Array.isArray(key));
// destructuring key-value pairs from arrays
for (let [key, value] of personMap)
    console.log(key, value);


// adding values during declaration (using arrays)
const anotherPerson = new Map([["firstname", "cassidy"], ["lastname", "blake"], ["age", 7]]);
console.log(anotherPerson);


const person1 = { ID: 1, firstname: "cassidy" };
const person2 = { ID: 2, firstname: "jacob" };
// linking maps and objects
const extraInfo = new Map();
// setting objects as map keys and values
extraInfo.set(person1, {age: 8, gender: "female"});
extraInfo.set(person2, {age: 7, gender: "male"});
console.log(person1.ID);
// printing pairs from inside extraInfo
console.log(extraInfo);
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);