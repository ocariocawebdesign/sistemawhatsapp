
let cardapio = 3;
console.log(`Seu pedido foi: ${cardapio}`)
switch (cardapio) {
  case 1:
    console.log('x-burger R$12,90 (hamburguer, bacon, queijo, presunto, alface)');
    break;
  case 2:
    console.log('x-bacon R$15,00 (hamburgues, ovo, queijo, presunto, alface)');
    break;
  case 3:
    console.log('double-burger R$18,50 (2hamburguer, 2 ovos, quijo, presunto, alface)');
    break;
  case 4:
    console.log('x-calabresa R$14,00 (calabresa, tomate, queijo, presunto, alface)');
    break;
    default:
    console.log('Pedido inválido: escolha entre 1 e 4');
    break;
} 