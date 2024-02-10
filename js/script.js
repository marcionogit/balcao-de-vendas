// lista = []; array onde será feita uma copia dos objetos(sorvetes) para que consigamos realizar os calculos.
let lista = [];

// precoAtualizado = []; array onde os resultados das multiplicações feitas serão armazenadas, para que no final consigamos soma-las para saber o total da compra.
let precoAtualizado = []
let precoAtualizadoAtacado = []




// #qtd = campo input.
let quantidade = document.querySelector('#qtd');

// #mostrar =  campo para mostrar a descrição dos iténs que estão sendo selecionados.
let mostrarHTML = document.querySelector('#mostrar');

// #preco = campo onde será mostrado o total da compra.
let preco = document.querySelector('#preco');

let desconto = document.querySelector('#desconto');

// .finalizadores = campo para finalizar a compra, por padrão ela será display="none"; Ao ser acionada será adicionada a class="ativo" que mudará o display para "grid".
const finalizadores = document.querySelector('.finalizador');

// finalizadorDinheiro = adicionaremos um evento caso esse item seja selecionado, e também pegaremos o valor que estará sendo digitado pelo usuário.
const finalizadorDinheiro = document.querySelector('#dinheiro');

// finalizadorDebito = adicionaremos um evento caso esse item seja selecionado, e também pegaremos o valor que estará sendo digitado pelo usuário.
const finalizadorDebito = document.querySelector('#debito');

// finalizadorCredito = adicionaremos um evento caso esse item seja selecionado, e também pegaremos o valor que estará sendo digitado pelo usuário.
const finalizadorCredito = document.querySelector('#credito');

// btnConfirmar = quando todos os itens forem registrados, o usuário clicará neste botão para aparecer os finalizadores: DINHEIRO, DEBITO OU CRÉDITO.
const btnConfirmar = document.querySelector('#btn-confirmar');

// mostrarTroco = campo onde será exibido o valor de troco para o cliente.
const mostrarTroco = document.querySelector('#mostrarTroco');

const botaoExcluir = document.querySelector('#excluir-item');



// mostrarLista() = essa função mostrará quais itens estão sendo selecionados no campo #mostrar.

// limparCampoQtd() = essa função ao ser acionada limpa o campo input digitado pelo usuario.

// limparCampoMostrar() = essa função ao ser acionada limpa os iténs mostrados anteriormente no campo #mostrar para que não se repitam esponencialmente.

// calculoAtualizado() = essa função soma todos os numeros que estão dentro da array precoAtualizado[].

// loop por todos os itens dentro da array lista[]

// mult = variavel feita para armazenar o calculo do item do loop vezes a sua quantidade

// formatado = variavel que armazena a maneira como será formatada a lista de item na tela.
function mostrarLista(){
    limparCampoQtd()
    limparCampoMostrar();
    calculoAtualizado()
    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    lista.forEach((item, index)=>{        
        
        let mult = item.qtd * item.valor
        let multAtacado = item.qtd * item.valorAtacado
        if(somaSorvetes < 40){
            let formatado = `<li value="${index}" class="index-excluir" >PICOLÉ ${item.descricao} R$ ${mult.toFixed(2)} X ${item.qtd} UND</li>` 
            mostrarHTML.innerHTML += formatado; 
            
        } else{
            let formatado = `<li value="${index}" class="index-excluir" >PICOLÉ ${item.descricao} R$ ${multAtacado.toFixed(2)} X ${item.qtd} UND</li>` 
            mostrarHTML.innerHTML += formatado; 
        }
        let indexExcluir = document.querySelectorAll('.index-excluir')
        indexExcluir.forEach((item)=>{

            item.addEventListener('click', ()=>{
                if(item.style.background === "blue"){
                    item.style.background = "white" 
                    
                } else{
                    item.style.background = "blue" 
                    botaoExcluir.addEventListener('click', ()=>{
                        excluirItemLista(item.value)
                    })
                }})
        })
        
    })
}

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
}
