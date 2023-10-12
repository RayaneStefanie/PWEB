function maior(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}

function ordenar(n1, n2, n3) {
  let numeros = [n1, n2, n3];
  numeros.sort(function(a, b) {
    return a - b;
  });
  return numeros;
}

let a = prompt("Digite o valor de a:");
let b = prompt("Digite o valor de b:");
let c = prompt("Digite o valor de c:");

a = Number(a);
b = Number(b);
c = Number(c);

console.log("O maior entre " + a + ", " + b + " e " + c + " é " + maior(a, b, c));
console.log("Os números " + a + ", " + b + " e " + c + " em ordem crescente são " + ordenar(a, b, c));