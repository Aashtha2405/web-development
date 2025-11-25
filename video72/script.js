const { Children } = require("react");

console.log("script.js initializing");
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container")
Children
function getRandomcolor(){
    let val = Math.random();
    let val2 = 124;
    let val3 = 111;
    return `rgb(${val1},${val2},${val3})`
}
// console.log(boxes)
Array.from(boxes).forEach(e=>{
    e.style.backgroundcolor = getRandomcolor();
    // console.log(e)
})