/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.  
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 
*/

function generateFibonacci(number){
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  var limiteFibonacci = number;
  
  for (var i = 2; i <= limiteFibonacci; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  if (fibonacci.includes(number)){
    console.log(number + ' pertece') 
  } else {
    console.log(number + ' não pertece')
  };
  console.log(fibonacci)
}
//exemplo:
generateFibonacci(34);
//resposta: 34 pertence