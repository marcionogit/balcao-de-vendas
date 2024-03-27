


// Função acionada quando o botão for clicado
function handleClick(event){
  // prevenindo o padrão de link para não carregar a página destino
  event.preventDefault();
  // pegando o caminho do da página para aseguir manipularmos as informações retornadas
  fetchPagina(event.target.href)
  
}

// async faz com que a ação só seja executada quando ela for completamente carregada.
async function fetchPagina(url){
  // fazemos o fetch da url para manipular as informações
  const respostaPagina = await fetch(url);
  // transformamos em texto
  const textoPagina = await respostaPagina.text();

  mudarConteudo(textoPagina);
}

function mudarConteudo(novoTexto){

  const novoHtml = document.createElement('div');
  novoHtml.innerHTML = novoTexto;

  const conteudoAntigo = document.querySelector('.picole-flex');
  const conteudoNovo = novoHtml.querySelector('.picole-flex');
  
  conteudoAntigo.innerHTML = conteudoNovo.innerHTML;
  
  const btnClicado = document.querySelectorAll('.btn-escolha');
  
  btnClicado.forEach((item)=>{
    item.addEventListener('click', ()=>{
      let nomeProduto = item.getAttribute('name');
      let produto = mapaProdutos[nomeProduto];

          produto.qtd = Number(quantidade.value);
          if(produto.qtd === 0){
              produto.qtd = 1;
          }
          const copiaproduto = Object.assign({}, produto);
          lista.push(copiaproduto);
          let mult = copiaproduto.qtd * copiaproduto.valor
          let multAtacado = copiaproduto.qtd * copiaproduto.valorAtacado;
          precoAtualizado.push(Number(mult))
          precoAtualizadoAtacado.push(Number(multAtacado))
          mostrarLista()
    })
  })

}
