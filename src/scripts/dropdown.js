import API from "./DataManager.js"

const dropdown = {
    makeTypesDropDown: () => {
        API.getTypes().then(allTypes => {
            const typeDropdown = document.querySelector("#type-dropdown")
            allTypes.forEach(type => {
                typeDropdown.innerHTML += `<option id=${type.id}>${type.name}</option>`
            })
        })
    },
    makeFlavorsDropDown: () => {
        API.getFlavors().then(allFlavors => {
            const flavorDropdown = document.querySelector("#flavor-dropdown")
            allFlavors.forEach(flavor => {
                flavorDropdown.innerHTML += `<option id=${flavor.id}>${flavor.name}</option>`
            })
        })
    },
    makeGlazesDropDown: () => {
        API.getGlazes().then(allGlazes => {
            const glazeDropdown = document.querySelector("#glaze-dropdown")
            allGlazes.forEach(glaze => {
                glazeDropdown.innerHTML += `<option id=${glaze.id}>${glaze.name}</option>`
            })
        })
    },
    makeToppingsDropDown: () => {
        API.getToppings().then(allToppings => {
            const toppingDropdown = document.querySelector("#topping-dropdown")
            allToppings.forEach(topping => {
                toppingDropdown.innerHTML += `<option id=${topping.id}>${topping.name}</option>`
            })
        })
    }
}

export default dropdown