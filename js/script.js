// lista = []; array onde será feita uma copia dos objetos(sorvetes) para que consigamos realizar os calculos.
let lista = [];

// precoAtualizado = [] e precoAtualizadoAtacado = []; arrays onde os resultados das multiplicações feitas serão armazenadas, para que no final consigamos soma-las para saber o total da compra.
let precoAtualizado = []
let precoAtualizadoAtacado = []

// #qtd = campo input para multiplicao.
let quantidade = document.querySelector('#qtd');

// #mostrar =  campo para mostrar a descrição dos iténs que estão sendo selecionados.
let mostrarHTML = document.querySelector('#mostrar');

// #preco = campo onde será mostrado o total da compra.
let preco = document.querySelector('#preco');

// #desconto = Mostra o valor total de desconto na compra no fluxo normal do programa.
let desconto = document.querySelector('#desconto');

// #qtdDesconto = Mostra o valor total de desconto na parte inferior da página.
let qtdDesconto = document.querySelector('#qtd-desconto');

let btnAtacado = document.querySelector('#btn-atacado');

// .finalizadores = campo para finalizar a compra, por padrão ela será display="none"; Ao ser acionada será adicionada a class="ativo" que mudará o display para "grid".
const finalizadores = document.querySelector('.finalizador');

// #btnConfirmar = botão para quando todos os itens forem registrados, o usuário clicará neste botão para aparecer os finalizadores: DINHEIRO, DEBITO OU CRÉDITO.
const btnConfirmar = document.querySelector('#btn-confirmar');

// #mostrarTroco = campo onde será exibido o valor de troco para o cliente.
const mostrarTroco = document.querySelector('#mostrarTroco');

// #excluir-item = botão para excluir item unico durante uma compra.
const botaoExcluir = document.querySelector('#excluir-item');



// somaTotalProdutos(arrayEscolhida) = funcão onde nós pegamos a array passada dentro do método e retornamos a soma de todos os itens que estão dentro.
function somaTotalProdutos(arrayEscolhida){
  let somaSorvetes = arrayEscolhida.reduce((acumulador, elemento) => {
    return acumulador + elemento;
  }, 0);
  return somaSorvetes;
}

// mostrarLista() = essa função mostrará quais itens estão sendo selecionados no campo #mostrar.

// limparCampoQtd() = essa função ao ser acionada limpa o campo input digitado pelo usuario.

// limparCampoMostrar() = essa função ao ser acionada limpa os iténs mostrados anteriormente no campo #mostrar para que não se repitam esponencialmente.

// calculoAtualizado() = essa função soma todos os numeros que estão dentro da array precoAtualizado[].

// somaSorvetesVarejo = chamamos o método somaTotalProdutos() com a array precoAtualizado para que nos seja retornado a soma.

// somaSorvetesAtacado = chamamos o método somaTotalProdutos() com a array precoAtualizadoAtacado para que nos seja retornado a soma.

// loop por todos os itens dentro da array lista[].

// mult = variavel feita para armazenar o calculo do item do loop vezes a sua quantidade.

