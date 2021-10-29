// Objects in javascript
let user = {
    firstName: "Prajna",
    lastName: "Prabhu",
    role: "Admin",
    loginCount: 32,
    facebookSigned: true
};

// Accessing objects 
console.log(user.firstName);
console.log(user.lastName);
console.log(user.loginCount);

// otherway 
console.log(user["firstName"]);


// Chnaging the value of the object elements 
console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);


// Dumping out the entire object in a table 
console.table(user);


