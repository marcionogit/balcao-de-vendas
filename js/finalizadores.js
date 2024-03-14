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
    }}

    let valoresPagamento = {
        dinheiro: +'',
        debito: +'',
        credito: +''
    }
    
// ativarModal() = sempre que o #btn-confirmar for clicado essa função será acionada

const mapaFinalizador = {
    'finalizadorDinheiro':finalizadorDinheiro,
    'finalizadorDebito':finalizadorDebito,
    'finalizadorCredito':finalizadorCredito,
}
const finalizadorFocado = document.querySelectorAll(".input-finalizador-focado");

finalizadorFocado.forEach((item)=>{
    
    item.addEventListener('focus', ()=>{
            let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
            let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);
        
            let opcaoFinalizador = item.getAttribute('id');
            
            if(somaSorvetesVarejo < 40){
                somaSorvetesVarejo = somaSorvetesVarejo
            } else{
                somaSorvetesVarejo = somaSorvetesAtacado
            }
            
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


function ativarModal(){
    let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
    let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);


  // Adicionando a class="ativo" no modal transformando seu display: none; => grid; ao CSS.
    finalizadores.classList.add('ativo');
  
  
btnConfirmar.addEventListener('click', ()=>{
    let valorFinalizador = +valoresPagamento.dinheiro + +valoresPagamento.debito + +valoresPagamento.credito;
    console.log(valorFinalizador)
    if(+valorFinalizador === +somaSorvetesVarejo){
        salvarLocalStorage.push(`VALOR: R$${somaSorvetesVarejo.toFixed(2)} | DINHEIRO:R$${valoresPagamento.dinheiro} |DEBITO:R$${valoresPagamento.debito} | CREDITO:R$${valoresPagamento.credito}`);    
        salvandoLocalStorage();
    } else{
        console.log('confirme o finalizador!')
        console.log(valorFinalizador)
        console.log(somaSorvetesAtacado)
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