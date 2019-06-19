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
    vagas = ['Corsa', 'Gol', 'Fiorino', null, 'Fiesta', 'Santana', null, 'Focus', 'Fusca', 'Celta', null, null]; //variável global (declarada ser a palavra reservada VAR)
    resultVagas = document.getElementById('resultVagas');    
    resultVagas.innerHTML = listarVagas(vagas);
}

function incluirCarro() {    
    var vagaEscolhida = document.getElementById('vagasDisponiveis1').value
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

function retirarCarro(){    
    var vagaEscolhida = document.getElementById('vagasDisponiveis2').value
    var carroRetirado = vagas[vagaEscolhida - 1]
    vagas[vagaEscolhida -1] = null
    resultVagas.innerHTML = listarVagas(vagas);
    document.getElementById('vagaLiberada').innerText = `O veículo ${carroRetirado} foi retirado. Vaga ${vagaEscolhida} está vazia.`
}

function exibirInclusaoCarro(){
    document.getElementById('execEstacionamento3').style.display = 'none'
    document.getElementById('execEstacionamento2').style.display = 'block'
}

function exibirRetiradaCarro(){
    document.getElementById('vagaLiberada').innerText = " "
    document.getElementById('execEstacionamento2').style.display = 'none'
    document.getElementById('execEstacionamento3').style.display = 'block'
}