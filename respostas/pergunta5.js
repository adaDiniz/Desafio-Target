/*Escreva um programa que inverta os caracteres de um string.  
IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function caracteres(palavra) {
    
    var pInvertida = "";

    for (i = palavra.length - 1; i >= 0 ; i-- ) {
       pInvertida += palavra[i];        
    }
    console.log(pInvertida);
}
 
caracteres("ada carina diniz"); // resultado: zinid anirac ada

