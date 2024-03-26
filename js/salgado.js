const btnSalgados = document.querySelector('.picole-flex #salgados');


// Função acionada quando o botão salgados for clicado
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
  
  conteudoAntigo.innerHTML = conteudoNovo.innerHTML

}

btnSalgados.addEventListener('click', handleClick);



const btnVoltar = document.querySelector('.voltar');
console.log(btnVoltar)
// Função acionada quando o botão salgados for clicado
function botaoVoltar(event){
  // prevenindo o padrão de link para não carregar a página destino
  event.preventDefault();
  // pegando o caminho do da página para aseguir manipularmos as informações retornadas
  fetchPaginaInicial(event.target.href)
  console.log(event.target.href)
}

// async faz com que a ação só seja executada quando ela for completamente carregada.
async function fetchPaginaInicial(url){
  // fazemos o fetch da url para manipular as informações
  const respostaPagina = await fetch(url);
  // transformamos em texto
  const textoPagina = await respostaPagina.text();

  voltarConteudo(textoPagina);
}

function voltarConteudo(novoTexto){
  const novoHtml = document.createElement('div');
  novoHtml.innerHTML = novoTexto;

  const conteudoAntigo = document.querySelector('.picole-flex');
  const conteudoNovo = novoHtml.querySelector('.picole-flex');
  
  conteudoAntigo.innerHTML = conteudoNovo.innerHTML

}

btnVoltar.addEventListener('click', botaoVoltar);