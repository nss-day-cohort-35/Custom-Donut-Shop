const types = [
    {
        id: 1,
        name: "yeast"
    },
    {
        id: 2,
        name: "cake"
    },
    {
        id: 3,
        name: "cronut"
    }
]
const flavors = [
    {
        id: 1,
        name: "chocolate"
    },
    {
        id: 2,
        name: "plain"
    },
    {
        id: 3,
        name: "blueberry"
    }
]
const glazes = [
    {
        id: 1,
        name: "chocolate"
    },
    {
        id: 2,
        name: "cookies and cream"
    },
    {
        id: 3,
        name: "sugar"
    },
    {
        id: 4,
        name: "strawberry"
    },
    {
        id: 5,
        name: "maple"
    }
]
const toppings = [
    {
        id: 1,
        name: "rainbow sprinkles"
    },
    {
        id: 2,
        name: "chocolate sprinkles"
    },
    {
        id: 3,
        name: "brownie bits"
    },
    {
        id: 4,
        name: "oreo crumbles"
    }
]

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

// Function that defines what a donut should look like in HTML
const makeDonutHTMLComponent = (donut) => {
    return `
    <div class="donut">
        <h3>${donut.name}</h3>
        <h4>Type:</h4>
        <p>${donut.type}</p>
        <h4>Flavor:</h4>
        <p>${donut.flavor}</p>
        <h4>Glaze:</h4>
        <p>${donut.glaze}</p>
        <h4>Toppings:</h4>
        <p>${donut.topping}</p>
    </div>
    `
}

// Function that adds donut HTML components to the DOM
const addDonutToDOM = (donutObj) => {
    document.querySelector(".donut-container").innerHTML += makeDonutHTMLComponent(donutObj)
}

addDonutToDOM(createNewDonut("This da best donut", types[2], flavors[0], glazes[4], toppings[1]))
addDonutToDOM(createNewDonut("Only Okay", types[1], flavors[0], glazes[0], toppings[1]))
addDonutToDOM(createNewDonut("DELICIOUS", types[0], flavors[0], glazes[0], toppings[0]))
addDonutToDOM(createNewDonut("DA 💣", types[2], flavors[2], glazes[1], toppings[0]))