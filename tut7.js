// Operators: + , _ , %, /

// And Math.round function 

let num1 = 7;
let num2 = 6;


console.log(num1 * num2);


let sellingPrice = 199;
let listingPrice = 799;

let discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;


console.log("Discount percentage is :" + discountPercent);
// when we console.log it prints the entire thing, completely with all decimal places


let displayDiscountPercentage;
displayDiscountPercentage = Math.round(discountPercent);
// To print just the round off digits we use Math.round function 


console.log(displayDiscountPercentage); //output 75


