const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// select all the notes
let notes = document.querySelectorAll(".input-box");

// show the notes on the browser if they are in the local storage
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// create a p tag, add an input box class then set attribut contenteditable to true
// create another element img and set the image path

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

// add the delete functionality
notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    // if you write anything in the p element, it should update in the browser
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }

        });

    }
});

// prevents the default function of the enter key, instead it 
// adds a new line

document.addEventListener("click", event =>{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
