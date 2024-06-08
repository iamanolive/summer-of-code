const numbers = [3, 5, 8, 10];
const evenPresent = numbers.some(number => {
    return number % 2 == 0;
}); console.log(evenPresent);

const userCart = [
    {productID: 1, productName: "mobile", productPrice: 12000},
    {productID: 2, productName: "laptop", productPrice: 22000},
    {productID: 3, productName: "TV", productPrice: 35000},
    {productID: 4, productName: "macbook", productPrice: 250000}
]; const over1lakh = userCart.some(item => {
    return item.productPrice > 100000;
}); console.log(over1lakh);