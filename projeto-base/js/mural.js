const moduloMural = (function() {

    let mural = document.querySelector('.mural');

    // exclusão de cartões
    mural.addEventListener('click', function(event) {
        if (event.target.classList.contains('opcoesDoCartao-remove')) {
            event.target.closest('.cartao').remove();
        }
    });

    function mudarLayout()
    {
        mural.classList.toggle('mural--linha');
    }

    // retorna um objeto com tudo aquilo que deve
    // ser acessível (público) nesse módulo
    return {
        mudarLayout
    }

})();