let quantidade = document.querySelector('#qtd');
let mostrarHTML = document.querySelector('#mostrar');
let preco = document.querySelector('#preco');
const finalizadores = document.querySelector('.finalizador');
let botoesEscolha = document.querySelectorAll('.btn-escolha');
const btnsPagamentos = document.querySelectorAll('.finalizadores li');
const btnCancelar = document.querySelector('#btn-cancelar');


let lista = [];
let precoAtualizado = []
let resultado = [];



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


function mostrarLista(){
    limparCampo()
    limparCampoMostrar();
    calculoAtualizado()

    lista.forEach((item)=>{        
        let mult = item.qtd * item.valor
        const formatado = `PICOLÉ ${item.descricao} R$ ${mult.toFixed(2)} X ${item.qtd} UND<br>` 
        mostrarHTML.innerHTML += formatado; 
     
    })
    
}

function ativarModal(){
    finalizadores.classList.add('ativo');
}


const finalizadorDinheiro = document.querySelector('#dinheiro');
const finalizadorDebito = document.querySelector('#debito');
const finalizadorCredito = document.querySelector('#credito');
const btnConfirmar = document.querySelector('#btn-confirmar');
const mostrarTroco = document.querySelector('#mostrarTroco');

function dinheiroFocado(){    
    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
    return acumulador + elemento;
    });
    finalizadorDinheiro.value = parseFloat(somaSorvetes).toFixed(2);
    finalizadorDinheiro.select();

    finalizadorDinheiro.addEventListener('focusout', ()=>{
        if(finalizadorDinheiro.value < somaSorvetes){
            finalizadorDebito.addEventListener('focus', ()=>{
                let troco = finalizadorDinheiro.value - somaSorvetes; 
                finalizadorCredito.value = parseFloat(0.00).toFixed(2);
                troco = troco - (troco * 2)
                finalizadorDebito.value = parseFloat(troco).toFixed(2);
                finalizadorDebito.select();                
            })
            
            finalizadorCredito.addEventListener('focus', ()=>{
                let troco = finalizadorDinheiro.value - somaSorvetes; 
                finalizadorDebito.value = parseFloat(0.00).toFixed(2);
                troco = troco - (troco * 2)
                finalizadorCredito.value = parseFloat(troco).toFixed(2);
                finalizadorCredito.select();
            })
            btnConfirmar.addEventListener('click', ()=>{
                mostrarTroco.innerHTML = `TROCO: R$ ${(0.00).toFixed(2)}`;
            })
        } else{
            let troco = finalizadorDinheiro.value - somaSorvetes; 
            console.log(`Seu troco é ${troco}`)
            finalizadorDebito.addEventListener('focus', ()=>{
                finalizadorDebito.value = parseFloat(0.00).toFixed(2);
                finalizadorDebito.select();
            })
            finalizadorCredito.addEventListener('focus', ()=>{
                finalizadorCredito.value = parseFloat(0.00).toFixed(2);
                finalizadorCredito.select();
            })
            btnConfirmar.addEventListener('click', ()=>{
                mostrarTroco.innerHTML = `TROCO: R$ ${troco.toFixed(2)}`;
            })
        }
    })
}

function debitoFocado(){
    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
    return acumulador + elemento;
    });
    finalizadorDebito.value = parseFloat(somaSorvetes).toFixed(2);
    finalizadorDebito.select()
}

function creditoFocado(){
    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
    return acumulador + elemento;
    });
    finalizadorCredito.value = parseFloat(somaSorvetes).toFixed(2);
    finalizadorCredito.select()
};

function desativarModal(){
    finalizadores.classList.remove('ativo');
    finalizadorDinheiro.value = '';
    finalizadorDebito.value = '';
    finalizadorCredito.value = '';
    }

function finalizar(){
    if(precoAtualizado.length != ''){
        const somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
            return acumulador + elemento;
        });
        resultado.push(somaSorvetes)
        preco.innerHTML = `R$ ${somaSorvetes.toFixed(2)}`
        ativarModal();
    } else{
        console.log('Nenhum item selecionado')
    }
}

function calculoAtualizado(){
    const somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    preco.innerHTML = `R$ ${somaSorvetes.toFixed(2)}`
}

function limparCampo(){
    quantidade.value = '';
}

function limparCampoMostrar(){
    mostrarHTML.innerHTML = '';
}

function limparCampoBotao(){
    limparCampoMostrar();
    lista= [];
    precoAtualizado= [];
    resultado = [];
    preco.innerHTML = `R$`
}
 