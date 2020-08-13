const moduloMural = (function() {

    let mural = document.querySelector('.mural');
    let templateCartao = document.querySelector('#templateCartao').innerHTML;

    // exclusão de cartões
    mural.addEventListener('click', function(event) {
        if (event.target.classList.contains('opcoesDoCartao-remove')) {
            const cartao = event.target.closest('.cartao');
            cartao.classList.add('cartao--some');
            cartao.addEventListener('transitionend', function() {
                cartao.remove();
            });
        }
    });

    // mudando a cor do cartão
    mural.addEventListener('change', function(event) {
        if (event.target.type === 'radio') {
            const radio = event.target;
            const cartao = radio.closest('.cartao');
            cartao.style.backgroundColor = radio.value;
        }
    });

    // mudando a cor do cartão via teclado
    mural.addEventListener('keypress', function(event) {
        if (
            event.target.tagName === 'LABEL' &&
            (event.key == 'Enter' || event.key == ' ')
        ) {
            event.target.click();
        }
    });

    function mudarLayout()
    {
        mural.classList.toggle('mural--linha');
    }

    let numeroCartao = 0;
    function adicionarCartao(conteudo, cor = '')
    {
        numeroCartao++;
        const cartao = document.createElement('article');
        cartao.style.backgroundColor = cor;
        cartao.classList.add('cartao');
        cartao.tabIndex = 0;
        cartao.innerHTML = templateCartao.replace(/{{NUMERO_CARTAO}}/g, numeroCartao).replace(/{{CONTEUDO_CARTAO}}/g, conteudo);
        mural.append(cartao);
    }

    function getCartoes()
    {
        const cartoes = mural.querySelectorAll('.cartao');
        console.log(cartoes); // NodeList de Articles
        const listaDeCartoes = Array.from(cartoes).map(function(cartao) {
            return {
                conteudo: cartao.querySelector('.cartao-conteudo').textContent,
                cor: cartao.style.backgroundColor
            }
        });
        console.log(listaDeCartoes); // Array de Objetos
        return listaDeCartoes;
    }

    // retorna um objeto com tudo aquilo que deve
    // ser acessível (público) nesse módulo
    return {
        mudarLayout,
        adicionarCartao,
        getCartoes
    }

})();