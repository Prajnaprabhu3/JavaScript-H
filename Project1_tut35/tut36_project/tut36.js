const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");




console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;

}


// console.log(getBGColor(orange));




// Project3_tut37.js 
var orangeElementColor = getBGColor(orange);


orange.addEventListener("mouseenter", () => {
    center.style.background = orangeElementColor;
})



var redElementColor = getBGColor(red);

red.addEventListener("mouseenter", () => {
    center.style.background = redElementColor;
})


var cyanElementColor = getBGColor(cyan);
cyan.addEventListener("mouseenter", () => {
    center.style.background = cyanElementColor;
})


var violetElementColor = getBGColor(violet);
violet.addEventListener("mouseenter", () => {
    center.style.background = violetElementColor;
})


var pinkElementColor = getBGColor(pink);
pink.addEventListener("mouseenter", () => {
    center.style.background = pinkElementColor;
})
