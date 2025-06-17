console.log(2>1); // ans would be either true or false 
console.log(2<1);
console.log(2>=1);
console.log(2==1);
console.log(2 != 1);


console.log( "2" > 1); // true
console.log("02" > 1); //true

// javascript automatically converts string to number while doing comparison

console.log( null > 0); // false
console.log( null == 0); // false
console.log( null >= 0); // true

console.log( undefined > 0); // false
console.log( undefined == 0); // false
console.log( undefined >= 0); // flase

// ===

console.log("2" === 2); // triple equalto me conversion nhi hoti
console.log("2" == 2); //double equalto convert kr deta h string ko number, datatype change kr leta h
//  == -> loose equality
// === -> strict equality
