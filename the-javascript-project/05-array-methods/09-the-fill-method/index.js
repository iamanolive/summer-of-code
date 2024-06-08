const myArray = new Array(10).fill(-1);
console.log(myArray);

const anotherArray = new Array(10).fill(0);
console.log(anotherArray);

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
// value to fill with, start index, end index + 1
myArray2.fill(0, 2, 5); console.log(myArray2);