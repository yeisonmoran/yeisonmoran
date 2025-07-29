function sumar() {

    const n1 = parseFloat (document.getElementById('num1').value);
    const n2 = parseFloat (document.getElementById('num2').value);
    const resultado = n1 + n2;
    document.getElementById("resultado").textContent = resultado;
    
}

function restar() {
    const n1 = parseFloat (document.getElementById('num1').value);
    const n2 = parseFloat (document.getElementById('num2').value);
    const resultado = n1 - n2;
    document.getElementById("resultado").textContent = resultado;
    
}

function multiplicar() {
    const n1 = parseFloat (document.getElementById('num1').value);
    const n2 = parseFloat (document.getElementById('num2').value);
    const resultado = n1 * n2;
    document.getElementById("resultado").textContent = resultado;

}

function dividir() {
    const n1 = parseFloat (document.getElementById('num1').value);
    const n2 = parseFloat (document.getElementById('num2').value);
    if (n2 === 0) {

        document.getElementById("resultado").textContent = "no se puede dividir por 0";
            
    }
    else {
        const resultado = n1 / n2;
        document.getElementById("resultado").textContent = resultado;
    }
    
}
