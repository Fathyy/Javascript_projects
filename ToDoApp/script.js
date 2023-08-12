const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    // display error message if nothing is written
    if (inputBox.value === "") {
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // add a cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // display the span tab
        li.appendChild(span);
    }

    // clear the message after it is displayed in the li
    inputBox.value ="";
    // call the saveData whenever you add a new list item and it will save the updated content in the browser
    saveData();
}

listContainer.addEventListener("click", function(e){
    // if list item is clicked, mark it as checked
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  
        // when you check and uncheck the task, call the save data fuction
        saveData();  
    }
    // else if the the x icon is clicked, remove the list item
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// store the contents on the browser after it is refreshed
// on browser's local storage
function saveData(){
    // the list items will be stored in the local storage with the name of data
    localStorage.setItem("data", listContainer.innerHTML);
}
// after storing, display in the browser whenever you open it
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();