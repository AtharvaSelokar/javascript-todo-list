let addToDOButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let priorityButton = document.getElementById("priority");
let pcontainer = document.getElementById("pcontainer");
let pri = document.getElementById("pri");


//******************************* */
/*priorityButton.addEventListener("click", function () {
    if (pri === " ") {
        alert("you must write something")
    }
    var paragraph1 = document.createElement("p");
    paragraph1.classList.add("paragraph-styling");
    paragraph1.classList.add("listitem");
    paragraph1.innerText = pri.value;
    pcontainer.appendChild(paragraph1);
    pri.value = " ";
    console.log(paragraph1)
})*/
var count = 0


addToDOButton.addEventListener("click", function () {
    count++
 var raw = inputField.value
 if(raw===" "){
    alert("PLEASE ENTER ITEM")
 }
 else{
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = " ";

    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through";
    })
}

    paragraph.addEventListener("dblclick", function () {
        toDoContainer.removeChild(paragraph)
    })
    console.log(count)
})
// drag
var dragbox = document.querySelector(".container")
new Sortable(dragbox, {
    Animation: 200
})
