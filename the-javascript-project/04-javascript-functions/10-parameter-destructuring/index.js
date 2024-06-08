const person = {
    firstName: "cassidy",
    gender: "female",
    age: 11
}

function printDetails(obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
    console.log(obj.lastName);
}; printDetails(person);


function printDetails2({firstName, gender, lastName}) {
    console.log(firstName);
    console.log(gender);
    console.log(lastName);
}; printDetails2(person);