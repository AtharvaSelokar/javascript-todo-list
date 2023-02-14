let addToDOButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
/*let priorityButton = document.getElementById("priority");
let pcontainer = document.getElementById("pcontainer");
let pri = document.getElementById("pri");*/


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

addToDOButton.addEventListener("click", function () {
    
    var raw = inputField.value
    if(raw===""){
    alert("Please write something..")
    }
    else{
        var count=0
        count++
    var paragraph = document.createElement("li");
    paragraph.classList.add("li");

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

// toDoContainer.sort(paragraph)
// drag
var dragbox= document.querySelector(".container")
      new Sortable(dragbox,{
        Animation:200
      })         
