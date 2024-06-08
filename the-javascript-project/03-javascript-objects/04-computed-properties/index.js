const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
    // computed properties
    [key1]: value1,
    [key2]: value2
}; console.log(obj);

const objDup = {};
objDup[key1] = value1;
objDup[key2] = value2;
console.log(objDup);