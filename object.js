const person = {
    name: "Bill gates",
    age: 20, 
    height: 5.9,
    address:{
        street: "ikeja",
        state: "lagos",
        country: "Nigeria"
    },
hobbies: ["reading", "coding", "football"],
}

const human = {
    eye: 2,
    hand: {
        finger:{
            thumb: 1,
            index: 1,
            middle: 1,
            ring: 1,
            pinky: 1
        },
        palm: {
            index: 1,
            lines: 3
        },
        longPart: "arm"
    }, 

}
// console.log(JSON.stringify(person))

// console.log(JSON.stringify(person))
// JSON.parse() - convert a JSON string into a JavaScript object
// JSON.stringify() - convert a JavaScript object into a JSON string

// console.log(`Hello, ${person.name}, you age is ${person.age}, my address is ${person.address.street}, ${person.address.state}`)

// destructure
// const {name, age, address:{street, state, country}} = person

// console.log(`Hello, ${name}, you age is ${age}, my address is ${street}, ${state}, ${country}`)

// const {hobbies} = person

// console.log(hobbies[2])

// Assignment 1
// assignment create a an object to contain a student profile with the follwowing properties name, age, address, hobbies, result, dateOfBirth, state of origin, country, and any other information. the use destructuring method to log the student profile in a sentence.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
