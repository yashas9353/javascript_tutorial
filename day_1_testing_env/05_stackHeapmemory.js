

// stack (primitive), heap (Non primitive)

let firstname = "Yashas";

// copy is given not the reference
let anotherName = firstname;

// if we change also firstname value will not change
anotherName = anotherName+"Raj";

console.log(firstname);
console.log(anotherName);

let userOne = {
    email:"yashas@gmail.com",
    age:22
}

// same reference is given so if we chnage in userTwo it will 
// effect userOne also
let userTwo = userOne

userTwo.age = 21;

console.log(userOne);
console.log(userTwo);



