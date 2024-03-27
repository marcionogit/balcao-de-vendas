// retro = {}; = objeto com todas as especificações do picolé ao retro varejo. Esse padrão se repete ao longo de todos os outros produtos
function Item(descricaoSorvete, valorSorvete, valorAtacadoSorvete, qtdSorvete, codSorvete){
  this.descricao = descricaoSorvete,
  this.valor = valorSorvete,
  this.valorAtacado = valorAtacadoSorvete,
  this.qtd = qtdSorvete,
  this.cod = codSorvete
}

// isso é o mesmo que:
const retro = new Item('RETRO', 1.50, 1.50, 0, 1)
// isso

// const retro = {
  //   descricao: 'RETRO',
  //   valor: 1.50,
  //   valorAtacado: 1.50,
  //   qtd: 0,
  //   cod: 1
  // }
  
const fruta = new Item('FRUTA',2.50, 2.25, 0, 2);
const leite = new Item('AO LEITE', 2.80, 2.50, 0, 3);
const love = new Item('LOVE', 3.00, 3.00, 0, 4);
const fondue = new Item('FONDUE', 3.80, 3.50, 0, 5);
const natturale = new Item('NATTURALE', 3.90, 3.60, 0, 6);
const unicornio = new Item('UNICORNIO', 3.90, 3.40, 0, 7);
const astros = new Item('ASTROS', 4.50, 4.25, 0, 8);
const acai = new Item('AÇAI', 4.75, 4.40, 0, 9);
const trufa = new Item('GELADA', 4.80, 4.50, 0, 10);
const limaoSiciliano = new Item('LIMÃO SICILIANO', 4.90, 4.40, 0, 11);
const zeroPicole = new Item('PICOLÉ ZERO', 4.90, 4.40, 0, 12);
const poteCopao = new Item('COPÃO', 5.75, 5.75, 0, 13);
const snack = new Item('SNACK', 5.90, 5.40, 0, 14);
const alpha = new Item('ALPHA PREMIUM', 5.90, 5.40, 0, 15);
const poteSundae = new Item('SUNDAE', 5.90, 5.60, 0, 16);
const paletas = new Item('PALETA', 6.90, 6.60, 0, 17);
const cone = new Item('CONE',7.00, 6.50, 0, 18);
const belgaBrulee = new Item('BELGA / BRULEE',7.50, 6.90, 0, 19);
const brownieCenoura = new Item('BROWNIE / CENOURA',8.50, 7.90, 0, 20);
const acaiGranola = new Item('AÇAI C/ GRANOLA',8.90, 8.60, 0, 21);
const bombom = new Item('MINI BOMBOM', 9.50, 8.90, 0, 22);
const poteDuo1eMeio = new Item('DUO 1,5L', 15.90, 15.90, 0, 23);
const pote2l = new Item('POTE 2L', 19.90, 19.90, 0, 24);
const specialle = new Item('SPECIALLE', 26.90, 26.90, 0, 25);
const napolitanoZero = new Item('NAPOLITANO ZERO', 26.90, 26.90, 0, 26);
const poteAcai2l = new Item('AÇAI 2L', 37.90, 35.90, 0, 27);
const acaiZero = new Item('AÇAI 1L ZERO', 37.90, 36.90, 0, 28);

// Salgados
const fritos = new Item('FRITOS 400g', 18.90, 17.90, 0, 29);
const kibe = new Item('KIBE 400g', 22.90, 21.90, 0, 30);
const bolinhoBacalhau = new Item('BOLINHO BACALHAU 400g', 35.90, 34.90, 0, 31);
const assados = new Item('ASSADOS 400g', 36.90, 35.90, 0, 32);
const tortinhas = new Item('TORTINHAS C/4', 28.90, 27.50, 0, 33);
const paoQueijo1kg = new Item('PÃO DE QUEIJO 1KG', 25.90, 23.50, 0, 34);
const paoQueijo400g = new Item('PÃO DE QUEIJO 400G', 12.00, 10.90, 0, 35);
const chipa1kg = new Item('CHIPA 1KG', 29.00, 27.50, 0, 36);

// Complementos
const tubin = new Item('TUB-IN', 3.00, 3.00, 0, 37);
const cestinha = new Item('CESTINHA C/5', 6.00, 6.00, 0, 38);
const cascao = new Item('CASCÃO C/10', 8.00, 8.00, 0, 39);
const cobertura = new Item('COBERTURA', 9.00, 9.00, 0, 40);
const casquinhaC20 = new Item('CASQUINHA C/20', 10.00, 10.00, 0, 41);


const mapaProdutos = {
  'retro':retro,
  'fruta':fruta,
  'leite':leite,
  'love':love,
  'fondue':fondue,
  'natturale':natturale,
  'unicornio':unicornio,
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
  'acaiZero':acaiZero,
  'fritos':fritos,
  'kibe':kibe,
  'assados':assados,
  'tortinhas':tortinhas,
  'paoQueijo1kg':paoQueijo1kg,
  'paoQueijo400g':paoQueijo400g,
  'chipa1kg':chipa1kg,
  'tubin':tubin,
  'cestinha':cestinha,
  'cascao':cascao,
  'cobertura':cobertura,
  'casquinhaC20':casquinhaC20,
}
