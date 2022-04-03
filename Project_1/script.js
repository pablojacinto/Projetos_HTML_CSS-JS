// querySelectorAll seleciona todos os documentos (no DOM) com a classe especificada (pode ser elemnento)
const panels = document.querySelectorAll('.panel'); 

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses ()
        panel.classList.add('active')
    })
})

function removeActiveClasses ( ) {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}