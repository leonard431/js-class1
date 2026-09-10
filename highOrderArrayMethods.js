// High order array method

const footBallTeams = [
    {
        name: "Arsenal",
        numberOfTrophies: 13,
        country: "England",
    },
    {
        name: "Chelsea",
        numberOfTrophies: 20,
        country: "England",
    },
    {
        name: "Manchester United",
        numberOfTrophies: 50,
        country: "England",
    },
    {
        name: "Real Madrid",
        numberOfTrophies: 100,
        country: "Spain",
    },
    {
        name: "Barcelona",
        numberOfTrophies: 80,
        country: "Spain",
    },
    {
        name: "Bayern Munich",
        numberOfTrophies: 70,
        country: "Germany",
    }

]
// console.log(footBallTeams);
// // filter
// const englishTeams = footBallTeams.filter(team => team.name === "Arsenal");
// console.log(englishTeams);

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

// map
const teams = footBallTeams.map(t => t.country)
console.log(teams);

//Assignment
// for each