console.log(this);  //gives an empty object

var user = {
    firstName: "Hitesh",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 7", this);
        function sayHello() {
            console.log("Hello");
            console.log("Line 10", this);
        }
        sayHello(); // outputs windows object
    }
}

user.getCourseCount(); //outputs all elements of the object

// For all regular function call, this points to window object 
