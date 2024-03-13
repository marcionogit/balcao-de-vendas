let arr = []
let salvarLocalStorage = []
const mostrarVendasLocalStorage = document.querySelector('.mostrar-vendas-salvas');
const cancelaMostrarSalva = document.querySelector('#cancelarVendasSalvas');

function salvandoLocalStorage(){
  console.log('salvou!')
  lista= [];
  precoAtualizado= [];
  desativarModal()
  preco.innerHTML = `R$ 0.00`
  window.location.reload()
  limparCampoMostrar()
  limparCampoQtd()

  valorAPagar = 0

  if(localStorage.meuArray){
    arr = JSON.parse(localStorage.getItem('meuArray'))
  }

  arr.push(salvarLocalStorage)
  salvarLocalStorage = []
  localStorage.meuArray = JSON.stringify(arr);
}

function mostrarVendasSalvas(){
    mostrarVendasLocalStorage.classList.add('ativo')
    
    if(localStorage.meuArray){
      arr = JSON.parse(localStorage.getItem('meuArray'))
      console.log(arr)
        for(let i in arr){
      let p = document.createElement('p');
      p.innerHTML = arr[i];
      mostrarVendasLocalStorage.append(p);
      
      

      cancelaMostrarSalva.addEventListener('click', ()=>{
        mostrarVendasLocalStorage.classList.remove('ativo');
        p.remove();
        document.querySelector('#vendas-salvas').disabled = false;
      })
      document.querySelector('#vendas-salvas').disabled = true;
    }
    } 
  }
  
  function limparFechamento(){
    arr = [];
    localStorage.meuArray = JSON.stringify(arr);
    console.log('FECHAMENTO LIMPO!')
  }
