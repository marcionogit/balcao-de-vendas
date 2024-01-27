
// lista = []; array onde será feita uma copia dos objetos(sorvetes) para que consigamos realizar os calculos.
let lista = [];

// precoAtualizado = []; array onde os resultados das multiplicações feitas serão armazenadas, para que no final consigamos soma-las para saber o total da compra.
let precoAtualizado = []

// #qtd = campo input.
let quantidade = document.querySelector('#qtd');

// #mostrar =  campo para mostrar a descrição dos iténs que estão sendo selecionados.
let mostrarHTML = document.querySelector('#mostrar');

// #preco = campo onde será mostrado o total da compra.
let preco = document.querySelector('#preco');

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






// leite = {}; = objeto com todas as especificações do picolé ao leite varejo. Esse padrão se repete ao longo de todos os outros produtos
const leite = {
    descricao: 'AO LEITE',
    valor: 2.80,
    qtd: 0
}

const fruta = {
    descricao: 'FRUTA',
    valor: 2.50,
    qtd: 0
}


const trufa = {
    descricao: 'TRUFA GELADA',
    valor: 4.80,
    qtd: 0
}




// picoleAoleite() = função que cria uma copia do objeto leite para realiazação dos calculos e amarzenamento nas array's "lista" e "precoAtualizado".

// Quando a função picoleAoLeite() for acionada, ela pegará a quantidade digitada no campo de input: #qtd, transformará de string para number e adicionará no lugar do lugar da propriedade qtd do objeto leite.

// Se o campo input não receber nenhum numero, adicionameros a ele o valor 1 para que consigamos fazer o calculo do produto. Por exemplo: 1 x 2,80 = 2,80.

// Copiando o objeto leite com "Object.assign({}, leite);".

// Adicionando o objeto copiado ao array lista.

// mult = variável para armazenar valor da multiplicação qtd * valor. 

// Lançamos mult para a array precoAtualizado para fazermos a soma de todos os itens. 

// mostrarLista() = chama a função pra escrever no campo #mostrar quais itens estão sendo registrados.
function picoleAoLeite(){
    leite.qtd = Number(quantidade.value);
    if(leite.qtd === 0){
        leite.qtd = 1;
    }
    const copiaAoleite = Object.assign({}, leite);
    lista.push(copiaAoleite);
    let mult = copiaAoleite.qtd * copiaAoleite.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}



// Repetimos o mesmo processo para todos os outros produtos
function picoleAoLeiteFruta(){
    fruta.qtd = Number(quantidade.value);
    if(fruta.qtd === 0){
        fruta.qtd = 1;
    }
    const copiaFruta = Object.assign({}, fruta);
    lista.push(copiaFruta);
    let mult = copiaFruta.qtd * copiaFruta.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleTrufaGelada(){
    trufa.qtd = Number(quantidade.value);
    if(trufa.qtd === 0){
        trufa.qtd = 1;
    }
    const copiaTrufaGelada = Object.assign({}, trufa);
    lista.push(copiaTrufaGelada);
    let mult = copiaTrufaGelada.qtd * copiaTrufaGelada.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}






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

    lista.forEach((item)=>{        
        let mult = item.qtd * item.valor
        const formatado = `PICOLÉ ${item.descricao} R$ ${mult.toFixed(2)} X ${item.qtd} UND<br>` 
        mostrarHTML.innerHTML += formatado; 
    })
}






