// retro = {}; = objeto com todas as especificações do picolé ao retro varejo. Esse padrão se repete ao longo de todos os outros produtos
function Sorvete(descricaoSorvete, valorSorvete, valorAtacadoSorvete, qtdSorvete, codSorvete){
  this.descricao = descricaoSorvete,
  this.valor = valorSorvete,
  this.valorAtacado = valorAtacadoSorvete,
  this.qtd = qtdSorvete,
  this.cod = codSorvete
}

// isso é o mesmo que:
const retro = new Sorvete('RETRO', 1.50, 1.50, 0, 1)
// isso

// const retro = {
  //   descricao: 'RETRO',
  //   valor: 1.50,
  //   valorAtacado: 1.50,
  //   qtd: 0,
  //   cod: 1
  // }
  
const fruta = new Sorvete('FRUTA',2.50, 2.25, 0, 2);
const leite = new Sorvete('AO LEITE', 2.80, 2.50, 0, 3);
const love = new Sorvete('LOVE', 3.00, 3.00, 0, 4);
const fondue = new Sorvete('FONDUE', 3.80, 3.50, 0, 5);
const natturale = new Sorvete('NATTURALE', 3.90, 3.60, 0, 6);
const unicornio = new Sorvete('UNICORNIO', 3.90, 3.40, 0, 7);
const astros = new Sorvete('ASTROS', 4.50, 4.25, 0, 8);
const acai = new Sorvete('AÇAI', 4.75, 4.40, 0, 9);
const trufa = new Sorvete('GELADA', 4.80, 4.50, 0, 10);
const limaoSiciliano = new Sorvete('LIMÃO SICILIANO', 4.90, 4.40, 0, 11);
const zeroPicole = new Sorvete('PICOLÉ ZERO', 4.90, 4.40, 0, 12);
const poteCopao = new Sorvete('COPÃO', 5.75, 5.75, 0, 13);
const snack = new Sorvete('SNACK', 5.90, 5.40, 0, 14);
const alpha = new Sorvete('ALPHA PREMIUM', 5.90, 5.40, 0, 15);
const poteSundae = new Sorvete('SUNDAE', 5.90, 5.60, 0, 16);
const paletas = new Sorvete('PALETA', 6.90, 6.60, 0, 17);
const cone = new Sorvete('CONE',7.00, 6.50, 0, 18);
const belgaBrulee = new Sorvete('BELGA / BRULEE',7.50, 6.90, 0, 19);
const brownieCenoura = new Sorvete('BROWNIE / CENOURA',8.50, 7.90, 0, 20);
const acaiGranola = new Sorvete('AÇAI C/ GRANOLA',8.90, 8.60, 0, 21);
const bombom = new Sorvete('MINI BOMBOM', 9.50, 8.90, 0, 22);
const poteDuo1eMeio = new Sorvete('DUO 1,5L', 15.90, 15.90, 0, 23);
const pote2l = new Sorvete('POTE 2L', 19.90, 19.90, 0, 24);
const specialle = new Sorvete('SPECIALLE', 26.90, 26.90, 0, 25);
const napolitanoZero = new Sorvete('NAPOLITANO ZERO', 26.90, 26.90, 0, 26);
const poteAcai2l = new Sorvete('AÇAI 2L', 37.90, 35.90, 0, 27);
const acaiZero = new Sorvete('AÇAI 1L ZERO', 37.90, 36.90, 0, 28);

const mapaProdutos = {
  'retro':retro,
  'fruta':fruta ,
  'leite':leite ,
  'love':love ,
  'fondue':fondue ,
  'natturale':natturale,
  'unicornio':unicornio ,
  'astros':astros,
  'acai':acai,
  'trufa':trufa,
  'limaoSiciliano':limaoSiciliano,
  'zeroPicole':zeroPicole,
  'poteCopao':poteCopao,
  'snack':snack,
  'alpha':alpha,
  'poteSundae':poteSundae, 
  'paletas':paletas,
  'cone':cone,
  'belgaBrulee':belgaBrulee,
  'brownieCenoura':brownieCenoura, 
  'acaiGranola':acaiGranola,
  'bombom':bombom,
  'poteDuo1eMeio':poteDuo1eMeio,
  'pote2l':pote2l,
  'specialle':specialle,
  'napolitanoZero':napolitanoZero,
  'poteAcai2l':poteAcai2l,
  'acaiZero':acaiZero
}