function calcularIMC() {
    var txtPeso = document.getElementById('txtPeso')
    var txtAltura = document.getElementById('txtAltura')
    var resultado = document.getElementById('resultado')
    var diagnostico = document.getElementById('diagnostico')
    var peso = Number(txtPeso.value)
    var altura = Number(txtAltura.value)
    var calculoFinal = peso / (altura ** 2)

    if (calculoFinal < 17) {
        diagnostico.innerText = `MUITO ABAIXO DO PESO`
        diagnostico.style.color = "gray"
    }
    else if (calculoFinal >= 17 && calculoFinal <= 18.49) {
        diagnostico.innerText = `ABAIXO DO PESO`
        diagnostico.style.color = "gray"
    }
    else if (calculoFinal >= 18.5 && calculoFinal <= 24.99) {
        diagnostico.innerText = `PESO NORMAL`
        diagnostico.style.color = "green"
    }
    else if (calculoFinal >= 25 && calculoFinal <= 29.99) {
        diagnostico.innerText = `ACIMA DO PESO`
        diagnostico.style.color = "orange"
    }
    else if (calculoFinal >= 30 && calculoFinal <= 34.99) {
        diagnostico.innerText = `OBESIDADE I`
        diagnostico.style.color = "red"
    }
    else if (calculoFinal >= 35 && calculoFinal <= 39.99) {
        diagnostico.innerText = `OBESIDADE II (SEVERA)`
        diagnostico.style.color = "violet"
    }
    else if (calculoFinal > 40) {
        diagnostico.innerText = `OBESIDADE MÓRBIDA`
        diagnostico.style.color = "black"
    }
    resultado.innerText = `Altura: ${altura} cm   /   Peso: ${peso} kg   /   Seu IMC é: ${calculoFinal}`
}