
// picoleAoleite() = função que cria uma copia do objeto leite para realiazação dos calculos e amarzenamento nas array's "lista" e "precoAtualizado".

// Quando a função picoleAoLeite() for acionada, ela pegará a quantidade digitada no campo de input: #qtd, transformará de string para number e adicionará no lugar do lugar da propriedade qtd do objeto leite.

// Se o campo input não receber nenhum numero, adicionameros a ele o valor 1 para que consigamos fazer o calculo do produto. Por exemplo: 1 x 2,80 = 2,80.

// Copiando o objeto leite com "Object.assign({}, leite);".

// Adicionando o objeto copiado ao array lista.

// mult = variável para armazenar valor da multiplicação qtd * valor. 

// Lançamos mult para a array precoAtualizado para fazermos a soma de todos os itens. 

// mostrarLista() = chama a função pra escrever no campo #mostrar quais itens estão sendo registrados.
function picoleAoLeite(){
  leite.qtd = Number(quantidade.value);
  if(leite.qtd === 0){
      leite.qtd = 1;
  }
  const copiaAoleite = Object.assign({}, leite);
  lista.push(copiaAoleite);
  let mult = copiaAoleite.qtd * copiaAoleite.valor
  let multAtacado = copiaAoleite.qtd * copiaAoleite.valorAtacado;
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}



