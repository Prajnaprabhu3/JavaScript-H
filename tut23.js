// Slice and splice in Javascript

// Slicing 
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1, 3));

// This is like from 1 to end 
console.log(users.slice(1));



// Splicing 
// STarting from position 1 to 2 delete the elements and replace it with "Hi";
users.splice(1, 2, "Hi");
console.log(users);

users.splice(1, 3, "Hi");
console.log(users);

users.splice(1, 3, "Hi", "Bye");
console.log(users);
