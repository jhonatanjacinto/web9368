const moduloNotificacao = (function() {

    const divMsg = document.createElement('div');
    divMsg.classList.add('formNovoCartao-msg');
    divMsg.addEventListener('animationend', function() {
        divMsg.remove();
    });

    function notificar(mensagem)
    {
        divMsg.textContent = mensagem;
        document.body.append(divMsg);
    }

    return {
        notificar
    }

})();