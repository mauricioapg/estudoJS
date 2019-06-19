function converterMoeda() {
    var txtValor = document.getElementById('txtValor').value
    var valor = parseFloat(txtValor)
    var origem = document.getElementById('paises1').value
    var destino = document.getElementById('paises2').value
    var paisesEscolhidos = [origem, destino]
    var cotacaoDestino = null
    var moedaDestino = ""
    var moedaOrigem = ""

    switch (paisesEscolhidos[0, 1]) {
        case ('brasil' && 'usa'):
            cotacaoDestino = 0.25;
            moedaOrigem = "Reais brasileiros"
            moedaDestino = "Dólares americanos"
            break;
        case ('brasil' && 'chile'):
            cotacaoDestino = 179.82;
            moedaOrigem = "Reais brasileiros"
            moedaDestino = "Pesos chilenos"
            break;
        case ('usa' && 'brasil'):
            cotacaoDestino = 3.89;
            moedaOrigem = "Dólares americanos"
            moedaDestino = "Reais brasileiros"
            break;
        case ('usa' && 'chile'):
            cotacaoDestino = 699.38;
            moedaOrigem = "Dólares americanos"
            moedaDestino = "Pesos chilenos"
            break;
        case ('chile' && 'usa'):
            cotacaoDestino = 0.0014;
            moedaOrigem = "Pesos chilenos"
            moedaDestino = "Dólares americanos"
            break;
        case ('chile' && 'brasil'):
            cotacaoDestino = 0.0056;
            moedaOrigem = "Pesos chilenos"
            moedaDestino = "Reais brasileiros"
            break;
        default:
            break;
    }
    var resultado = valor * cotacaoDestino
    document.getElementById('resultadoConversao').innerHTML = `<strong>${valor} ${moedaOrigem}</strong> equivalem a <strong>${resultado} ${moedaDestino}</strong>`
}

function inverterEscolhas(){
    document.getElementById('resultadoConversao').innerHTML = ""
    var paises1 = document.getElementById('paises1').value
    var paises2 = document.getElementById('paises2').value
    var auxiliar = ""
    auxiliar = paises1
    paises1 = paises2
    paises2 = auxiliar
    document.getElementById('paises1').value = paises1
    document.getElementById('paises2').value = paises2
}