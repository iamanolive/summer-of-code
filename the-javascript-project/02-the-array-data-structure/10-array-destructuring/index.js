const myArray = ["value1", "value2"];
let [myvar1, myvar2] = myArray;
console.log(`myvar1 = ${myvar1}`);
console.log(`myvar2 = ${myvar2}`);
// behaves as a regular variable
myvar1 = "value changed";
console.log(myvar1);


const myArray2 = ["value1", "value2", "value3"];
let [var1, var2, var3] = myArray2;
console.log(var1, var2);


const myArray3 = ["value1"];
let [anotherVar1, anotherVar2, anotherVar3] = myArray3;
console.log(anotherVar1);
console.log(anotherVar2);
console.log(anotherVar3);


const myArray4 = ["value1", "value2", "value3"];
let [morevar1, , morevar2] = myArray4;
console.log(morevar1, morevar2); 


const myArray5 = ["value1", "value2", "value3", "value4"];
let [variable1, variable2, ...anotherArray] = myArray5;
console.log(anotherArray);