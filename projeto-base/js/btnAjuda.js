(function() {

    let btn = document.querySelector('#btnAjuda');
    btn.addEventListener('click', async function() {
        // https://ceep.herokuapp.com/cartoes/instrucoes.
        const respostaServidor = await fetch('https://ceep.herokuapp.com/cartoes/instrucoes');
        const dadosCarregados = await respostaServidor.json();
        console.log(dadosCarregados);

        const listaMensagens = dadosCarregados.instrucoes;
        for (let mensagem of listaMensagens) 
        {
            moduloMural.adicionarCartao(mensagem.conteudo, mensagem.cor);
        }
    });

})();