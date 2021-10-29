// Scope changing in javascript
let name = "Prajna";
console.log("Line no 3 " + name);

sayName();
function sayName() {
    let name = "My H";
    console.log("Line number 9", name);

    sayNameTwo();

    function sayNameTwo() {
        // let name = "Mr HS";
        console.log("Line number 14 " + name);
    }
    // Always grabs the name above it inside the function 
}