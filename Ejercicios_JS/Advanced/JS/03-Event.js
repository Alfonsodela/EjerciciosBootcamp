window.onload = () => {

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

    const btn = document.querySelector('.click');
    btn.innerHTML = '<button id="btnToClick"></button>';

    const btnToClick = document.getElementById('btnToClick');
    
    btnToClick.addEventListener('click', (e) => {
        console.log('click')
    })



// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

    const focus = document.querySelector('.focus');

    focus.addEventListener('focus', (e) => {
        console.log(e.target.value)
    })

    

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

    const eventInput = document.querySelector('.value');
    eventInput.addEventListener('input', (e) => {
        console.log(e.target.value)
    })

// 
// const word = document.querySelector('.value')
// word.addEventListener('input', () => {
    // console.log(word.value)
// })
}