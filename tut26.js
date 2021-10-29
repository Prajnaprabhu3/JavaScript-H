// gor loop basics in javascript
// for (let i = 0; i < array.length; i++) {
//     console.log(i);
// }


const myStates = [
    "Rajastan",
    "Delhi",
    "Assa",
    "Tamil Nadu",
    "Maharastra",
    2002
];


for (let i = 0; i < myStates.length; i++) {
    console.log(i);
    console.log(myStates[i]);
}


// Say I want to print just the string values  

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== 'string') continue;
    console.log(myStates[i]);
}