const form = document.getElementById('formulario')

function dif(numA, numB) {
    const validade = numB - numA;
    return validade >= 1;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const pNumero = document.getElementById('one')
    const sNumero = document.getElementById('two')
    if (!dif(pNumero.value, sNumero.value)) {
        alert("Formulário inválido!");
    } else {
        alert("FOrmulário válido!")
    }
})
