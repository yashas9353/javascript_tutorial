
const accountId = 25342;
let accountHolderName = "Yashas";
let accountPassword;

/* Note : Must not use var
because it has a issue with the 
block scope and function scope so always use let only 
*/ 
var accountPhoneNumber = 213123123;

/* Just know it is possible to assign without const or let but never use */
accountState = "Bengaluru";

console.table([accountId,accountHolderName,accountPassword,accountPhoneNumber,accountState])
