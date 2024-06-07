"use strict";
// initializing a variable
var firstName = "cassidy";
var lastName = "blake";
// printing stored value
console.log(firstName);
// changing variable values
firstName = "jacob";
console.log(firstName);

// variable names cannot start with a number
var value1 = 2;
console.log(value1 + 10);
console.log(value1 - 10);
console.log(value1 / 2);
console.log(value1 * value1);
console.log(value1 ** 0.5);

// underscores and dollar signs are allowed
var first_name = "john";
console.log(first_name);
var _firstname = "alice";
console.log(_firstname);
var first$name = "lara";
console.log(first$name);
var $firstname = "findley";
console.log($firstname);

// spaces within variable names are not allowed
var bookTitle = "city of ghosts"; // camel case
console.log(bookTitle);
var book_title = "city of ghosts"; // snake case
console.log(book_title);