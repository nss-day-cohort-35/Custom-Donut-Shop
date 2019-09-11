// Function that builds the donut
const createNewDonut = (name, type, flavor, glaze, topping) => {
    const newDonut = {
        name: name,
        type: type.name,
        flavor: flavor.name,
        glaze: glaze.name,
        topping: topping.name
    }
    return newDonut
}

export default createNewDonut