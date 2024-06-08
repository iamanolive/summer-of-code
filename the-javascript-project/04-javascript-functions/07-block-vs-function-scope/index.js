// let and const are block scope

{
    // block 1
    let firstname = "cassidy";
    console.log(firstname);
    const lastname = "blake";
    console.log(lastname);
}

// global scope
// console.log(firstname); // not defined in global scope
// console.log(lastname); // not defined in global scope

{
    // block 2
    let firstname = "jacob";
    console.log(firstname);
    const lastname = "unknown";
    console.log(lastname);
}

const firstname = "lara";
console.log(firstname);



// var is function scope

{
    // file acts as the main function
    var fullname = "alice blake";
    console.log(fullname);
    // vars can be used anywhere in the file
}

console.log(fullname);

{
    console.log(fullname);
    var fullname = "jacob the ghost";
    console.log(fullname);
}

console.log(fullname);



if (true) {
    let anotherFirstname = "lara";
    console.log(anotherFirstname);
    var anotherLastname = "chowdhury";
    console.log(anotherLastname);
}; // console.log(anotherFirstname); // anotherFirstname not defined
console.log(anotherLastname);

function myApp () {
    if (true) {
        let anotherFirstname2 = "lara";
        console.log(anotherFirstname2);
        var anotherLastname2 = "chowdhury";
        console.log(anotherLastname2);
    }; // console.log(anotherFirstname2); // anotherFirstname2 not defined
    console.log(anotherLastname2);
}

myApp();
// console.log(anotherLastname2); // cannot be used outside function where defined