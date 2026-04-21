let element = document.getElementById("my-element")

element.style.backgroundColor = "blue";
element.classList.add("my-class");

let paragraph = document.createElement("p")
paragraph.textContent = "This is a new paragraph from JS"

document.body.appendChild(paragraph)

let catImage = document.createElement("img")
catImage.src = "../assets/cat.jpg"
catImage.width = "300"
document.body.appendChild(catImage)

let myDiv = document.getElementsByClassName("my-class")
let newPara = document.createElement("p")
newPara.textContent = "This is a new paragraph in a div with class my-class"
console.log(myDiv)
myDiv[0].appendChild(newPara)

let paragraphs = document.getElementsByTagName("div")
console.log(paragraphs[0].innerHTML)
paragraphs[1].innerHTML = `<h1>This will replace the existing 
    paragraph, without removing the p tag</h1>`

// Both do the same thing, but one is more direct
// catImage.src = "../assets/cat2.jpg"
catImage.setAttribute("src", "../assets/cat2.jpg")

myDiv[0].removeChild(newPara) // This will remove the new paragraph
                            // In the blue background text