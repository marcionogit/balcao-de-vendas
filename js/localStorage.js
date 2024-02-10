let salvarLocalStorage = []

function salvandoLocalStorage(){
  console.log('salvou!')
  lista= [];
  precoAtualizado= [];
  desativarModal()
  preco.innerHTML = `R$ 0.00`
  // window.location.reload()
  limparCampoMostrar()
  limparCampoQtd()
  console.log(salvarLocalStorage)
  valorAPagar = 0

  if(localStorage.salvoNoLocalStorage){
    salvarLocalStorage = JSON.parse(localStorage.getItem('salvoNoLocalStorage'))
  }
  localStorage.salvoNoLocalStorage = JSON.stringify(salvarLocalStorage);
}

function mostrarVendasSalvas(){
  if(localStorage.salvoNoLocalStorage){
    salvarLocalStorage = JSON.parse(localStorage.getItem('salvoNoLocalStorage'))
  }

  for(let i in salvarLocalStorage){
    console.log(salvarLocalStorage[i])
  }
}
  