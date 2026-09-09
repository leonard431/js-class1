const x = [
    {
        id: 1, 
        name: "Stephen",
        age: 20,
    },
    {
        id: 2,
        name: "John",
        age: 30,
    },
    {
        id: 3,
        name: "Doe",
        age: 40,
    }
]
// for
// for(assignment/declaration, condition, increment){
//     do something
// }

// for(let i = 0; i < x.length; i++){
//     console.log(x[i].age)
// }
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// while
// assignment/declaration
// while(condition){
//     do something
//     increment
// }
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++
// }

// let i = 0;
// while(i < x.length){
//     console.log(x[i].name);
//     i++
// }

const todos = [
    {
        id: 1,
        task: "Do laundry",
        completed: true,
    },
    {
        id: 2,
        task: "Clean room",
        completed: false,
    },
    {
        id: 3,
        task: "Buy groceries",
        completed: true,
    }
]

// for(t of todos){
//     console.log(t.task)
// }

for(i of x){
    console.log(i.name)
}



// Assignment
// print in your console the number from 1 to 100 using for loop and while loop