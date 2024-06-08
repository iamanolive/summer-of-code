const numbersArray = [1, 2, 3];
const numbersSet = new Set([1, 2, 3, 2, 1]);
console.log(numbersArray);
console.log(numbersSet); // no duplicates

// no index-based access. order changes.
console.log(numbersSet[2]);
const letters = new Set("abc");
console.log(letters); // iterable

// adding values to empty set
const moreNumbers = new Set(); // empty set
moreNumbers.add(1);
moreNumbers.add(2);
console.log(moreNumbers);
const items = ["item1", "item2", "item3"];
moreNumbers.add(items); // mixed data types
console.log(moreNumbers);

// two arrays containing the same elements are not considered duplicates
const set1 = new Set(); 
// stored at different addresses
set1.add(["item1", "item2"]);
set1.add(["item1", "item2"]);
console.log(set1);

// arrays at same address are duplicates
set1.add(items);
console.log(set1);
set1.add(items);
console.log(set1);

// the has method
console.log(numbersSet.has(1));
if (numbersSet.has(2))
    console.log("2 present in set");
else console.log("2 not present in set");

// looping through a set using for-of
const numbers = new Set([1, 2, 3, 4, 5, 6]);
for (let number of numbers)
    console.log(number);

// getting unique elements from array
const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
// only iterable items can be passsed into a set
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
console.log(uniqueElements.length); // undefined

// finding the length of a set
let lengthOfSet = 0;
for (let element of uniqueElements)
    lengthOfSet += 1;
console.log(lengthOfSet);