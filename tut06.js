// creating a signUp page 

const uniqueId = "abc123";
// const is a datatype that cannot be reassigned or modified later on

// let is same as var 

let fullName = "Prajna P Prabhu";
let email = "prajna11prabhu@gmail.com";
let password = "123456";
let confirmPassword = "123456";
let courseCount = 0;
let isLoggedInFromGoogle = false;

// If you want to take input from user, we use prompt 
// let fullname = prompt("Enter your name");

// If you want to show an alert MessageChannel, popping out MessageChannel, then we use alert 
// alert("Can input empty box");

// One way of printing a form 
console.log("ID:", uniqueId);
console.log("Full Name:", uniqueId);
console.log("Email id:", email);


// Better way of doing do this 
console.log(`
With Unique ID:${uniqueId}
User is:${fullName}
and his email is: ${email}
and uses the password: ${password} `)



