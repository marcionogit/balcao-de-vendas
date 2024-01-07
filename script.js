let quantidade = document.querySelector('#qtd');
let mostrarHTML = document.querySelector('#mostrar');
let preco = document.querySelector('#preco');
let botoesEscolha = document.querySelectorAll('.btn-escolha');

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
    calculoMostrar()

    lista.forEach((item)=>{        
        let mult = item.qtd * item.valor
        const formatado = `PICOLÉ ${item.descricao} R$ ${mult.toFixed(2)} X ${item.qtd} UND<br>` 
        mostrarHTML.innerHTML += formatado; 
     
    })
    
}

function calculoTotal(){
    const somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    resultado.push(somaSorvetes)
    preco.innerHTML = `R$ ${somaSorvetes.toFixed(2)}`
}

function calculoMostrar(){
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

 console.log(lista) 
 

