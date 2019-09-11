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

export default makeDonutHTMLComponent