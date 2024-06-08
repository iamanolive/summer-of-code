// global scope
const myVar = "value0";
function myApp() {
    // lexical env of myFunc = inside myApp
    const myVar = "value1";

    function myFunc() {
        const myFunc2 = () => {
            const myVar = "value59";
            console.log("inside myFunc:", myVar);
        }; myFunc2();        
    };
    
    const myFunc2 = function () {    };
    const myFunc3 = () => {    };

    console.log(myVar);
    myFunc();
}; 

myApp();