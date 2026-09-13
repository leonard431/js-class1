// Assignment
// 1. Create a function that takes in two numbers and returns the sum of the two numbers

//ANSWER
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(10, 20));

// 2. Create a function that takes in a string and returns the string in uppercase

//ANSWER
function toUpperCase(text) {
  return text.toUpperCase();  
}
console.log(toUpperCase("manchester united"));

// 3. Create a function that takes in an array of numbers and returns the average of the numbers

//ANSWER
function getAverage(numbers) {
  let sum = 0 
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log(getAverage([15, 30, 45, 60, 75]));
