// Light intro to THIS in javascript
// console.log(this);
// outputs empty parenthesis which indicates emty scope

let game = "basketball";

function sayName() {
    let name = "Prajna";
    console.log(this);
}

sayName();

