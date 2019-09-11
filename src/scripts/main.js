import Dropdown from "./dropdown.js"
import createNewDonut from "./donut.js"

Dropdown.makeTypesDropDown();
Dropdown.makeFlavorsDropDown();
Dropdown.makeGlazesDropDown();
Dropdown.makeToppingsDropDown();

addDonutToDOM(createNewDonut("This da best donut", types[2], flavors[0], glazes[4], toppings[1]))
addDonutToDOM(createNewDonut("Only Okay", types[1], flavors[0], glazes[0], toppings[1]))
addDonutToDOM(createNewDonut("DELICIOUS", types[0], flavors[0], glazes[0], toppings[0]))
addDonutToDOM(createNewDonut("DA 💣", types[2], flavors[2], glazes[1], toppings[0]))