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


// === Nivell 2 ===
// === Exercici 3 ===

esperarISaludar = (nom, funct) => {
  setTimeout(() => {
    funct(nom);
  }, "2000");
}

nomPropi = 'Eduard'

saludar = (nom) => console.log(`Exercici 3: Hola, ${nom}`);
esperarISaludar(nomPropi, saludar);


// === Exercici 4 ===

processarElements = (array, funct) => {
  array.forEach(element => {
    funct(element);
  });
}

array1 = [1,2,3,4];

console.log('Exercici 4:');
processarElements(array1, imprimir);

