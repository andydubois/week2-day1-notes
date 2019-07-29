$(document).ready(readyNow)

let colors = [
{
name: 'green',
secret: 'garden'
},
{
name: 'red',
secret: 'rose'
},
{
name: 'blue',
secret: 'sky'
},
{
name: 'yellow',
secret: 'school bus'
}
];

function readyNow() {
    console.log('jQuery is running');
    renderColors();
    $('#colorTarget').on('click', '.colorItem', colorFinder);
}


// function makeColorList() {
//     for (let i = 0; i < colors.length; i++) {
//         $('#colorTarget').append(`<li class ="colorItem">${colors.name[i]}</li>`)
//     };
// }


//USING A FOR OF LOOP FOR THE SAME FUNCTION
//loops over colors
function renderColors () {
    for (let color of colors) {
        //color is like colors[i];
        //get each color
        let listItem = $(`<li data-taco="yes" class="colorItem">${color.name}</li>`);
    //setter
        listItem.data('secret', color);
        //
        $('#colorTarget').append(listItem)
    }
    //append to DOM
}


function colorFinder () {
    console.log('in color finder');
    //text getter 
    let alertText = $(this).text();

    //data getters
    let tacoToShow = $(this).data('taco');
    let secret = $(this).data('secret')
    console.log(tacoToShow);
    console.log(secret);
    
    //alert using back tics so it automatically concatenates 
    alert(`You clicked on: ${alertText} and its secret is ${secret.secret}`);
}