function escolherOperacao(numero) {
    var chkBox = document.getElementsByName("checkBox")[numero].value
    var opEscolhida = document.getElementById('opEscolhida')
    var caixasValores = document.getElementById('valores')
    switch (chkBox) {
        case "soma":
            caixasValores.style.display = 'block'
            opEscolhida.innerText = "Soma".toUpperCase()
            break;
        case "subtracao":
            caixasValores.style.display = 'block'
            opEscolhida.innerText = "Subtração".toUpperCase()
            break;
        case "multiplicacao":
            caixasValores.style.display = 'block'
            opEscolhida.innerText = "Multiplicação".toUpperCase()
            break;
        case "divisao":
            caixasValores.style.display = 'block'
            opEscolhida.innerText = "Divisão".toUpperCase()
            break;
        default:
            break;
    }
}

function efetuarOperacao() {
    var txtv1 = document.getElementById('txtValor1')
    var txtv2 = document.getElementById('txtValor2')
    var valor1 = Number.parseInt(txtv1)
    var valor2 = Number.parseInt(txtv2)
    var opEscolhida = document.getElementById('opEscolhida')
    var resposta = document.getElementById('resposta')
    var resultado
    switch (opEscolhida) {
        case "SOMA":
            resultado = valor1 + valor2
            break;
        case "SUBTRAÇÃO":
            resultado = valor1 - valor2
            break;
        case "MULTIPLICAÇÃO":
            resultado = valor1 * valor2
            break;
        case "DIVISÃO":
            resultado = valor1 / valor2
            break;
        default:
            break;
    }
    resposta.innerText = `O resultado foi: ${resultado}`
}