// === Nivell 1 ===
// === Exercici 1 ===

potConduir = (edat) => edat >= 18 ? 'Pots conduir.' : 'No pots conduir';

console.log('Exercici 1:')
console.log(potConduir(18));

// === Exercici 2 ===

compareNumbers = (num1, num2) => num1 > num2 ? 'Number 1 is bigger.' : 'Number 2 is bigger.';

console.log('Exercici 2:');
console.log(compareNumbers(5,99));


// === Nivell 2 ===
// === Exercici 3 ===

calcNumberSign = (num) => {
    return Math.sign(num) > 0 ? 'Positiu.'
        : Math.sign(num) < 0 ? 'Negatiu.'
        : Math.sign(num) == 0 ? 'Zero.'
        : 'error';
  }

trobarMaxim = (a, b, c) => {
    return a > b & a > c ? `A (${a}) és el nombre més gran.`
        : b > a & b > c ? `B (${b}) és el nombre més gran.`
        : c > a & c > b ? `C (${c}) és el nombre més gran.`
        : 'Error: No hi ha un nombre més gran que els altres dos.';
  }

console.log('Exercici 3:');
console.log(calcNumberSign(-3));
console.log(trobarMaxim(2,1,9));

  
// === Nivell 3 ===
// === Exercici 4 ===

const array1 = [2,3,4,5,6];

parOImpar = (array) => {
    array.forEach((element) => {
      console.log(element % 2 == 0 ? `The number ${element} is par` : `The number ${element} is impar.`);
    });
  };

console.log('Exercici 4:');
parOImpar(array1);
