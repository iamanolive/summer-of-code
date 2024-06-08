const numbers = [5, 9, 1200, 400, 3000, 39];
// ascending order
numbers.sort((a, b) => a - b);
console.log(numbers);
// descending order
numbers.sort((a, b) => b - a);
console.log(numbers);
// sorting a string array
const usernames = ["cassidy", "jacob", "alice", "lara", "findley", "john"];
usernames.sort(); console.log(usernames);

const products = [
    { productID: 1, productName: "p1", productPrice: 300 },
    { productID: 2, productName: "p2", productPrice: 3000 },
    { productID: 3, productName: "p3", productPrice: 200 },
    { productID: 4, productName: "p4", productPrice: 8000 },
    { productID: 5, productName: "p5", productPrice: 500 }
]; 
// sorting from highest price to lowest price
const highToLow = products.slice(0).sort((product1, product2) => {
    return product2.productPrice - product1.productPrice;
}); console.log(highToLow);
// sorting from lowest price to highest price
const lowToHigh = products.slice(0).sort((product1, product2) => {
    return product1.productPrice - product2.productPrice;
}); console.log(lowToHigh);