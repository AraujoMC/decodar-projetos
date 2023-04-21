//Selecionando os elementos HTML

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const MultiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations")
const multiplicationTitle = document.querySelector("#multiplication-title span")
//Funções
const createTable = (number,multiplicatorNumber) =>{
    multiplicationTable.innerHTML = "";

    for(i=1; i<=multiplicatorNumber; i++){
        const result = number * i;

        const template = `<div class="row">
        <div class="operation">${number} X ${i}</div>
        <div class="result">${result}</div>        
        </div>`

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerText = number;
}
//Eventos

multiplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +MultiplicationInput.value;
    if(!multiplicationNumber || !multiplicatorNumber)
    return;
    createTable(multiplicationNumber, multiplicatorNumber);
})