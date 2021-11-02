// For in and for of loop in javascript
const names = [
    "Youtube",
    "facebook",
    "Instagram",
    "Netflix",
    "Amamzon",

]

// for of loops 
for (const n of names) {
    console.log(n);
}


const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "facebook",
    wa: "Whatsapp",
};

// for in loops 
for (const n in symbols) {
    console.log(n);
    console.log(symbols[n]);
}


for (const n in symbols) {
    console.log(`Key is: ${n} and values is: ${symbols[n]}`);

}
