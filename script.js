
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

const retro = {
    descricao: 'RETRO',
    valor: 1.50,
    qtd: 0
}

const astros = {
    descricao: 'ASTROS',
    valor: 4.50,
    qtd: 0
}

const natturale = {
    descricao: 'NATTURALE',
    valor: 3.90,
    qtd: 0
}

const acai = {
    descricao: 'AÇAI',
    valor: 4.75,
    qtd: 0
}

const snack = {
    descricao: 'SNACK',
    valor: 5.90,
    qtd: 0
}

const fondue = {
    descricao: 'FONDUE',
    valor: 3.80,
    qtd: 0
}

const love = {
    descricao: 'LOVE',
    valor: 3.00,
    qtd: 0
}

const unicornio = {
    descricao: 'UNICORNIO',
    valor: 3.90,
    qtd: 0
}

const limaoSiciliano = {
    descricao: 'LIMÃO SICILIANO',
    valor: 4.90,
    qtd: 0
}

const alpha = {
    descricao: 'ALPHA PREMIUM',
    valor: 5.90,
    qtd: 0
}

const belgaBrulee = {
    descricao: 'BELGA / BRULEE',
    valor: 7.50,
    qtd: 0
}

const paletas = {
    descricao: 'PALETAS',
    valor: 6.90,
    qtd: 0
}

const brownieCenoura = {
    descricao: 'BROWNIE / CENOURA',
    valor: 8.50,
    qtd: 0
}

const poteCopao = {
    descricao: 'COPÃO',
    valor: 5.75,
    qtd: 0
}

const poteSundae = {
    descricao: 'SUNDAE',
    valor: 5.90,
    qtd: 0
}

const acaiGranola = {
    descricao: 'AÇAI C/ GRANOLA',
    valor: 8.90,
    qtd: 0
}

const poteDuo1eMeio = {
    descricao: 'POTE DUO 1,5L',
    valor: 15.90,
    qtd: 0
}

const pote2l = {
    descricao: 'POTE 2L',
    valor: 19.90,
    qtd: 0
}

const specialle = {
    descricao: 'POTE SPECIALLE',
    valor: 26.90,
    qtd: 0
}

const poteAcai2l = {
    descricao: 'POTE AÇAI 2L',
    valor: 37.90,
    qtd: 0
}

