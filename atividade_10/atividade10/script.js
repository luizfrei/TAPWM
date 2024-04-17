function verificarTriangulo() {
    const ladoA = parseFloat(document.getElementById("ladoA").value);
    const ladoB = parseFloat(document.getElementById("ladoB").value);
    const ladoC = parseFloat(document.getElementById("ladoC").value);

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        document.getElementById("resultado").innerText = "Os lados do triângulo devem ter comprimentos positivos.";
        return;
    }

    if (ladoA === ladoB && ladoB === ladoC) {
        document.getElementById("resultado").innerText = "Triângulo equilátero.";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        document.getElementById("resultado").innerText = "Triângulo isósceles.";
    } else {
        document.getElementById("resultado").innerText = "Triângulo escaleno.";
    }
}
