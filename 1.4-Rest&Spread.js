// === Nivell 1 ===
// === Exercici 1 ===
  
array1 = [1,2,3,4];
array2 = ['a', 'b', 'c', 'd'];

array3 = [...array1, ...array2];

console.log('Exercici 1:');
console.log(array3);


// === Exercici 2 ===

suma = (...args) => {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}

console.log('Exercici 2:');
console.log(suma(1,2,3,4));

