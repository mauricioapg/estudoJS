function calcularNotas() {
    var txtNota1 = document.getElementById('txtNota1')
    var txtNota2 = document.getElementById('txtNota2')
    var txtNota3 = document.getElementById('txtNota3')
    var media = document.getElementById('mediaAritmetica')
    var aprovacao = document.getElementById('aprovacao')
    var n1 = Number(txtNota1.value)
    var n2 = Number(txtNota2.value)
    var n3 = Number(txtNota3.value)
    var calculoMedia = (n1 + n2 + n3) / 3
    media.innerText = `Sua média final é: ${calculoMedia}`
    if (calculoMedia < 7) {
        aprovacao.innerText = `Que pena, você foi reprovado`
    }
    else if (calculoMedia >= 7) {
        aprovacao.innerText = `Parabéns, você foi aprovado`
    }
}