// Basics f function in javaScript

function sayHello() {
    console.log("Hello there, Prajna");
}

sayHello();


// If we ndo not want to hard code values in a function
function sayHello2(name) {
    console.log("Hello there", name);
}


sayHello2("Namaste");

// There's a difference between console.log and return statemetns 
function namstey() {
    return "hello in India";
}

console.log(namstey());