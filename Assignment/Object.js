// Assignment 1
// assignment create a an object to contain a student profile with the follwowing properties name, age, address, hobbies, result, dateOfBirth, state of origin, country, and any other information. the use destructuring method to log the student profile in a sentence.

const student = {
  name: "Stephen",
  age: 18,
  address: "Ikeja",
  hobbies: ["Football", "Coding", "Music"],
  result: "Excellent",
  dateofBirth: "16th February, 2008",
  stateofOrigin: "Anambra",
  country: "Nigeria"
};

console.log(`Hello, My name is ${name}. I am ${age} years old and I live in ${address}. My hobbies are ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}. My result is ${result}. I was born on ${dateOfBirth}, I am from ${stateOfOrigin} State, ${country}`)


// destructure
const { name, age, address, hobbies, result, dateOfBirth, stateOfOrigin, country } = student;

console.log(`Hello, My name is ${name}, I am ${age} years old and I live in ${address}. My hobbies are ${hobby1}, ${hobby2}, ${hobby3}. My result is ${result}. I was born on ${dateOfBirth}, I am from ${stateOfOrigin} State, ${country}`)