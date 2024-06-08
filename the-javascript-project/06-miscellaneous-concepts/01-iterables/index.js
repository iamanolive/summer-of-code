// iterables (for-of loop)
const firstname = "cassidy";
for (let character of firstname)
    console.log(character);
const items = ["item1", "item2", "item3"];
for (let item of items)
    console.log(item);
// objects are not iterable

// array-like objects (length, index)
const lastname = "blake";
console.log(lastname.length);
console.log(lastname[1]);