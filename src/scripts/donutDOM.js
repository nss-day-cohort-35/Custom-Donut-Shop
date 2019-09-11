import makeDonutHTMLComponent from "./donutHTML.js"

// Function that adds donut HTML components to the DOM
const addDonutToDOM = (donutObj) => {
    document.querySelector(".donut-container").innerHTML += makeDonutHTMLComponent(donutObj)
}

export default addDonutToDOM