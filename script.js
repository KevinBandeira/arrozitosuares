function arroz() {
    var textElement = document.getElementById("texto");
    var text = "SALVE PROFESSOR";
    const colors = ["white", "gold"];
    let index = 0;

    // Função para adicionar uma letra por vez e mudar a cor
    const typeEffect = setInterval(function() {
        if (index < text.length) {
            textElement.innerHTML += text[index];
            textElement.style.color = colors[index % colors.length]; // Alterna entre as cores
            index++;
        } else {
            clearInterval(typeEffect); // Para o intervalo quando o texto está completo
            setTimeout(deleteText, 1000); // Aguarda 1 segundo antes de começar a apagar
        }
    }, 200); // Muda a cada 200 milissegundos (0.2 segundos)

    // Função para apagar uma letra por vez
    function deleteText() {
        let deleteIndex = text.length;

        const deleteEffect = setInterval(function() {
            if (deleteIndex > 0) {
                deleteIndex--;
                textElement.innerHTML = text.slice(0, deleteIndex);
            } else {
                clearInterval(deleteEffect); // Para o intervalo quando o texto foi totalmente apagado
                setTimeout(arroz, 2000); // Aguarda 2 segundos antes de recomeçar
            }
        }, 100); // Muda a cada 100 milissegundos (0.1 segundos)
    }
}

// Inicia a animação ao carregar a página ou clicar no botão
arroz();


