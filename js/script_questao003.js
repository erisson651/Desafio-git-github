//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector("#formulario-combustivel")
const divResultado = document.querySelector("#div-dados")

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let distancia = parseFloat(objFormDados.get('distancia'))
    let consumo = parseFloat(objFormDados.get('consumo'))
    let gasolina = parseFloat(objFormDados.get('gasolina'))

    let trajetoria = distancia / consumo  
    let valor = trajetoria * gasolina

    divResultado.innerHTML = `a quantidade de combustivel nescessario sera ${trajetoria.toFixed(1).replace('.',',')}
    <br> o valor a pagar sera ${valor.toFixed(2).replace('.',',')}
`

    formDados.reset()
    
    })