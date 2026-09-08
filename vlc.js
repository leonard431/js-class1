// var, let and const
// var is a global variable
// var can be redeclared
// let is a block scoped variable 
// let cannot be redeclared and can be reassigned value
// const is a block scoped variable
// const means constant
// const cannot be redeclared and cannot be reassigned value

let name = "Stephen"
// This will throw an error because 'name' is already declared as a const
function check(){
 
console.log(name)

 const age = 20;
    console.log(age)
}

check()