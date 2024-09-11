function handleCourseSelection() {
    var selectElement = document.getElementById('courseSelect');
    var selectedValue = selectElement.value;
    var courseName = "";

    if (selectedValue === "") {
        return; // Não faz nada se não houver seleção
    }

    switch (selectedValue) {
        case "curso1":
            courseName = "Curso de JavaScript";
            break;
        case "curso2":
            courseName = "Curso de Python";
            break;
        case "curso3":
            courseName = "Curso de HTML & CSS";
            break;
    }

    var confirmation = confirm("Você deseja abrir a página do " + courseName + "?");

    if (confirmation) {
        var courseInfo = "";

        switch (selectedValue) {
            case "curso1":
                courseInfo = "Curso de JavaScript: Aprenda a criar interatividade em websites com JavaScript.";
                break;
            case "curso2":
                courseInfo = "Curso de Python: Aprenda a programar com Python, uma linguagem versátil e popular.";
                break;
            case "curso3":
                courseInfo = "Curso de HTML & CSS: Aprenda a construir e estilizar páginas web com HTML e CSS.";
                break;
        }

        // Abrir uma nova janela com as informações do curso
        var newWindow = window.open("", "", "width=600,height=300");
        newWindow.document.write("<html><head><title>" + courseName + "</title></head><body>");
        newWindow.document.write("<h1>" + courseName + "</h1>");
        newWindow.document.write("<p>" + courseInfo + "</p>");
        newWindow.document.write("</body></html>");
    }
}
