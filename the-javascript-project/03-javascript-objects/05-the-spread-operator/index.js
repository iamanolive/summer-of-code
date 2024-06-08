// the spread operator and arrays
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];
const newArray = [...array1, ...array2, 8, 9, 10];
console.log(newArray);
// the spread operator and strings
const anotherArray = [..."abc"];
console.log(anotherArray);
// the spread operator does not work with numbers
const moreArrays = [..."123456789"];
console.log(moreArrays);

// the spread operator and objects
const obj1 = {
    // unique keys
    key1: "value1",
    key2: "value2",
    key1: "value59"
}; console.log(obj1);

const obj2 = {
    key1: "value unique",
    key3: "value3",
    key4: "value4"
}; console.log(obj2);

const newObj = {...obj1, ...obj2};
console.log(newObj);
const newObj2 = {...obj2, ...obj1};
console.log(newObj2);

const anotherObj = {...obj1, ...obj2, key69: "value69"};
console.log(anotherObj);

// spreading data types other than objects
const newObject = {..."abc"};
console.log(newObject);
const newObject2 = {...["item1", "item2"]};
console.log(newObject2);

// alphabets at particular positions
const alphabets = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(alphabets);
console.log(alphabets[7]);