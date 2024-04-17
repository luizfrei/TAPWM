function verificarTriangulo() {
    const ladoA = parseFloat(document.getElementById("ladoA").value);
    const ladoB = parseFloat(document.getElementById("ladoB").value);
    const ladoC = parseFloat(document.getElementById("ladoC").value);

    // Verificar se os lados do triângulo têm comprimentos positivos
    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        document.getElementById("resultado").innerText = "Os lados do triângulo devem ter comprimentos positivos.";
        return;
    }

    // Verificar se os lados formam um triângulo válido
    if (ladoB + ladoC <= ladoA || ladoA + ladoC <= ladoB || ladoA + ladoB <= ladoC) {
        document.getElementById("resultado").innerText = "Os lados fornecidos não formam um triângulo válido.";
        return;
    }

    // Verificar o tipo de triângulo
    if (ladoA === ladoB && ladoB === ladoC) {
        document.getElementById("resultado").innerText = "Triângulo equilátero.";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        document.getElementById("resultado").innerText = "Triângulo isósceles.";
    } else {
        document.getElementById("resultado").innerText = "Triângulo escaleno.";
    }
}
