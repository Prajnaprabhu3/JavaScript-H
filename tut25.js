// Methods in javascript
let user = {
    firstName: "Prajna",
    lastName: "Prabhu",
    role: "Admin",
    loginCount: 32,
    facebookSigned: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    }
};

let courseList = true;
console.log(user.firstName);

console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular JS course");
console.log(user.getCourseCount());
