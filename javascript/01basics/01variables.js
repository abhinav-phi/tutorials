const accountId = 144553
let accountEmail = "abhinav@google.com"
var accountPassword = "1234"
accountCity = "Delhi"
let accountState;

// accountId = 2 //not allowed

/* 
prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = "abhinavyadavji@google.com"
accountPassword = "5678"
accountCity = "Patna"

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity, accountState])
