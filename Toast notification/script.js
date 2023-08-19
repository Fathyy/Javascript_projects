toastBox = document.getElementById("toastBox");

let successMsg = "Successfully submitted";
let errorMsg = "Please try again";
let invalidMsg = "Invalid input";

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error');
    }

    if (msg.includes('invalid')) {
        toast.classList.add('invalid');
    }
}