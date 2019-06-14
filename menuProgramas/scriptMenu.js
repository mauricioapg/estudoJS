
function criarSaudacao() {
    var saudacao = document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (hora >= 0 && hora < 12) {
        saudacao.innerText = `Bom dia!`
    }
    else if (hora >= 12 && hora < 18) {
        saudacao.innerText = `Boa tarde!`
    }
    else if (hora >= 18 && hora < 23 && minutos < 59) {
        saudacao.innerText = `Boa noite!`
    }
}

function exibirTelaIMC() {
    document.getElementById('execCalcNotas').style.display = 'none'
    document.getElementById('execOperacoes').style.display = 'none'
    document.getElementById('execEstacionamento1').style.display = 'none'
    var estadoDivIMC = document.getElementById('execCalcIMC').style.display
    if (estadoDivIMC == 'none') {
        document.getElementById('execCalcIMC').style.display = 'block'
    }
    else {
        document.getElementById('execCalcIMC').style.display = 'none'
    }
}

function exibirTelaNotas() {
    document.getElementById('execCalcIMC').style.display = 'none'
    document.getElementById('execOperacoes').style.display = 'none'
    document.getElementById('execEstacionamento1').style.display = 'none'
    var estadoDivNotas = document.getElementById('execCalcNotas').style.display
    if (estadoDivNotas == 'none') {
        document.getElementById('execCalcNotas').style.display = 'block'
    }
    else {
        document.getElementById('execCalcNotas').style.display = 'none'
    }
}

function exibirTelaOperacoes() {
    document.getElementById('execCalcNotas').style.display = 'none'
    document.getElementById('execCalcIMC').style.display = 'none'
    document.getElementById('execEstacionamento1').style.display = 'none'
    var estadoDivOperacoes = document.getElementById('execOperacoes').style.display
    if (estadoDivOperacoes == 'none') {
        document.getElementById('execOperacoes').style.display = 'block'
    }
    else {
        document.getElementById('execOperacoes').style.display = 'none'
    }
}

function exibirTelaEstacionamento() {
    document.getElementById('execCalcNotas').style.display = 'none'
    document.getElementById('execCalcIMC').style.display = 'none'
    document.getElementById('execOperacoes').style.display = 'none'
    var estadoDivEstacionamento = document.getElementById('execEstacionamento1').style.display
    if (estadoDivEstacionamento == 'none') {
        document.getElementById('execEstacionamento1').style.display = 'block'
    }
    else {
        document.getElementById('execEstacionamento1').style.display = 'none'
    }
}
