import donutHMTL from "./donutHTML.js"

/*
    Responsible for putting our donuts on the DOM
*/

const donutDOMBuilder = (donutObj) => {
    document.querySelector(".donut-container").innerHTML += donutHMTL(donutObj)
}

export default donutDOMBuilder