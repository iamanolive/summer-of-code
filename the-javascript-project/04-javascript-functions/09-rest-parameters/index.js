function myFunc(a, b, ...c) {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
}; myFunc(3, 4, 5, 6, 7, 8, 9);


function addNumbers(...numbers) {
    console.log(numbers);
    console.log(typeof numbers);
    console.log(Array.isArray(numbers));
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum = sum + numbers[i];
    return sum;
}; console.log(addNumbers(1, 2, 3, 4, 5));
console.log(addNumbers(1));