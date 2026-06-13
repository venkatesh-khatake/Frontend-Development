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