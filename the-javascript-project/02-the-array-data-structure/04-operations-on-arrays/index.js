// cloning an array
let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];
// the two arrays are not equal
console.log(array1 === array2);
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
// changing one array does not change the other
console.log("array1", array1);
console.log("array2", array2);
// cloning using the slice() method
array1 = ["item1", "item2"];
array2 = array1.slice(0);
console.log("array1", array1);
console.log("array2", array2);
// cloning using the concat() method
array2 = [].concat(array1);
console.log(array1 === array2);
console.log("array1", array1);
console.log("array2", array2);
// cloning using the spread operator
array2 = [...array1];
console.log("array1", array1);
console.log("array2", array2);


// cloning and inserting using slice
let array3 = array1.slice(0).concat(["item3", "item4"]);
console.log("array3", array3);
// cloning and inserting using concat
array3 = [].concat(array1, ["item3", "item4"]);
console.log("array3", array3);
// cloning and inserting using spread
array3 = [...array1, "item3", "item4"];
console.log("array3", array3);
let anotherArray = ["item3", "item4"];
array3 = [...array1, ...anotherArray];
console.log("array3", array3);