
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

document.addEventListener('keydown',function(event){
    // console.log("Key Pressed")
    console.log(event.key)
})


// const text = document.querySelector('.text');
// const box = document.querySelector(".box");

// box.addEventListener('mouseover',function(){
//     text.innerText = 'In';
// })

// box.addEventListener('mouseout',function(event){
//     console.log(event)
//         text.innerText = 'out';
// })

fruits = document.querySelector('#fruits');

fruits.addEventListener('click',function(event){
    console.log(event.target.innerText)
})