// Repetimos o mesmo processo para todos os outros produtos
function picoleFruta(){
  fruta.qtd = Number(quantidade.value);
  if(fruta.qtd === 0){
      fruta.qtd = 1;
  }
  const copiaFruta = Object.assign({}, fruta);
  lista.push(copiaFruta);
  let mult = copiaFruta.qtd * copiaFruta.valor
  let multAtacado = copiaFruta.qtd * copiaFruta.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
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
  let multAtacado = copiaTrufaGelada.qtd * copiaTrufaGelada.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleRetro(){
  retro.qtd = Number(quantidade.value);
  if(retro.qtd === 0){
      retro.qtd = 1;
  }
  const copiaRetro = Object.assign({}, retro);
  lista.push(copiaRetro);
  let mult = copiaRetro.qtd * copiaRetro.valor
  let multAtacado = copiaRetro.qtd * copiaRetro.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleAstros(){
  astros.qtd = Number(quantidade.value);
  if(astros.qtd === 0){
      astros.qtd = 1;
  }
  const copiaAstros = Object.assign({}, astros);
  lista.push(copiaAstros);
  let mult = copiaAstros.qtd * copiaAstros.valor
  let multAtacado = copiaAstros.qtd * copiaAstros.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleNatturale(){
  natturale.qtd = Number(quantidade.value);
  if(natturale.qtd === 0){
      natturale.qtd = 1;
  }
  const copiaNatturale = Object.assign({}, natturale);
  lista.push(copiaNatturale);
  let mult = copiaNatturale.qtd * copiaNatturale.valor
  let multAtacado = copiaNatturale.qtd * copiaNatturale.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleAcai(){
  acai.qtd = Number(quantidade.value);
  if(acai.qtd === 0){
      acai.qtd = 1;
  }
  const copiaAcai = Object.assign({}, acai);
  lista.push(copiaAcai);
  let mult = copiaAcai.qtd * copiaAcai.valor
  let multAtacado = copiaAcai.qtd * copiaAcai.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleSnack(){
  snack.qtd = Number(quantidade.value);
  if(snack.qtd === 0){
      snack.qtd = 1;
  }
  const copiaSnack = Object.assign({}, snack);
  lista.push(copiaSnack);
  let mult = copiaSnack.qtd * copiaSnack.valor
  let multAtacado = copiaSnack.qtd * copiaSnack.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleFondue(){
  fondue.qtd = Number(quantidade.value);
  if(fondue.qtd === 0){
      fondue.qtd = 1;
  }
  const copiaFondue = Object.assign({}, fondue);
  lista.push(copiaFondue);
  let mult = copiaFondue.qtd * copiaFondue.valor
  let multAtacado = copiaFondue.qtd * copiaFondue.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleLove(){
  love.qtd = Number(quantidade.value);
  if(love.qtd === 0){
      love.qtd = 1;
  }
  const copiaLove = Object.assign({}, love);
  lista.push(copiaLove);
  let mult = copiaLove.qtd * copiaLove.valor
  let multAtacado = copiaLove.qtd * copiaLove.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleUnicornio(){
  unicornio.qtd = Number(quantidade.value);
  if(unicornio.qtd === 0){
      unicornio.qtd = 1;
  }
  const copiaUnicornio = Object.assign({}, unicornio);
  lista.push(copiaUnicornio);
  let mult = copiaUnicornio.qtd * copiaUnicornio.valor
  let multAtacado = copiaUnicornio.qtd * copiaUnicornio.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleLimaoSiciliano(){
  limaoSiciliano.qtd = Number(quantidade.value);
  if(limaoSiciliano.qtd === 0){
      limaoSiciliano.qtd = 1;
  }
  const copiaLimaoSiciliano = Object.assign({}, limaoSiciliano);
  lista.push(copiaLimaoSiciliano);
  let mult = copiaLimaoSiciliano.qtd * copiaLimaoSiciliano.valor
  let multAtacado = copiaLimaoSiciliano.qtd * copiaLimaoSiciliano.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleAlpha(){
  alpha.qtd = Number(quantidade.value);
  if(alpha.qtd === 0){
      alpha.qtd = 1;
  }
  const copiaAlpha = Object.assign({}, alpha);
  lista.push(copiaAlpha);
  let mult = copiaAlpha.qtd * copiaAlpha.valor
  let multAtacado = copiaAlpha.qtd * copiaAlpha.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleBelgaBrulee(){
  belgaBrulee.qtd = Number(quantidade.value);
  if(belgaBrulee.qtd === 0){
      belgaBrulee.qtd = 1;
  }
  const copiaBelgaBrulee = Object.assign({}, belgaBrulee);
  lista.push(copiaBelgaBrulee);
  let mult = copiaBelgaBrulee.qtd * copiaBelgaBrulee.valor
  let multAtacado = copiaBelgaBrulee.qtd * copiaBelgaBrulee.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picolePaleta(){
  paletas.qtd = Number(quantidade.value);
  if(paletas.qtd === 0){
      paletas.qtd = 1;
  }
  const copiaPaletas = Object.assign({}, paletas);
  lista.push(copiaPaletas);
  let mult = copiaPaletas.qtd * copiaPaletas.valor
  let multAtacado = copiaPaletas.qtd * copiaPaletas.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleBrownieCenoura(){
  brownieCenoura.qtd = Number(quantidade.value);
  if(brownieCenoura.qtd === 0){
      brownieCenoura.qtd = 1;
  }
  const copiaBrownieCenoura = Object.assign({}, brownieCenoura);
  lista.push(copiaBrownieCenoura);
  let mult = copiaBrownieCenoura.qtd * copiaBrownieCenoura.valor
  let multAtacado = copiaBrownieCenoura.qtd * copiaBrownieCenoura.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function potinhoCopao(){
  poteCopao.qtd = Number(quantidade.value);
  if(poteCopao.qtd === 0){
      poteCopao.qtd = 1;
  }
  const copiaPoteCopao = Object.assign({}, poteCopao);
  lista.push(copiaPoteCopao);
  let mult = copiaPoteCopao.qtd * copiaPoteCopao.valor
  let multAtacado = copiaPoteCopao.qtd * copiaPoteCopao.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function potinhoSundae(){
  poteSundae.qtd = Number(quantidade.value);
  if(poteSundae.qtd === 0){
      poteSundae.qtd = 1;
  }
  const copiaPoteSundae = Object.assign({}, poteSundae);
  lista.push(copiaPoteSundae);
  let mult = copiaPoteSundae.qtd * copiaPoteSundae.valor
  let multAtacado = copiaPoteSundae.qtd * copiaPoteSundae.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function potinhoAcai(){
  acaiGranola.qtd = Number(quantidade.value);
  if(acaiGranola.qtd === 0){
      acaiGranola.qtd = 1;
  }
  const copiaAcaiGranola = Object.assign({}, acaiGranola);
  lista.push(copiaAcaiGranola);
  let mult = copiaAcaiGranola.qtd * copiaAcaiGranola.valor
  let multAtacado = copiaAcaiGranola.qtd * copiaAcaiGranola.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function poteDuo(){
  poteDuo1eMeio.qtd = Number(quantidade.value);
  if(poteDuo1eMeio.qtd === 0){
      poteDuo1eMeio.qtd = 1;
  }
  const copiaPoteDuo1eMeio = Object.assign({}, poteDuo1eMeio);
  lista.push(copiaPoteDuo1eMeio);
  let mult = copiaPoteDuo1eMeio.qtd * copiaPoteDuo1eMeio.valor
  let multAtacado = copiaPoteDuo1eMeio.qtd * copiaPoteDuo1eMeio.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function pote2L(){
  pote2l.qtd = Number(quantidade.value);
  if(pote2l.qtd === 0){
      pote2l.qtd = 1;
  }
  const copiaPote2l = Object.assign({}, pote2l);
  lista.push(copiaPote2l);
  let mult = copiaPote2l.qtd * copiaPote2l.valor
  let multAtacado = copiaPote2l.qtd * copiaPote2l.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function poteSpecialle(){
  specialle.qtd = Number(quantidade.value);
  if(specialle.qtd === 0){
      specialle.qtd = 1;
  }
  const copiaSpecialle = Object.assign({}, specialle);
  lista.push(copiaSpecialle);
  let mult = copiaSpecialle.qtd * copiaSpecialle.valor
  let multAtacado = copiaSpecialle.qtd * copiaSpecialle.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function poteAcai2L(){
  poteAcai2l.qtd = Number(quantidade.value);
  if(poteAcai2l.qtd === 0){
      poteAcai2l.qtd = 1;
  }
  const copiaPoteAcai2l = Object.assign({}, poteAcai2l);
  lista.push(copiaPoteAcai2l);
  let mult = copiaPoteAcai2l.qtd * copiaPoteAcai2l.valor
  let multAtacado = copiaPoteAcai2l.qtd * copiaPoteAcai2l.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function poteAcaiZero(){
  acaiZero.qtd = Number(quantidade.value);
  if(acaiZero.qtd === 0){
      acaiZero.qtd = 1;
  }
  const copiaAcaiZero = Object.assign({}, acaiZero);
  lista.push(copiaAcaiZero);
  let mult = copiaAcaiZero.qtd * copiaAcaiZero.valor
  let multAtacado = copiaAcaiZero.qtd * copiaAcaiZero.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function picoleZero(){
  zeroPicole.qtd = Number(quantidade.value);
  if(zeroPicole.qtd === 0){
      zeroPicole.qtd = 1;
  }
  const copiaZeroPicole = Object.assign({}, zeroPicole);
  lista.push(copiaZeroPicole);
  let mult = copiaZeroPicole.qtd * copiaZeroPicole.valor
  let multAtacado = copiaZeroPicole.qtd * copiaZeroPicole.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function poteNapoZero(){
  napolitanoZero.qtd = Number(quantidade.value);
  if(napolitanoZero.qtd === 0){
      napolitanoZero.qtd = 1;
  }
  const copiaNapolitanoZero = Object.assign({}, napolitanoZero);
  lista.push(copiaNapolitanoZero);
  let mult = copiaNapolitanoZero.qtd * copiaNapolitanoZero.valor
  let multAtacado = copiaNapolitanoZero.qtd * copiaNapolitanoZero.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function miniBombom(){
  bombom.qtd = Number(quantidade.value);
  if(bombom.qtd === 0){
      bombom.qtd = 1;
  }
  const copiaBombom = Object.assign({}, bombom);
  lista.push(copiaBombom);
  let mult = copiaBombom.qtd * copiaBombom.valor
  let multAtacado = copiaBombom.qtd * copiaBombom.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}


function cones(){
  cone.qtd = Number(quantidade.value);
  if(cone.qtd === 0){
      cone.qtd = 1;
  }
  const copiaCone = Object.assign({}, cone);
  lista.push(copiaCone);
  let mult = copiaCone.qtd * copiaCone.valor
  let multAtacado = copiaCone.qtd * copiaCone.valorAtacado
  precoAtualizado.push(Number(mult))
  precoAtualizadoAtacado.push(Number(multAtacado))
  mostrarLista()
}

// calculoAtualizado() = essa função atualizará em tempo real o valor total da compra e o retornará no campo #preco.
function calculoAtualizado(){
  const somaSorvetes = precoAtualizado.reduce((acumulador, elemento) => {
      return acumulador + elemento;
  });
  const somaSorvetesAtacado = precoAtualizadoAtacado.reduce((acumulador, elemento) => {
      return acumulador + elemento;
  });
  const descontoCompra = somaSorvetes - somaSorvetesAtacado;
  if(somaSorvetes < 40){
      preco.innerHTML = `R$ ${somaSorvetes.toFixed(2)}`
  } else{
      preco.innerHTML = `R$ ${somaSorvetesAtacado.toFixed(2)}`
      desconto.innerHTML = `R$ ${descontoCompra.toFixed(2)}`
  }
}