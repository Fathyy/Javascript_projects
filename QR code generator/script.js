qrText = document.getElementById("qrText");
qrImage = document.getElementById("qrImage");
imgBox = document.getElementById("imgBox");

function generateQR(){
    // if the user inputs a value in the input box
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        }, 1000)
    }

}
