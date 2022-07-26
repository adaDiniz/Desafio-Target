/*Escreva um programa que inverta os caracteres de um string.  
IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function caracteres(p) {
  
    var splitP = p.split("");
    
    var reverseP = splitP.reverse(); 

    var joinP = reverseP.join(""); 

    console.log(joinP);
}
 
caracteres("Ada Diniz");
