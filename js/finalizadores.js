// finalizar() = quando essa função for chamada, ela somará quais valores estão dentro da array.
function finalizar(){
    // Se a array precoAtualizado não estiver vazia, somaSorvetesAtacado receberá a soma de todos os numeros que estiverem dentro dela.
    // Após isso chamamos a função que irá ativar o modal.
    if(precoAtualizado.length != ''){
        ativarModal();
    } 
    // Se a array precoAtualizado estiver vazia dará uma mensagem com um aviso.
    else{
        console.log('Selecione algum produto')
    }
}

// valoresPagamento = {} => É um objeto criado para receber o valor de cada finalizador quando a tecla enter dor precionada.
let valoresPagamento = {
    dinheiro: +'',
    debito: +'',
    credito: +''
}
    
// mapaFinalizador = {} => Objeto feito para mapear para qual operador o valor resgatado pelo finalizador terá de ser adicionado. Ele pega a String recebida e a transforma no objeto.
const mapaFinalizador = {
    'finalizadorDinheiro':finalizadorDinheiro,
    'finalizadorDebito':finalizadorDebito,
    'finalizadorCredito':finalizadorCredito,
}

// finalizadorFocado =  NodeList com todos os inputs dos finalizadores
const finalizadorFocado = document.querySelectorAll(".input-finalizador-focado");

// Aqui pegamos a NodeList acima e fazemos um loop por todos os seus itens
finalizadorFocado.forEach((item)=>{

    // Para cada item do loop deixamos um escutador para acionar uma função anônima.
    item.addEventListener('focus', ()=>{
    

        // somaSorvetesVarejo = recebe o valor da função somaTotalProdutos que fará a soma da array precoAtualizado.
        // somaSorvetesAtacado = recebe o valor da função somaTotalProdutos que fará a soma da array precoAtualizadoAtacado.
        // opcaoFinalizador = pega o atributo id do item focado para utilizarmos no mapaFinalizador.
        let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
        let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);   
        let opcaoFinalizador = item.getAttribute('id');
    
        
        // Aqui verificamos se o valor da compra ainda é inferior que R$40,00. Se sim ao invés de utilizarmos os preços padrões de varejo passamos a utilizar os de atacado.
        let atributo = btnAtacado.getAttribute('class');
        let classAtacado = 'virarAtacado';
        if(somaSorvetesVarejo >= 40 || atributo.includes(classAtacado)){
            somaSorvetesVarejo = somaSorvetesAtacado;
        } else{
            somaSorvetesVarejo = somaSorvetesVarejo;
        }

        // if()){
        //     somaSorvetesVarejo = somaSorvetesAtacado;
        // } else{
        //     somaSorvetesVarejo = somaSorvetesVarejo; 
        // }
        
        // valorAPagar = utilizamos para que saibamos quanto da compra ainda falta a ser pago.
        let valorAPagar = somaSorvetesVarejo - (+valoresPagamento.dinheiro + +valoresPagamento.debito + +valoresPagamento.credito);
        if(somaSorvetesVarejo === valorAPagar){
            item.value = somaSorvetesVarejo;
        }   else{
            item.value = valorAPagar;
        }
        item.select();
            
                
        item.addEventListener('keyup', (event)=>{
            if (event.key === 'Enter') {
                event.preventDefault();
                if(opcaoFinalizador === 'finalizadorDinheiro'){
                    valoresPagamento.dinheiro = item.value
                    item.value = valoresPagamento.dinheiro
                } else if(opcaoFinalizador === 'finalizadorDebito'){
                    valoresPagamento.debito = item.value
                    item.value = valoresPagamento.debito
                } else{
                    valoresPagamento.credito = item.value
                    item.value = valoresPagamento.credito
                }                 
                item.blur();                     
            } 
        })
            
    
        item.addEventListener('focusout', ()=>{
            if(opcaoFinalizador === 'finalizadorDinheiro'){
                if(valoresPagamento.dinheiro === item.value){
                    item.value = valoresPagamento.dinheiro;
                }  else{
                    // mostrarTroco.innerHTML = `R$ 0.00`;
                    item.value = ''
                }
            } else if(opcaoFinalizador === 'finalizadorDebito'){
                if(valoresPagamento.debito === item.value){
                    item.value = valoresPagamento.debito;
                }  else{
                    // mostrarTroco.innerHTML = `R$ 0.00`;
                    item.value = ''
                }
            } else {
                if(valoresPagamento.credito === item.value){
                    item.value = valoresPagamento.credito;
                }  else{
                    // mostrarTroco.innerHTML = `R$ 0.00`;
                    item.value = ''
                }
            }

        })
        
    })
})

// ativarModal() = sempre que o #btn-confirmar for clicado essa função será acionada
function ativarModal(){
    let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
    let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);

    
    // Adicionando a class="ativo" no modal transformando seu display: none; => grid; ao CSS.
    finalizadores.classList.add('ativo', 'animacao');
    
    if(somaSorvetesVarejo < 40){
        somaSorvetesVarejo = somaSorvetesVarejo
    } else{
        somaSorvetesVarejo = somaSorvetesAtacado
    }
  
btnConfirmar.addEventListener('click', ()=>{
    let valorFinalizador = +valoresPagamento.dinheiro + +valoresPagamento.debito + +valoresPagamento.credito;
    console.log('Valor do finalizador:'+valorFinalizador)
    console.log('Valor da soma:'+somaSorvetesVarejo)
    if(+valorFinalizador === +somaSorvetesVarejo || +valorFinalizador === +somaSorvetesAtacado){

        let salvarPagamento = {
            dinheiro: +valoresPagamento.dinheiro,
            debito: +valoresPagamento.debito,
            credito: +valoresPagamento.credito,
            itens: lista
        }
        salvarLocalStorage.push(salvarPagamento);   
        salvandoLocalStorage();
    } else{
        console.log('confirme o finalizador!')
        console.log(valorFinalizador)
        console.log(somaSorvetesAtacado)
    }
    let salvarPagamento = {
        dinheiro: +'',
        debito: +'',
        credito: +'',
        itens: lista
    }
  })
}

function desativarModal(){
    finalizadores.classList.remove('ativo');
    valoresPagamento.dinheiro = +'';
    valoresPagamento.debito = +'';
    valoresPagamento.credito = +'';
    mostrarTroco.innerHTML = `R$ 0.00`;
}