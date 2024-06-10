let foo = "foo";
console.log(foo);

function getFullname(firstname, lastname) {
    console.log(arguments); // array-like object
    let myVar = "var inside func";
    console.log(myVar);
    const fullname = firstname + " " + lastname;
    return fullname;
}

const personName = getFullname("cassidy", "blake");
console.log(personName);