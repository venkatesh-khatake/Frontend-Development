const countDisp = document.querySelector("#count");
const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");

let count =0;


decrease.addEventListener('click',function(){
   count--;
    countDisp.innerText = count;
})

increase.addEventListener('click',function(){
    count++;
    countDisp.innerText = count;
})

reset.addEventListener('click',function(){
    count = 0;
    countDisp.innerText = count;
})

function updateCount() {
    countDisp.innerText = count;

    if (count > 0) {
        countDisp.style.color = "green";
    } else if (count < 0) {
        countDisp.style.color = "red";
    } else {
        countDisp.style.color = "black";
    }
}


const theme = document.getElementById('theme');

theme.addEventListener('click',function(){
  
})
