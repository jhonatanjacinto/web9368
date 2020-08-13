(function() {

    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        let campoTexto = formulario.querySelector('textarea');
        if (campoTexto.value.trim() == '') {
            // o campo NÃO foi preenchido
            moduloNotificacao.notificar('Por favor, preencha o campo corretamente!');
        }
        else {
            // o campo foi preenchido, então criamos um novo cartão no mural
            let conteudo = campoTexto.value;
            moduloMural.adicionarCartao(conteudo);
            moduloSync.sincronizar();
            formulario.reset();
        }
    });

})();