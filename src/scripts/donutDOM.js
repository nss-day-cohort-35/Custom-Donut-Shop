import donutHMTL from "./donutHTML.js"

<<<<<<< HEAD
// Function that adds donut HTML components to the DOM
const addDonutToDOM = (donutObj) => {
    document.querySelectorAll(".donut-container")[1].innerHTML += makeDonutHTMLComponent(donutObj)
=======
/*
    Responsible for putting our donuts on the DOM
*/

const donutDOMBuilder = (donutObj) => {
    document.querySelector(".donut-container").innerHTML += donutHMTL(donutObj)
>>>>>>> master
}

export default donutDOMBuilder