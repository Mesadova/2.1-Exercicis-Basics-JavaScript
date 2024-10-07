// === Nivell 1 ===
// === Exercici 1 ===

processar = (nombre, funct) => {
  funct(nombre);
}

imprimir = (x) => console.log(x);

let nomPropi = 'Eduard';

console.log('Exercici 1:');
processar(nomPropi, imprimir);


// === Exercici 2 ===

calculadora = (num1, num2, funct) => {
  return funct(num1, num2)
}

suma = (a, b) => a + b;

console.log('Exercici 2:');
console.log(calculadora(2, 4, suma));
