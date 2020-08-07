(function() {

    let btn = document.querySelector('#btnAjuda');
    btn.addEventListener('click', function() {
        const listaMensagens = [
            "Bem-vindo ao CEPP!",
            "Clique no botão 'Linhas' para mudar o layout",
            "Preencha o formulário para criar cartões"
        ];

        for (let mensagem of listaMensagens) {
            alert(mensagem);
        }
    });

})();