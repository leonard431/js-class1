 //Assignment
// use the tenary operator to interprete the below
// if(color1 === "red" && color2 === "blue"){
//     console.log("color1 is equal to red and color 2 is equals to blue")
// }  else if(color1 === "red" && color2 !== "blue"){
//     console.log("color1 is equal to red but colors2 is not blue")
// } else if (color1 ==="yellow" || color2 === "blue"){
//     console.log ("one is correct")
// }else {
//     console.log("color1 is not equal to red and color2 is not equal to blue")
// }

// ANSWER

let color1 = "red";
let color2 = "blue";

 console.log(color1 === "red" && color2 === "blue" ? console.log("color1 is equal to red and color 2 is equals to blue") : color1 === "red" && color2 !== "blue" ? "color1 is equal to red but color2 is not blue" : color1 === "yellow" || color2 === "blue" ?  "one is correct" : "color1 is not equal to red and color2 is not equal to blue"
);