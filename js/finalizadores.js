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





// ativarModal() = sempre que o #btn-confirmar for clicado essa função será acionada
function ativarModal(){
  // Adicionando a class="ativo" no modal transformando seu display: none; => grid; ao CSS.
  finalizadores.classList.add('ativo');
  
  // somaSorvetes = soma todos os valores dentro da array precoAtualizado[].
  somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
      return acumulador + elemento;
  });
  somaSorvetesAtacado = precoAtualizadoAtacado.reduce((acumulador, elemento) => {
      return acumulador + elemento;
  });

  // Escutador para quando o campo #dinheiro for focado
  // valorAPagar = sempre que #dinheiro for focado será feito uma conta para saber quanto ainda resta a ser pago pelo cliente.
  finalizadorDinheiro.addEventListener('focus', ()=>{
      if(somaSorvetes < 40){
          somaSorvetes = somaSorvetes
      } else{
          somaSorvetes = somaSorvetesAtacado
      }
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
              mostrarTroco.innerHTML = `R$ ${troco.toFixed(2)}`;
         
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
      if(somaSorvetes < 40){
          somaSorvetes = somaSorvetes
      } else{
          somaSorvetes = somaSorvetesAtacado
      }
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
  if(somaSorvetes < 40){
      somaSorvetes = somaSorvetes
  } else{
      somaSorvetes = somaSorvetesAtacado
  }
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
  mostrarTroco.innerHTML = `R$ 0.00`;
}