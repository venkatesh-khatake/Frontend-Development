// let heading = document.getElementById("heading");
// console.log(heading)

// let h1 = document.getElementsByClassName('h1');
// console.log(h1)



let courseName = document.getElementById('course');
console.log(courseName)

let q = document.querySelector('#course')
console.log(q.innerText)

let qe = document.querySelectorAll('.courses')
console.log(qe)
// for(let i = 0;i < qe.length; i++){
//     console.log(qe[i].innerText)
// }


qe.forEach(function(course,index){
    console.log(index , course.innerText)
})


