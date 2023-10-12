// Definir uma função que recebe três números e retorna o maior deles

function maior(n1, n2, n3) {

    // Comparar os três números e retornar o maior
  
    if (n1 > n2 && n1 > n3) {
  
      return n1;
  
    } else if (n2 > n1 && n2 > n3) {
  
      return n2;
  
    } else {
  
      return n3;
  
    }
  
  }
  
   
  
  // Definir uma função que recebe três números e os coloca em ordem crescente
  
  function ordenar(n1, n2, n3) {
  
    // Criar um array com os três números
  
    let numeros = [n1, n2, n3];
  
    // Usar o método sort para ordenar o array em ordem crescente
  
    numeros.sort(function(a, b) {
  
      return a - b;
  
    });
  
    // Retornar o array ordenado
  
    return numeros;
  
  }
  
   
  
  // Pedir ao usuário para digitar os valores de a, b e c
  
  let a = prompt("Digite o valor de a:");
  
  let b = prompt("Digite o valor de b:");
  
  let c = prompt("Digite o valor de c:");
  
   
  
  // Converter as strings em números usando a função Number
  
  a = Number(a);
  
  b = Number(b);
  
  c = Number(c);
  
   
  
  // Chamar a função maior com os valores digitados pelo usuário e mostrar o resultado na tela
  
  alert("O maior entre " + a + ", " + b + " e " + c + " é " + maior(a, b, c));
  
   
  
  // Chamar a função ordenar com os valores digitados pelo usuário e mostrar o resultado na tela
  
  alert("Os números " + a + ", " + b + " e " + c + " em ordem crescente são " + ordenar(a, b, c));