// ternary operator

// Show user a signout button if he is authenticated 
// other-wise show him option to login/Signup


let authenticated = false;

/*
if (authenticated) {
    console.log("Show signout button");
}

else {
    console.log("Show login option");
}
*/



// better method 
authenticated ? console.log("SignOut Button") : console.log("Login");