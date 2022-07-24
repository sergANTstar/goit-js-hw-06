const inputValidetor = document.querySelector('input')


inputValidetor.addEventListener('blur', inputValidetorColor)

function inputValidetorColor () {
    if (inputValidetor.value.length === inputValidetor.dataset.length) {
         inputValidetor.classList.add('valid')
         inputValidetor.classList.remove('invalid')}
    else if(inputValidetor.value.length === 0){
        inputValidetor.classList.remove('valid')
        inputValidetor.classList.remove('invalid')
        }
    else {
    inputValidetor.classList.remove('valid')
    inputValidetor.classList.add('invalid')}
}
