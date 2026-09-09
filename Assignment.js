// Assignment 1
// create a login text that will concatinate users details (name, age, address, state, country) using both the plus method and the obhject literals
// what are the case types - camelCase

// USING THE PLUS METHOD 
const name = "Stephen";
const age = 18;
const address = "Ikeja";
const state = "Lagos";
const country = "Nigeria";

console.log("Hello Good afternoon, your name is " + name + " your age is " + age + " your address is " + address + " your state is  " + state + " your country is " + country)

// USING THE OBJECT LITERALS METHOD
console.log(`Hello this is your name ${name}, your age is ${age}, your address is ${address}, your state is ${state}, your country is ${country}`)


//CASE TYPES 
//1. camelCase
//2. Pascalcase
//3. snake_case
//4. kebab-case
//5. UPPER_SNAKE_CASE
//6. UPPERCASE
//7. lowercase


// Assignment 2 
// fill an array with 20 value and log the item in index 10 and index 19

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(values[10]);
console.log(values[19]);

// create an array, do a pop and push 3 other items in the location of the poped item

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"];

// Remove the last item
console.log("before pop", fruits)
const poppedItem = fruits.pop();
console.log("after pop", friuts)

// Add 3 new items at the position where the popped item was
console.log(fruits)
const push = fruits.push("Pineapple", "Watermelon", "Strawberry");
console.log(fruits)

