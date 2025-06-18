// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
/*
###in sab me month ki counting teri 0 se start hoti h
0 to 11 -> jan to dec

*/


let myCreatedDate = new Date("01-14-2023")
// isme tera month ki counting 1 se count hoti h

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
