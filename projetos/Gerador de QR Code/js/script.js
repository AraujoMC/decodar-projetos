// variaveis
const container = document.querySelector(".container")
const qrCodeButton = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImage = document.querySelector("#qr-Code img")
//Eventos
function generateCode (){
    const qrCodeInputValue = qrCodeInput.value;
    console.log(qrCodeInputValue)
    if(!qrCodeInputValue) return;

    qrCodeInput.innerText = "Gerando codigo..."
    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
    qrCodeImage.addEventListener("load", ()=>{
    container.classList.add("active")
    qrCodeButton.innerText = "codigo criado!";
    })
}

qrCodeButton.addEventListener("click", ()=>{
generateCode()
})