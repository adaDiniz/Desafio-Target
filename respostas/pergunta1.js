/*Observe o trecho de código abaixo:  
int INDICE = 13, SOMA = 0, K = 0;  
enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }  
imprimir(SOMA);  
Ao final do processamento, qual será o valor da variável SOMA? 
*/

var indice = 13;
var soma = 0;
var k = 0;

function doo() {
  while ( k < indice ) {
    k = k + 1;
    soma = soma + k;
  } 
  console.log(soma);
}

doo();

// RESULTADO: 91