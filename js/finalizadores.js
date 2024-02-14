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
      
  }
}



let valoresPagamento = {
    dinheiro: +'',
    debito: +'',
    credito: +''
}

// ativarModal() = sempre que o #btn-confirmar for clicado essa função será acionada
function focoDinheiro(){
    // somaSorvetes = soma todos os valores dentro da array precoAtualizado[].
    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    somaSorvetesAtacado = precoAtualizadoAtacado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    finalizadorDinheiro.select()

    if(somaSorvetes < 40){
        somaSorvetes = somaSorvetes
      } else{
          somaSorvetes = somaSorvetesAtacado
      }
  let valorAPagar = somaSorvetes - (+finalizadorDinheiro.value + +finalizadorDebito.value + +finalizadorCredito.value);

     if(finalizadorDinheiro.value === ''|| finalizadorDinheiro.value === '0.00'){
      finalizadorDinheiro.value = valorAPagar.toFixed(2);
        
      
        finalizadorDinheiro.select()
      } else if(finalizadorDinheiro.value === valoresPagamento.credito){
          finalizadorDinheiro.value = valoresPagamento.credito;
      } if(valorAPagar === 0){
          finalizadorDinheiro.value = ''
      }


    finalizadorDinheiro.addEventListener('keyup', (event)=>{
        if (event.key === 'Enter') {
            event.preventDefault();
            valoresPagamento.credito = +finalizadorDinheiro.value
            finalizadorDinheiro.blur();
            
            
        } 
        })
        

        finalizadorDinheiro.addEventListener('focusout', ()=>{
            if(valoresPagamento.credito === +finalizadorDinheiro.value){
                finalizadorDinheiro.value = valoresPagamento.credito;
            } else{
                finalizadorDinheiro.value = ''
                
            }
        })
    }
    
    




function focoDebito(){
    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    somaSorvetesAtacado = precoAtualizadoAtacado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    finalizadorDebito.select()

if(somaSorvetes < 40){
        somaSorvetes = somaSorvetes
      } else{
          somaSorvetes = somaSorvetesAtacado
      }
  let valorAPagar = somaSorvetes - (+finalizadorDinheiro.value + +finalizadorDebito.value + +finalizadorCredito.value);

     if(finalizadorDebito.value === ''|| finalizadorDebito.value === '0.00'){
      finalizadorDebito.value = valorAPagar.toFixed(2);
        
      
        finalizadorDebito.select()
      } else if(finalizadorDebito.value === valoresPagamento.dinheiro){
          finalizadorDebito.value = valoresPagamento.debito;
      } if(valorAPagar === 0){
          finalizadorDebito.value = ''
      }

    finalizadorDebito.addEventListener('keyup', (event)=>{
        if (event.key === 'Enter') {
            event.preventDefault();
            valoresPagamento.debito = +finalizadorDebito.value
            finalizadorDebito.blur();     
        } 
        })
        

        finalizadorDebito.addEventListener('focusout', ()=>{
            if(valoresPagamento.debito === +finalizadorDebito.value){
                finalizadorDebito.value = valoresPagamento.debito;
            } else{
                finalizadorDebito.value = '' 
            }
          })

      }





function focoCredito(){
    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    somaSorvetesAtacado = precoAtualizadoAtacado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
finalizadorCredito.select()

if(somaSorvetes < 40){
    somaSorvetes = somaSorvetes
  } else{
      somaSorvetes = somaSorvetesAtacado
  }
let valorAPagar = somaSorvetes - (+finalizadorDinheiro.value + +finalizadorDebito.value + +finalizadorCredito.value);

 if(finalizadorCredito.value === ''|| finalizadorCredito.value === '0.00'){
  finalizadorCredito.value = valorAPagar.toFixed(2);
    
  
    finalizadorCredito.select()
  } else if(+finalizadorCredito.value === valoresPagamento.dinheiro){
      finalizadorCredito.value = +valoresPagamento.credito;
  } if(valorAPagar === 0){
      finalizadorCredito.value = ''
  }


finalizadorCredito.addEventListener('keyup', (event)=>{
    if (event.key === 'Enter') {
        event.preventDefault();
        valoresPagamento.credito= +finalizadorCredito.value
        finalizadorCredito.blur();   
    } 
    })
    

    finalizadorCredito.addEventListener('focusout', ()=>{
        if(valoresPagamento.credito === +finalizadorCredito.value){
            finalizadorCredito.value = valoresPagamento.credito;
        } else{
            finalizadorCredito.value = ''
        }
        })
    }
function ativarModal(){
    somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
    somaSorvetesAtacado = precoAtualizadoAtacado.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });
  // Adicionando a class="ativo" no modal transformando seu display: none; => grid; ao CSS.
  finalizadores.classList.add('ativo');
  

   
btnConfirmar.addEventListener('click', ()=>{
    let valorFinalizador = valoresPagamento.dinheiro + valoresPagamento.debito + valoresPagamento.credito;
    if(+valorFinalizador.toFixed(1) === +somaSorvetes.toFixed(1)){
        salvarLocalStorage.push(`DINHEIRO:${finalizadorDinheiro.value} DEBITO:${finalizadorDebito.value} CREDITO:${finalizadorCredito.value}`);
        salvandoLocalStorage();
    } else{
        console.log('confirme o finalizador!')
        console.log(valorFinalizador)
        console.log(somaSorvetes)
    }
  })
}




function desativarModal(){
  finalizadorDinheiro.removeEventListener('focus', ()=>{})
  finalizadorDebito.removeEventListener('focus', ()=>{})
  finalizadorCredito.removeEventListener('focus', ()=>{})
  finalizadores.classList.remove('ativo');
  finalizadorDinheiro.value = '';
  finalizadorDebito.value = '';
  finalizadorCredito.value = '';
  
  mostrarTroco.innerHTML = `R$ 0.00`;
}