const acaiZero = {
    descricao: 'POTE AÇAI ZERO',
    valor: 37.90,
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
function picoleFruta(){
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


function picoleRetro(){
    retro.qtd = Number(quantidade.value);
    if(retro.qtd === 0){
        retro.qtd = 1;
    }
    const copiaRetro = Object.assign({}, retro);
    lista.push(copiaRetro);
    let mult = copiaRetro.qtd * copiaRetro.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleAstros(){
    astros.qtd = Number(quantidade.value);
    if(astros.qtd === 0){
        astros.qtd = 1;
    }
    const copiaAstros = Object.assign({}, astros);
    lista.push(copiaAstros);
    let mult = copiaAstros.qtd * copiaAstros.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleNatturale(){
    natturale.qtd = Number(quantidade.value);
    if(natturale.qtd === 0){
        natturale.qtd = 1;
    }
    const copiaNatturale = Object.assign({}, natturale);
    lista.push(copiaNatturale);
    let mult = copiaNatturale.qtd * copiaNatturale.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleAcai(){
    acai.qtd = Number(quantidade.value);
    if(acai.qtd === 0){
        acai.qtd = 1;
    }
    const copiaAcai = Object.assign({}, acai);
    lista.push(copiaAcai);
    let mult = copiaAcai.qtd * copiaAcai.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleSnack(){
    snack.qtd = Number(quantidade.value);
    if(snack.qtd === 0){
        snack.qtd = 1;
    }
    const copiaSnack = Object.assign({}, snack);
    lista.push(copiaSnack);
    let mult = copiaSnack.qtd * copiaSnack.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleFondue(){
    fondue.qtd = Number(quantidade.value);
    if(fondue.qtd === 0){
        fondue.qtd = 1;
    }
    const copiaFondue = Object.assign({}, fondue);
    lista.push(copiaFondue);
    let mult = copiaFondue.qtd * copiaFondue.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleLove(){
    love.qtd = Number(quantidade.value);
    if(love.qtd === 0){
        love.qtd = 1;
    }
    const copiaLove = Object.assign({}, love);
    lista.push(copiaLove);
    let mult = copiaLove.qtd * copiaLove.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleUnicornio(){
    unicornio.qtd = Number(quantidade.value);
    if(unicornio.qtd === 0){
        unicornio.qtd = 1;
    }
    const copiaUnicornio = Object.assign({}, unicornio);
    lista.push(copiaUnicornio);
    let mult = copiaUnicornio.qtd * copiaUnicornio.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleLimaoSiciliano(){
    limaoSiciliano.qtd = Number(quantidade.value);
    if(limaoSiciliano.qtd === 0){
        limaoSiciliano.qtd = 1;
    }
    const copiaLimaoSiciliano = Object.assign({}, limaoSiciliano);
    lista.push(copiaLimaoSiciliano);
    let mult = copiaLimaoSiciliano.qtd * copiaLimaoSiciliano.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleAlpha(){
    alpha.qtd = Number(quantidade.value);
    if(alpha.qtd === 0){
        alpha.qtd = 1;
    }
    const copiaAlpha = Object.assign({}, alpha);
    lista.push(copiaAlpha);
    let mult = copiaAlpha.qtd * copiaAlpha.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleBelgaBrulee(){
    belgaBrulee.qtd = Number(quantidade.value);
    if(belgaBrulee.qtd === 0){
        belgaBrulee.qtd = 1;
    }
    const copiaBelgaBrulee = Object.assign({}, belgaBrulee);
    lista.push(copiaBelgaBrulee);
    let mult = copiaBelgaBrulee.qtd * copiaBelgaBrulee.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picolePaleta(){
    paletas.qtd = Number(quantidade.value);
    if(paletas.qtd === 0){
        paletas.qtd = 1;
    }
    const copiaPaletas = Object.assign({}, paletas);
    lista.push(copiaPaletas);
    let mult = copiaPaletas.qtd * copiaPaletas.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function picoleBrownieCenoura(){
    brownieCenoura.qtd = Number(quantidade.value);
    if(brownieCenoura.qtd === 0){
        brownieCenoura.qtd = 1;
    }
    const copiaBrownieCenoura = Object.assign({}, brownieCenoura);
    lista.push(copiaBrownieCenoura);
    let mult = copiaBrownieCenoura.qtd * copiaBrownieCenoura.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function potinhoCopao(){
    poteCopao.qtd = Number(quantidade.value);
    if(poteCopao.qtd === 0){
        poteCopao.qtd = 1;
    }
    const copiaPoteCopao = Object.assign({}, poteCopao);
    lista.push(copiaPoteCopao);
    let mult = copiaPoteCopao.qtd * copiaPoteCopao.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function potinhoSundae(){
    poteSundae.qtd = Number(quantidade.value);
    if(poteSundae.qtd === 0){
        poteSundae.qtd = 1;
    }
    const copiaPoteSundae = Object.assign({}, poteSundae);
    lista.push(copiaPoteSundae);
    let mult = copiaPoteSundae.qtd * copiaPoteSundae.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function potinhoAcai(){
    acaiGranola.qtd = Number(quantidade.value);
    if(acaiGranola.qtd === 0){
        acaiGranola.qtd = 1;
    }
    const copiaAcaiGranola = Object.assign({}, acaiGranola);
    lista.push(copiaAcaiGranola);
    let mult = copiaAcaiGranola.qtd * copiaAcaiGranola.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function poteDuo(){
    poteDuo1eMeio.qtd = Number(quantidade.value);
    if(poteDuo1eMeio.qtd === 0){
        poteDuo1eMeio.qtd = 1;
    }
    const copiaPoteDuo1eMeio = Object.assign({}, poteDuo1eMeio);
    lista.push(copiaPoteDuo1eMeio);
    let mult = copiaPoteDuo1eMeio.qtd * copiaPoteDuo1eMeio.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function pote2L(){
    pote2l.qtd = Number(quantidade.value);
    if(pote2l.qtd === 0){
        pote2l.qtd = 1;
    }
    const copiaPote2l = Object.assign({}, pote2l);
    lista.push(copiaPote2l);
    let mult = copiaPote2l.qtd * copiaPote2l.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function poteSpecialle(){
    specialle.qtd = Number(quantidade.value);
    if(specialle.qtd === 0){
        specialle.qtd = 1;
    }
    const copiaSpecialle = Object.assign({}, specialle);
    lista.push(copiaSpecialle);
    let mult = copiaSpecialle.qtd * copiaSpecialle.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function poteAcai2L(){
    poteAcai2l.qtd = Number(quantidade.value);
    if(poteAcai2l.qtd === 0){
        poteAcai2l.qtd = 1;
    }
    const copiaPoteAcai2l = Object.assign({}, poteAcai2l);
    lista.push(copiaPoteAcai2l);
    let mult = copiaPoteAcai2l.qtd * copiaPoteAcai2l.valor
    precoAtualizado.push(Number(mult))
    mostrarLista()
}


function poteAcaiZero(){
    acaiZero.qtd = Number(quantidade.value);
    if(acaiZero.qtd === 0){
        acaiZero.qtd = 1;
    }
    const copiaAcaiZero = Object.assign({}, acaiZero);
    lista.push(copiaAcaiZero);
    let mult = copiaAcaiZero.qtd * copiaAcaiZero.valor
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