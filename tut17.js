// Code hoisting in javascript
/*
let num = 2;

function sayMe() {
    console.log("Say me");
}


sayMe();
 * /

/*
Function declaration are scanned and made availabel
Variable declaration are scanned and made undefined

*/

// Consider the below 2 examples 

tipper("5");

function tipper(a) {
    let bill = parseInt(a); //converts a value to int
    console.log(bill + 5);
}

// The above code will run without any Error as Function declaration are scanned and made available



var bigTipper = function (a) {
    let bill = parseInt(a);
    console.log(bill + 15);
};

bigTipper("200");

// Had I placed bigDipper("200") above the declaration of function, it would have shown a erroe. As Variable declaration are scanned and made undefined


console.log(name);
var name = "Prajna";
// The above code outputs undefined.As Variable declaration are scanned and made undefined


function sayName() {
    let name = "MR. H";
    console.log(name); //output would be MR. H
}

sayName();

console.group(name);   // output would be Prajna

// The scope of let name="MR. H" is only within the function
