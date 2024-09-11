function validarForm() {
    var form = document.forms["nomeform"]; // Corrigido para obter o formulário corretamente
    var nome = form.elements["nome"].value.trim();
    var email = form.elements["email"].value.trim();
    var comentario = form.elements["comentario"].value.trim();
    var pesquisa = form.elements["pesquisa"].value;

    console.log("Nome:", nome); // Logs para depuração
    console.log("Email:", email);
    console.log("Comentário:", comentario);
    console.log("Pesquisa:", pesquisa);

    // Verificar o comprimento do nome
    if (nome.length < 10) {
        alert("Nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    // Verificar o formato do email
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Email deve ter o formato correto.");
        return false;
    }

    // Verificar o comprimento do comentário
    if (comentario.length < 20) {
        alert("Comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    // Verificar a seleção da pesquisa
    if (!pesquisa) {
        alert("Você deve selecionar uma opção de pesquisa.");
        return false;
    }

    // Mensagem com base na resposta da pesquisa
    if (pesquisa === "sim") {
        alert("Obrigado por responder a pesquisa!");
    } else {
        alert("Volte sempre!");
    }

    return true; // Formulário pode ser enviado
}
