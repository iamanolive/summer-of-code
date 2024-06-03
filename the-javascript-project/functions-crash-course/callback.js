function foo(bar) {
    if (isNight) {
        bar(); // callback
    } else if (drinksOverOnline) {
        bar(); // callback
    }
}; foo(function() {
    // anonymous function
    console.log("bar");
})


function named() {
    console.log("bar");
}; foo(named);