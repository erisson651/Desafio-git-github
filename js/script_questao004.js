//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector("#formulario-combustivel")
const divResultado = document.querySelector("#div-dados")

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)
    let nome = objFormDados.get('nome')
    let nota1 = parseFloat(objFormDados.get('nota1'))
    let nota2 = parseFloat(objFormDados.get('nota2'))
    let nota3 = parseFloat(objFormDados.get('nota3'))

    let media = (noota1 + nota2 + nota 3) / 3
    formDados.reset()
    
    })