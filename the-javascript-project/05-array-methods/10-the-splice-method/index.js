const myArray = ["item1", "item2", "item3"];
// delete element using splice
const deletedItem = myArray.splice(1, 1); // start index, delete count
console.log(myArray); console.log(deletedItem);
// insert element using splice
myArray.splice(1, 0, "inserted item"); // start index, delete count, insert item
console.log(myArray);
// replace element using splice
const deletedArray = myArray.splice(1, 2, "insert new 1", "insert new 2");
console.log(deletedArray); console.log(myArray);