// compilation phase 
    // early error checking
    // determining appropriate scope for variables

    console.log(this);
    console.log(window);
    
    console.log(firstname);
    var firstname = "cassidy";
    console.log(firstname);

// code execution phase
    // global execution context
        // creation phase
        // code execution phase

        console.log(this);
        console.log(window);
        // lexically scoped language
        console.log(myFunction);
        console.log(myFunction());
        myFunction();
        console.log(fullname);

        console.log(anotherFunction);

        function myFunction() {
            console.log("this is my function");
        }

        var anotherFunction = function () {
            console.log("this is my function")
        }

        var lastname = "blake";
        var fullname = firstname + " " + lastname;
        console.log(fullname);