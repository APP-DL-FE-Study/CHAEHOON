const body = document.querySelector('body');



const btn = document.querySelector('.submit');
const inputElem =document.querySelector('#in');

let value = "";

btn.addEventListener('click', getInput);

function getInput(event) {
    value = inputElem.value
    const textElem = document.createElement('span');
    const container = document.createElement('div');
    const btn1 = document.createElement('button');
    btn1.innerHTML="삭제"
    textElem.innerHTML = value;

    

    container.appendChild(textElem);
    container.appendChild(btn1);
    body.appendChild(container);

    inputElem.value = "";
}
