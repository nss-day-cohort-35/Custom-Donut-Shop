/*
Responsible for displaying data from database within input fields.
*/

import API from "./DataManager.js"

const editForm = (donutId) => {
    API.getSingle(donutId)
    .then(response => {
        console.log(response);
    })
}

export default editForm