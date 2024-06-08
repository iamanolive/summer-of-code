const user = {
    firstname: "cassidy",
    address: {houseNumber: "204"}
}; 

console.log(user.firstname);
// undefined if address is absent
console.log(user.address);
// error if address is absent
console.log(user.address.houseNumber);

// checks if value before ? is undefined or null
console.log(user?.firstname);
console.log(user?.address);
console.log(user?.address?.houseNumber);



const user2 = {
    firstname: "jacob"
}; 
console.log(user2?.firstname);
console.log(user2?.address);
console.log(user2?.address?.houseNumber);