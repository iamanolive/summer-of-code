const numbers = [2, 4, 6, 8, 10];
// check if all elements are even
const isEvenArray = numbers.every((number) => {
    return number % 2 == 0
}); console.log(isEvenArray);

const userCart = [
    {productID: 1, productName: "mobile", productPrice: 12000},
    {productID: 2, productName: "laptop", productPrice: 22000},
    {productID: 3, productName: "TV", productPrice: 15000}
]; const lessThan30000 = userCart.every((product) => {
    return product.productPrice < 30000;
}); console.log(lessThan30000);