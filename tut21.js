// Callback and arrow function introduction in array s


function isEven(element) {
    if (element % 2 == 0) {
        return true;
    }
    return false;

    // return element %2===0;  
}


// Arrow function 
let isEven = (element) => {
    return element % 2 == 0;
};

console.log(isEven(2));



// call-back functions 

let result = [2, 4, 6, 8].every(isEven);
console.log(result);

let result = [2, 3, 6, 8].every(isEven);
console.log(result);


// Writing this in a shorter format 
let result = [2, 3, 6, 8].every((e) => e % 2 === 0);
console.log(result);

let result = [2, 3, 6, 8].every((e) => { e % 2 === 0 });
console.log(result);