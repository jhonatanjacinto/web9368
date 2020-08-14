import { mostrarOuEsconder, adicionarLinha, getLinhas } from "./tabela.js";

const badge = document.querySelector('.badge-info');

carregarItens();
async function carregarItens()
{
    const resposta = await fetch('https://jhonatanjacinto.dev/lista-supermercado/?usuario=jhonatanjacinto');
    const listaItens = await resposta.json();
    console.log(listaItens);

    for (let item of listaItens)
    {
        adicionarLinha(item.conteudo);
    }

    mostrarOuEsconder();
}

export async function sincronizar()
{
    badge.classList.remove('d-none');
    const linhas = getLinhas();

    const parametros = new URLSearchParams();
    parametros.append('usuario', 'jhonatanjacinto');
    parametros.append('itens', JSON.stringify(linhas));

    const resposta = await fetch('https://jhonatanjacinto.dev/lista-supermercado/', {
        method: 'POST',
        body: parametros
    });
    const statusServidor = await resposta.json();
    console.log(statusServidor);
    badge.classList.add('d-none');
}