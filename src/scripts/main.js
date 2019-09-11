import Dropdown from "./dropdown.js"
import donutInfo from "./donutAPI.js"
import createNewDonut from "./donut.js"
import addDonutToDOM from "./donutDOM.js"
import API from "./DataManager.js";

/*
    Make and populate dropdowns with API info when main.js is seen by browser
*/
Dropdown.makeTypesDropDown();
Dropdown.makeFlavorsDropDown();
Dropdown.makeGlazesDropDown();
Dropdown.makeToppingsDropDown();

// Add event listener to donut-btn
document.querySelector("#donut-btn").addEventListener("click", () => {
    // get values of all dropdowns and store them in variables to use for later
    const name = document.getElementById("name-input").value
    const type = document.getElementById("type-dropdown").value
    const flavor = document.getElementById("flavor-dropdown").value
    const glaze = document.getElementById("glaze-dropdown").value
    const topping = document.getElementById("topping-dropdown").value

    // IT'S LATER! Make our donut!
    const newDonut = createNewDonut(name, type, flavor, glaze, topping)

    // Now send that bad boy to the DB!
    API.createDonut(newDonut).then(() => {
        document.querySelectorAll(".donut-container")[1].innerHTML = "";
        API.getDonuts().then(allDonuts => {
            allDonuts.forEach(donut => {
                addDonutToDOM(donut);
            })
        })
    })
})

/*
    We need all the donuts from our json when the page loads!
*/
API.getDonuts().then(allDonuts => {
    allDonuts.forEach(donut => {
        addDonutToDOM(donut);
    })
})