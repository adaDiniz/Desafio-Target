/* 
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:  
SP – R$67.836,43 
RJ – R$36.678,66 
MG – R$29.229,88 
ES – R$27.165,48 
Outros – R$19.849,53  
Escreva um programa na linguagem que desejar onde calcule o percentual de representação 
que cada estado teve dentro do valor total mensal da distribuidora.  
*/

const dataDistribuidora = [
  {
    estado: "SP", 
    valor: 6783643
  },
  {
    estado: "RJ",
    valor: 3667866
  }, 
  {
    estado: "MG",
    valor: 2922988
  }, 
  {
    estado: "ES",
    valor: 2716548 
  },
  {
    estado: "Outros",
    valor: 1984953
  }
];

//calculando o total de faturamento mensal:
const total = dataDistribuidora.reduce(getTotal, 0);

function getTotal(total, item) {
   return total + item.valor;
};
console.log(total);

//cálculo do percentual de representação de cada estado dentro do valor total mensal:
var percentualEstado = dataDistribuidora.map(function(item){
  let percentual = (item.valor * 100) / total;

  return item.estado + ' = ' + percentual + ' %'; 
});

console.log(percentualEstado);
//resultado:
// [
//   'SP = 37.52845624346717 %',
//   'RJ = 20.29136095279497 %',
//   'MG = 16.170548370275323 %',
//   'ES = 15.02848141496807 %',
//   'Outros = 10.981153018494469 %'
// ]