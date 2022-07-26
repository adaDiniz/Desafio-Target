/* Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
faça um programa, na linguagem que desejar, que calcule e retorne: 
• O menor valor de faturamento ocorrido em um dia do mês; 
• O maior valor de faturamento ocorrido em um dia do mês; 
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.  
IMPORTANTE: 
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média; */

const jsonData= require('./data/dados.json'); 

//O maior valor de faturamento ocorrido em um dia do mês:
const maxValor = jsonData.reduce(function(prev, current) { 
	return prev.valor > current.valor ? prev : current; 
});

console.log(maxValor); // { dia: 16, valor: 48924.2448 }

// O menor valor de faturamento ocorrido em um dia do mês: 
const filterValor = jsonData.filter(function(filter) {
   return filter.valor != 0;
});

const minValor = filterValor.reduce(function(prev, current) { 
	return prev.valor < current.valor ? prev : current; 
});

console.log(minValor); // { dia: 14, valor: 373.7838 }

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

var diaDeFaturamento = jsonData.length - 9; //Dias sem faturamento não foram considerados na média
var total = jsonData.reduce(getTotal, 0);
console.log(total); // 438172.77349999995

function getTotal(total, item) {
   return total + item.valor;
};

var media = total / diaDeFaturamento;
console.log(media); // 20865.370166666664

var faturamentoDiarioMaiorMedia = jsonData.filter(item => item.valor > media);

console.log(faturamentoDiarioMaiorMedia);
// [
//   { dia: 1, valor: 22174.1664 },
//   { dia: 2, valor: 24537.6698 },
//   { dia: 3, valor: 26139.6134 },
//   { dia: 6, valor: 26742.6612 },
//   { dia: 8, valor: 42889.2258 },
//   { dia: 9, valor: 46251.174 },
//   { dia: 16, valor: 48924.2448 },
//   { dia: 20, valor: 35240.1826 },
//   { dia: 21, valor: 43829.1667 },
//   { dia: 27, valor: 25681.8318 }
// ]


