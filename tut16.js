// Understanding the context of javascript

/*
sayHello();

function sayHello() {
    console.log("Hello");
}
*/

// ABove you can see that, even if you have called the function before its declared the code works fine 
// This is because of something called as global context of javascript


// == checks just the value and not the datatype 
if (2 == 2) {
    console.log("checks the value");
}


if (2 === "2") {
    console.log("Checks value and data-type");
}

var myName = "Prajna";
if (myName === window.myName) {
    console.log("This is again a true statement");
}

// window is called in the browser but not in the node 



