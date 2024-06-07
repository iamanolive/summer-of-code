let firstName = "     cassidy     ";
console.log(firstName);
console.log(firstName.length);
// the trim() method
firstName.trim(); // immutable
console.log(firstName.length);
firstName = firstName.trim();
console.log(firstName.length);
// the toUpperCase() method
console.log(firstName.toUpperCase());
firstName = firstName.toUpperCase();
console.log(firstName);
// the toLowerCase() method
console.log(firstName.toLowerCase());
console.log(firstName);
firstName = firstName.toLowerCase();
console.log(firstName);
// the slice() method
let newString = firstName.slice(0, 4); // cass
console.log(newString);