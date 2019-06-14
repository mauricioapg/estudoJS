function listarVagas(v = []) {
    var lista = "<ul>";
    for (var i = 0; i < v.length; i++) {
        if (v[i] == null) {
            lista += "<li>" + "Vaga " + (i + 1) + ": " + "VAZIO" + "</li>";
        }
        else {
            lista += "<li>" + "Vaga " + (i + 1) + ": " + v[i] + "</li>";
        }
    }
    lista += "</ul>";
    return lista
}

function verificarVagas() {
    vagas = ['Corsa', 'Gol', 'Fiorino', null, null]; //variável global (declarada ser a palavra reservada VAR)
    resultVagas = document.getElementById('resultVagas');    
    resultVagas.innerHTML = listarVagas(vagas);
}

function incluirCarro() {    
    var vagaEscolhida = document.getElementById('vagasDisponiveis').value
    var carro = document.getElementById('modeloCarro').value
    erro = document.getElementById('erro')
    if (vagas[vagaEscolhida - 1] == null) {
        vagas[vagaEscolhida - 1] = carro
        erro.innerText = ""
    }
    else {
        erro.innerText = "vaga cheia"
    }
    resultVagas.innerHTML = listarVagas(vagas);
}

function exibirInclusaoCarro(){
    document.getElementById('execEstacionamento3').style.display = 'none'
    document.getElementById('execEstacionamento2').style.display = 'block'
}

function exibirRetiradaCarro(){
    document.getElementById('execEstacionamento2').style.display = 'none'
    document.getElementById('execEstacionamento3').style.display = 'block'
}