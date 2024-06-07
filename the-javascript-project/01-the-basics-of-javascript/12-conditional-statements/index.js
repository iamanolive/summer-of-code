// conditional statements
let age = 15;
if (age >= 18) console.log("user can play ddlc");
else console.log("user can play mario");

let num = 14;
if (num % 2 == 0) console.log("even");
else console.log("odd");

// falsey values
let firstName = undefined; // false, null, 0, ""
if (firstName) console.log(firstName);
else console.log("firstname is kinda empty");

// truthy values
firstName = 1; // -1, "abc"
if (firstName) console.log(firstName);
else console.log("firstname is kinda empty");