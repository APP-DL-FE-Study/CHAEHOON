const btn =document.querySelector('.submit');
btn.addEventListener('click',showConsole);
function showConsole() {
    console.log(btn);
    
}
const input = document.getElementById('in');
input.addEventListener('change',getInput);

function getInput(event) {
    console.log(event.target.value);
    input.value= ""
}
