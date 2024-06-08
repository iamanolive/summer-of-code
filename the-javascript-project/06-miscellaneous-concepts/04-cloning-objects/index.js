const obj = {
    key1: "value1",
    key2: "value2"
};

// cloning objects using the spread operator
const obj2 = {...obj};
console.log(obj2);

// cloning objects using Object.assign
const obj3 = Object.assign({}, obj);
console.log(obj3);