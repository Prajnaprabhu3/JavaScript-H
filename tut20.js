// Arrays
let countries = ["India", "USA", "Japan", "Vietnam", "Russia"];

// Other way of declaring and initialising an array 
let states = new Array("Karnaataka", "Rajastan", "Delhi", "Rajastan");

console.log(states);
console.log(countries);
console.log(states[1]);  // to access individual array elements

// Array functions
// To find array length  
console.log(states.length);

// To replace an array element 
states[0] = "Punjab";

// To remove the last element of the array 
states.pop();
console.log(states);

// To remove the first element of the array


// This adds a element to the start of the array and shifts the rest of the element 
states.unshift("New Value");
console.log(states);

// This removes the element in the start of the array and shifts the rest of the element 
states.shift("New Value");
console.log(states);


// To find the index position of an element 
console.log(countries.indexOf("India"));




let user = ["Prajna", "prajnapprabhu3@gmail.com", 2, true];
console.log(user)


// Array is a keyword, we discussed earlier, in declaring and initialising array in different way 
console.log(Array.from("Prajna"));
// This converts the string Prajna to an array with each letter as its elements
// There are many other function that can be performed for this 

