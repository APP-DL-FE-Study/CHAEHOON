const body = document.querySelector('body');
const btn = document.querySelector('.submit');
const inputElem =document.querySelector('#in');

let value = "";

btn.addEventListener('click', getInput);

function getInput(event) {
    value = inputElem.value
    const textElem = 
    document.createElement('span');
    const container = 
    document.createElement('div');
    const btn1 = 
    document.createElement('button');
    btn1.innerText ="삭제"
    body.addEventListener('click',function(e) {
        if(e.target.className !=="삭제") return;
        body.removeChild(e.target.parentNode);
    });
    textElem.innerHTML = value;

    

    container.appendChild(textElem);
    container.appendChild(btn1);
    body.appendChild(container);

    inputElem.value = "";
}


