const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}); console.log(sum);

const userCart = [
    {productID: 1, productName: "mobile", productPrice: 12000},
    {productID: 2, productName: "laptop", productPrice: 22000},
    {productID: 3, productName: "TV", productPrice: 15000}
]; const totalPrice = userCart.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.productPrice;
}, 0); // initial value of accumulator
console.log(totalPrice);