// formatado = variavel que armazena a maneira como será formatada a lista de item na tela.
function mostrarLista(){
    limparCampoQtd()
    limparCampoMostrar();
    calculoAtualizado()

    let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
    let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);
    
    lista.forEach((item, index)=>{        
        qtdDesconto.innerHTML = ''
        let mult = item.qtd * item.valor
        let multAtacado = item.qtd * item.valorAtacado
        
        // Se o valor total da compra for menor de 40 reais o bloco abaixo será executado com os valores de varejo.
        // Também adicionamos a class="index-excluir" para que seja possivel fazer a exclusão do item da array.
        if(somaSorvetesVarejo < 40){
            let formatado = `<li value="${index}" class="index-excluir" > ${item.descricao}
            ${item.valor.toFixed(2)} x ${item.qtd} und. <strong>R$ ${mult.toFixed(2)}</strong></li>` 
            mostrarHTML.innerHTML += formatado;    
        } 

        // Senão o bloco abaixo será executado com o preco de atacado.
        // Também adicionamos a class="index-excluir" para que seja possivel fazer a exclusão do item da array.
        else{
            let formatado = `<li value="${index}" class="index-excluir" > ${item.descricao} ${item.valorAtacado.toFixed(2)} x ${item.qtd} und.  <strong>R$${multAtacado.toFixed(2)}</strong></li>` 
            mostrarHTML.innerHTML += formatado; 
        // Mostrando quantidade de desconto na parte inferior da tela.
            qtdDesconto.innerHTML = `DE:${somaSorvetesVarejo.toFixed(2)} POR:R$${somaSorvetesAtacado.toFixed(2)}`
        }
        // .index-excluir = Selecionamos todos os itens com a class index-excluir.
        let indexExcluir = document.querySelectorAll('.index-excluir');

        // Fazemos um loop por todos os itens dentro da NodeList indexExcluir para adicionarmos um escutador de eventos em cada item.
        
        indexExcluir.forEach((item)=>{
            item.addEventListener('click', ()=>{
                if(item.style.background === "lightgrey"){
                    item.style.background = "white" 
                    
                } else{
                    item.style.background = "lightgrey" 
                    botaoExcluir.addEventListener('click', ()=>{
                        excluirItemLista(item.value)
                    })
                }})
            })
            
        })
    }
    
function desativarBotaoAtacado(){
    btnAtacado.classList.remove('virarAtacado');
    mostrarLista()
}

function ativarBotaoAtacado(){
    let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
    let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);
    let descontoCompra = somaSorvetesVarejo - somaSorvetesAtacado;
    
    preco.innerHTML = `R$ ${somaSorvetesVarejo.toFixed(2)}`
    
    
    let classAtacado = 'virarAtacado';
    let atributo = btnAtacado.getAttribute('class');
    if(atributo.includes(classAtacado)){
        desativarBotaoAtacado()
        somaSorvetesVarejo = somaSorvetesVarejo
        desconto.innerHTML = `R$ 0.00`
    } 
    else if(lista.length > 0){
        btnAtacado.classList.toggle('virarAtacado');
        if(somaSorvetesVarejo < 40){
            
            somaSorvetesVarejo = somaSorvetesAtacado
            
            limparCampoQtd();
            limparCampoMostrar();
            calculoAtualizado();
            
            lista.forEach((item, index)=>{        
                let multAtacado = item.qtd * item.valorAtacado
                let formatado = `<li value="${index}" class="index-excluir" > ${item.descricao} ${item.valorAtacado.toFixed(2)} x ${item.qtd} und.  <strong>R$ ${multAtacado.toFixed(2)}</strong></li>` 
                mostrarHTML.innerHTML += formatado;
            })
            preco.innerHTML = `R$ ${somaSorvetesAtacado.toFixed(2)}`
            desconto.innerHTML = `R$ ${descontoCompra.toFixed(2)}`

            qtdDesconto.innerHTML = `DE:${somaSorvetesVarejo.toFixed(2)} POR:R$${somaSorvetesAtacado.toFixed(2)}`
        } 
    } else{
        console.log('nenhum item selecionado')
    }  
}


btnAtacado.addEventListener('click', ativarBotaoAtacado)

function excluirItemLista(value){
    lista.splice(value, 1);
    precoAtualizado.splice(value, 1);
    precoAtualizadoAtacado.splice(value, 1);
    mostrarLista();
}


// limparCampoQtd() = quando essa função for chamada, ela sempre limpará o campo de input #qtd.
function limparCampoQtd(){
    quantidade.value = '';
}

// limparCampoMostrar() = quando essa função for chamada, ela sempre limpará o campo mostrar.
function limparCampoMostrar(){
    mostrarHTML.innerHTML = '';
}

// limparCampoBotao() = quando o botão Deletar for clicado, acionará essa função e sempre limpará os campos mostrar, preco e as arrays lista=[], e precoAtualizado.
function limparCampoBotao(){
    limparCampoMostrar();
    lista = [];
    precoAtualizado = [];
    precoAtualizadoAtacado = [];
    preco.innerHTML = `R$ 0.00`
    desconto.innerHTML = `R$ 0.00`
}