// ativarModal() = sempre que o #btn-confirmar for clicado essa função será acionada
function ativarModal(){
    // Adicionando a class="ativo" no modal transformando seu display: none; => grid; ao CSS.
    finalizadores.classList.add('ativo');
    
    // somaSorvetes = soma todos os valores dentro da array precoAtualizado[].
    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });

    // Escutador para quando o campo #dinheiro for focado
    // valorAPagar = sempre que #dinheiro for focado será feito uma conta para saber quanto ainda resta a ser pago pelo cliente.
    finalizadorDinheiro.addEventListener('focus', ()=>{
        let valorAPagar = somaSorvetes - (+finalizadorDinheiro.value + +finalizadorDebito.value + +finalizadorCredito.value);

        // Se valorAPagar for igual a zero, eu quero que o valor digitado pelo usuário permaneça.
        // Senão no lugar ficará o restante da compra, ou seja "valorAPagar".
        // .select() = serve para quando o campo for focado, todos os numeros dentro sejam selecionados.
        if(valorAPagar === 0){
            finalizadorDinheiro.value = parseFloat(+finalizadorDinheiro.value).toFixed(2);
            finalizadorDinheiro.select();
        } else{
            finalizadorDinheiro.value = parseFloat(valorAPagar).toFixed(2);
            finalizadorDinheiro.select();

            // Quando o dinheiro deixar de ser focado e o valor for...
            finalizadorDinheiro.addEventListener('focusout', ()=>{
            // IGUAL o valor total da compra, o dinheiro receberá 0,00.
            if(+finalizadorDinheiro.value === somaSorvetes){
                finalizadorDinheiro.value = parseFloat(0.00).toFixed(2);
            } 

            // E se o valor digitado no campo de dinheiro for MAIOR que o valor total da compra.
            // troco receberá o valor digitado no campo menos o valor total da compra.
            // logo em seguida limpamos o campo dinheiro e mostramos o troco na tela com innerHTML.
            else if(+finalizadorDinheiro.value > somaSorvetes){
                let troco = +finalizadorDinheiro.value - somaSorvetes;
                finalizadorDinheiro.value = parseFloat(0.00).toFixed(2);
                mostrarTroco.innerHTML = `TROCO: R$ ${troco.toFixed(2)}`;
           
            } 

            // E se o valor digitado no campo de dinheiro for menor que a o valor total da compra queremos que o valor digitado permaneça.
            else if(+finalizadorDinheiro.value < somaSorvetes){
                finalizadorDinheiro.value = +finalizadorDinheiro.value;
            }
            })
        }
    })
   
    
    
    // O mesmo será feito para todas as formas de pagamento, com a unica diferença que elas não darão troco.
    finalizadorDebito.addEventListener('focus', ()=>{
        let valorAPagar = somaSorvetes - (+finalizadorDinheiro.value + +finalizadorDebito.value + +finalizadorCredito.value);

        if(valorAPagar === 0){
            finalizadorDebito.value = parseFloat(finalizadorDebito.value).toFixed(2);
            finalizadorDebito.select();    
        } else{
            finalizadorDebito.value = parseFloat(valorAPagar).toFixed(2);
            finalizadorDebito.select();
        }
        
        finalizadorDebito.addEventListener('focusout', ()=>{
        if(+finalizadorDebito.value < somaSorvetes){
            finalizadorDebito.value = +finalizadorDebito.value;
   
        }

        else if(+finalizadorDebito.value === somaSorvetes){
            btnConfirmar.addEventListener('click', ()=>{
                desativarModal();
            })
            finalizadorDebito.value = parseFloat(0.00).toFixed(2);
            
        } 

        // Se o valor no campo debito for maior que o valor total da compre dará um erro e o valor do campo mudará para zero novamente.
        else{
            finalizadorDebito.value = parseFloat(0.00).toFixed(2);
            console.log('ERRO!')
            console.log(somaSorvetes)
        }
    })
})


finalizadorCredito.addEventListener('focus', ()=>{
        let valorAPagar = somaSorvetes - (+finalizadorDinheiro.value + +finalizadorDebito.value + +finalizadorCredito.value);
        if(valorAPagar === 0){
            finalizadorCredito.value = parseFloat(finalizadorCredito.value).toFixed(2);
            finalizadorCredito.select();    
        } else{
            finalizadorCredito.value = parseFloat(valorAPagar).toFixed(2);
            finalizadorCredito.select();
        }
        

        finalizadorCredito.addEventListener('focusout', ()=>{
            if(+finalizadorCredito.value < somaSorvetes){
                finalizadorCredito.value = +finalizadorCredito.value; 
            }
    
            else if(+finalizadorCredito.value === somaSorvetes){
                btnConfirmar.addEventListener('click', ()=>{
                    desativarModal();
                })
                finalizadorCredito.value = parseFloat(0.00).toFixed(2);
            } 

            // Se o valor no campo credito for maior que o valor total da compre dará um erro e o valor do campo mudará para zero novamente.
            else{
                finalizadorCredito.value = parseFloat(0.00).toFixed(2);
                console.log('ERRO!');
                console.log(somaSorvetes);
            }
        })

        })
}


// destivarModal() = quando essa função for chamada a class="ativo"; será removida fazendo com que o modal volte a ficar escondido.
// Também irei resetar os campos DINHEIRO, DEBITO, CRÉDITO e TROCO.
function desativarModal(){
    finalizadores.classList.remove('ativo');
    finalizadorDinheiro.value = '';
    finalizadorDebito.value = '';
    finalizadorCredito.value = '';
    mostrarTroco.innerHTML = `TROCO: R$ 0.00`;
    }
    
    // calculoAtualizado() = essa função atualizará em tempo real o valor total da compra e o retornará no campo #preco.
    function calculoAtualizado(){
    const somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    preco.innerHTML = `R$ ${somaSorvetes.toFixed(2)}`
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
    lista= [];
    precoAtualizado= [];
    preco.innerHTML = `R$`
}

    
// finalizar() = quando essa função for chamada, ela somará quais valores estão dentro da array.
function finalizar(){
    // Se a array precoAtualizado não estiver vazia, somaSorvetes receberá a soma de todos os numeros que estiverem dentro dela.
    // Após isso chamamos a função que irá ativar o modal.
    if(precoAtualizado.length != ''){
        const somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
            return acumulador + elemento;
        });
        ativarModal();
    } 
    
    // Se a array precoAtualizado estiver vazia dará uma mensagem com um aviso.
    else{
        console.log('Nenhum item selecionado')
    }
}