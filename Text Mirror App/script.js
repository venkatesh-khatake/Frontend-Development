const input = document.querySelector('#input');

const output = document.querySelector('.output-container');

input.addEventListener('input',function(event){
    output.innerText = event.target.value
})