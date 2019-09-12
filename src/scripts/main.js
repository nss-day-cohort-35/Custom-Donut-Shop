import donutInfo from "./donutAPI.js"
import donutDOMBuilder from "./donutDOM.js";

const makeDonut = (name, type, flavor, glaze, topping) => {
    const newDonut = {
        name: name,
        type: type.name,
        flavor: flavor.name,
        glaze: glaze.name,
        topping: topping.name
    }
    return newDonut
}

const myFirstDonut = makeDonut("My First Donut", donutInfo.types[0], donutInfo.flavors[1], donutInfo.glazes[1], donutInfo.toppings[1]);
const mySecondDonut = makeDonut("The BEST Donut", donutInfo.types[1], donutInfo.flavors[1], donutInfo.glazes[2], donutInfo.toppings[0]);

console.log(myFirstDonut);
console.log(mySecondDonut)

donutDOMBuilder(myFirstDonut)
donutDOMBuilder(mySecondDonut)





