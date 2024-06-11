import {firstname as fname} from "./utils/fname.js";
import {age} from "./utils/age.js";
import something, {Person, AnotherPerson} from "./utils/person.js";


console.log(fname, age);

const person = new Person("cassidy", "blake", 1039);
person.info(); console.log(person);

console.log(something);