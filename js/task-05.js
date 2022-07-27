const inputeValeu = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output')

inputeValeu.addEventListener('input', inputeValeuName);

function inputeValeuName () { 
    spanName.textContent = inputeValeu.value || 'Anonimus';
}

