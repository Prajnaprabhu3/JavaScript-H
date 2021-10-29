// Functions in variables| User role in javascript

/*
Define a function that can answer the role of a user.
A user can be on the following roles:
admin -with all access
subadmin -with access to create / delete courses
testprep - with access to create / delete tests
user - consume all content
other - trial user

Input: getUserrole(name, role)
*/

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`
            break;
        case "user":
            return `${name} consume all content`
            break;
        default:
            return `${name} trial user`

    }
}

console.log(getUserRole("hitesh", "testprep"));


// Using variable instead of function name 
var getRole = getUserRole("sammy", "user");

console.log(getRole);



// Other way of writing the prototype of function 

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`
            break;
        case "user":
            return `${name} consume all content`
            break;
        default:
            return `${name} trial user`

    }
}

