$(document).ready(readyNow)

let colors = ['green', 'red', 'blue', 'yellow'];

function readyNow() {
    console.log('jQuery is running');
    makeColorList();
}


function makeColorList() {
    for (let i = 0; i < colors.length; i++) {
        $('#colorTarget').append(`<li>${colors[i]}</li>`)
    };
}


//USING A FOR OF LOOP FOR THE SAME FUNCTION
// function renderColors () {
//     for (let color of colors) {
//         $('#colorTarget').append(`<li>${color}</li>`)
//     }
// }