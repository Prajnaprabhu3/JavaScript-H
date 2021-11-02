// Time Events
// SetTimeout(function, millisecond)
// {

// }



// setInterval(() => {

// }, interval);

// All works within the query selector 
// var number = document.querySelector(".counter")
// var number = document.querySelector("#container")



var counter = document.querySelector(".counter");
var Viewers = document.querySelector(".Viewers");



let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 1)


setTimeout(() => {
    Viewers.innerText = "Views on github!"
}, 3000)