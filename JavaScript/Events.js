
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const button = document.querySelector('button');
const body = document.querySelector('body');


function changeTheme(){
    body.classList.toggle('dark')
}


button.addEventListener('click',changeTheme)

const input = document.getElementById('text');

function showText(){
    console.log(input.value)
}

input.addEventListener('input',showText)

document.addEventListener('keydown',function(){
    console.log("Key Pressed")
})