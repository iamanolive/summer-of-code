# variables in javascript

* containers for storing data
* hold values and are used in expressions
* declared using the `var`, `let`and `const`keywords, or automatically

## declaring a variable

* many variables can be declared in one statement
* upon declaration, value of variable is `undefined`
* re-declaring a variable declared with the `var` keyword will not cause it to lose it's value
* variables cannot be re-declared with `let` or `const`
* javascript is a dynamically typed language, and they type of the variable is decided at runtime

## initializing a variable
* syntax as `variableName = value`
* initialization and declaration can be done in the same step
* variables can be updated after initialization by changing the value they're supposed to hold

## identifiers

* variables are identified with unique names called identifiers
* contain letters, digits, underscores or dollar signs
* begin with a letter, dollar sign or underscore
* they are case sensitive
* reserved keywords cannot be used

### declaring variables automatically

* not considered good programming practice
```js
num1 = 5;
num2 = 10;
sum = num1 + num2;
```

### declaring variables using `var`

* the `var` keyword should be used only in code written for browsers older than 2015
```js
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
```

### declaring variables using `let`

```js
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
```

### declaring constants using `const`

* constant values that cannot be changed
* must be initialized when they're first declared
* the type of a `const` variables cannot be changed either
```js
const num1 = 5;
const num2 = 10;
const sum = num1 + num2;
```