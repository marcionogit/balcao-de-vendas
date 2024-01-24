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
const finalizadorDinheiro = document.querySelector('#dinheiro');
const finalizadorDebito = document.querySelector('#debito');
const finalizadorCredito = document.querySelector('#credito');
const btnConfirmar = document.querySelector('#btn-confirmar');
const mostrarTroco = document.querySelector('#mostrarTroco');

function ativarModal(){
    finalizadores.classList.add('ativo');

    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });

    
    
    finalizadorDinheiro.addEventListener('focus', ()=>{
        let valorAPagar = somaSorvetes - (+finalizadorDinheiro.value + +finalizadorDebito.value + +finalizadorCredito.value);

        if(valorAPagar === 0){
            finalizadorDinheiro.value = parseFloat(+finalizadorDinheiro.value).toFixed(2);
            finalizadorDinheiro.select();    
        } else{
            finalizadorDinheiro.value = parseFloat(valorAPagar).toFixed(2);
            finalizadorDinheiro.select();
            finalizadorDinheiro.addEventListener('focusout', ()=>{
            
            if(+finalizadorDinheiro.value === somaSorvetes){
                finalizadorDinheiro.value = parseFloat(0.00).toFixed(2);
                
            } else if(+finalizadorDinheiro.value > somaSorvetes){
                let troco = +finalizadorDinheiro.value - somaSorvetes;
                finalizadorDinheiro.value = parseFloat(0.00).toFixed(2);
                mostrarTroco.innerHTML = `TROCO: R$ ${troco.toFixed(2)}`;

            } else if(+finalizadorDinheiro.value < somaSorvetes){
                finalizadorDinheiro.value = +finalizadorDinheiro.value;
            }
            
        })
        }
    })
   
    
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
            
        } else{
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

            } else{
                finalizadorCredito.value = parseFloat(0.00).toFixed(2);
                console.log('ERRO!')
                console.log(somaSorvetes)
            }
        })

        })

        

}




function desativarModal(){
    finalizadores.classList.remove('ativo');
    finalizadorDinheiro.value = '';
    finalizadorDebito.value = '';
    finalizadorCredito.value = '';
    mostrarTroco.innerHTML = `TROCO: R$ 0.00`;
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
