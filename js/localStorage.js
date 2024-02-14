let arr = []
let salvarLocalStorage = []
// arr = salvarLocalStorage
// meuArray = salvarNoLocalStorage


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
  if(localStorage.meuArray){
    arr = JSON.parse(localStorage.getItem('meuArray'))
  }

arr.forEach((item)=>{
    console.log(item)
  })
}
  
function limparFechamento(){
  arr = [];
  localStorage.meuArray = JSON.stringify(arr);
  console.log('FECHAMENTO LIMPO!')
}