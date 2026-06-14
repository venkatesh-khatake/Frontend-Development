// innerText : 
    // innerText is a dom property used to get or set the 
    // visible content of an html element.

    let h1 = document.getElementById('course');
    console.log(h1.innerText)
    h1.innerText = "HTML (HyperText Markup Language)";
    console.log(h1.innerText);

// textContent : 
    // textContent is a dom property used to set or get
    // all the content of an element including hidden text

    const css = document.querySelector('#css');
   console.log("textContent : ",css.textContent)
   console.log("innerText : ",css.innerText)

console.log(document.body.textContent)


div = document.querySelector('.div');
div.innerHTML = "<h1>Hello Venkatesh this is DIV created by using innerHTML</h1>"

// getAttribute() : 
// getAttribute() is a DOM method used to get or read the value 
// of an html attribute.

let link = document.querySelector('a');
console.log("attribute value : ",link.getAttribute('href'))

// setAttribute() : 
// setAttribute is a DOM method used to add a new attribute or update
// existing attribute of an html element

link.setAttribute('id','googleLink');
console.log(link.getAttribute('id'))

const box = document.querySelector('.box');

box.classList.add('yellow')
box.classList.toggle('tomato')