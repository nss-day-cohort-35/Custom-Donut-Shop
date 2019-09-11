import Dropdown from "./dropdown.js"
import createNewDonut from "./donut.js"

Dropdown.makeTypesDropDown();
Dropdown.makeFlavorsDropDown();
Dropdown.makeGlazesDropDown();
Dropdown.makeToppingsDropDown();

addDonutToDOM(createNewDonut("This da best donut", donutInfo.types[2], donutInfo.flavors[0], donutInfo.glazes[4], donutInfo.toppings[1]))

addDonutToDOM(createNewDonut("Only Okay", donutInfo.types[1], donutInfo.flavors[0], donutInfo.glazes[0], donutInfo.toppings[1]))

addDonutToDOM(createNewDonut("DELICIOUS", donutInfo.types[0], donutInfo.flavors[0], donutInfo.glazes[0], donutInfo.toppings[0]))

addDonutToDOM(createNewDonut("DA 💣", donutInfo.types[2], donutInfo.flavors[2], donutInfo.glazes[1], donutInfo.toppings[0]))
