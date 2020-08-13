(function() {

    // requisição Ajax GET com jQuery
    $.get('https://ceep.herokuapp.com/cartoes/carregar', { usuario: 'jhonatan.jacinto@caelum.com.br' }, function(dados) {
        for (let cartao of dados.cartoes) {
            moduloMural.adicionarCartao(cartao.conteudo, cartao.cor);
        }
    }, 'jsonp');

    const btnSync = document.querySelector('#btnSync');
    btnSync.addEventListener('click', async function() {
        // botaoSync--sincronizado => botaoSync--esperando
        btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando');
        btnSync.disabled = true;

        const infoUsuario = {
            usuario: 'jhonatan.jacinto@caelum.com.br',
            cartoes: moduloMural.getCartoes()
        };

        try 
        {
            let url = 'https://ceep.herokuapp.com/cartoes/salvar';
            const respostaServidor = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(infoUsuario)
            });

            const dadosRetornados = await respostaServidor.json();
            console.log(dadosRetornados); // objeto com o nome do usuario e a quantidade de cartões salvos
            let { quantidade } = dadosRetornados;

            if (quantidade == 1) {
                moduloNotificacao.notificar('01 cartão salvo com sucesso!');
            }
            else {
                moduloNotificacao.notificar(quantidade + ' cartões salvos com sucesso!');
            }
        }
        catch(e) {
            moduloNotificacao.notificar('Erro ao enviar informações para o servidor!');
            console.error(e);
        }
        finally {
            btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado');
            btnSync.disabled = false;
        }
    });

})();