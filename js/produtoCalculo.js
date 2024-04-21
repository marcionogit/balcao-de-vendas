
// picoleAoleite() = função que cria uma copia do objeto leite para realiazação dos calculos e amarzenamento nas array's "lista" e "precoAtualizado".

// Quando a função picoleAoLeite() for acionada, ela pegará a quantidade digitada no campo de input: #qtd, transformará de string para number e adicionará no lugar do lugar da propriedade qtd do objeto leite.

// Se o campo input não receber nenhum numero, adicionameros a ele o valor 1 para que consigamos fazer o calculo do produto. Por exemplo: 1 x 2,80 = 2,80.

// Copiando o objeto leite com "Object.assign({}, leite);".

// Adicionando o objeto copiado ao array lista.

// mult = variável para armazenar valor da multiplicação qtd * valor. 

// Lançamos mult para a array precoAtualizado para fazermos a soma de todos os itens. 

// mostrarLista() = chama a função pra escrever no campo #mostrar quais itens estão sendo registrados.

const btnClicado = document.querySelectorAll('.btn-escolha')
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
        desativarBotaoAtacado()
  })
})


// calculoAtualizado() = essa função atualizará em tempo real o valor total da compra e o retornará no campo #preco.
function calculoAtualizado(){
  let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
  let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);
  let descontoCompra = somaSorvetesVarejo - somaSorvetesAtacado;


    
  if(somaSorvetesVarejo < 40){
    preco.innerHTML = `R$ ${somaSorvetesVarejo.toFixed(2)}`
    desconto.innerHTML = `R$ 0.00`

    // btnAtacado.addEventListener('click', ()=>{
    //   // somaSorvetesVarejo = somaSorvetesAtacado
      
    //   // preco.innerHTML = `R$ ${somaSorvetesVarejo.toFixed(2)}`

    // })

  } else{
      preco.innerHTML = `R$ ${somaSorvetesAtacado.toFixed(2)}`
      desconto.innerHTML = `R$ ${descontoCompra.toFixed(2)}`
  }
}
