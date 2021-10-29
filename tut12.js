// Switch for role based access in JavaScript

// Create an application with following roles:
// admin - get full access
// subadmin - gets access to create / delete courses
// testprep - gets access to create / delete tests
// user- gets access to consume content

let user = "absp";

switch (user) {
    case "admin":
        console.log("You get full acess");
        break;
    case "subadmin":
        console.group("gets access to create / delete courses");
        break;
    case "testprep":
        console.log(" gets access to create / delete tests");
        break;
    case "user":
        console.log(" gets access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}


// break statement is  not necessary for default case 