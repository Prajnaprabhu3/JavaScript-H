
// Fill and Filter in Array in javascript 
let testArray = [2, 4, 6, 3, 1, 5, 9, 8];

// Fill 
console.log(testArray.fill(0));
console.log(testArray.fill("h"));
console.log(testArray.fill("h", 0));

// The first element is the thing that replaces the array elements and the 2 element is the position from where it should replace 
console.log(testArray.fill("h", 2));


// 1st element that replaces array elements , 2nd element start range which in inclusive and 3rd element if the end range which is exclusive 
console.log(testArray.fill("h", 2, 5));


console.log(testArray.fill("empty"));



const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

// If you want the same array but with some changes, like say deleting an element 
const result = myNumber.filter((num) => num != 55);
const result = myNumber.filter((num) => num < 55);

console.log(result);




