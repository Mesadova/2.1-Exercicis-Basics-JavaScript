// === Nivell 1 ===
// === Exercici 1 ===

let arrayNumbers = [1, 2, 3, 4];
let arrayNew = [];

for (number of arrayNumbers) {
    number = number * number;
    arrayNew.push(number);
}

console.log('Exercici 1:');
console.log(arrayNew);


// === Exercici 2 ===

arrayNumbers = [1, 2, 3, 4];
arrayNew = [];

for (number of arrayNumbers) {
    if (number % 2 == 0) {
        arrayNew.push(number);
    }
}

console.log('Exercici 2:');
console.log(arrayNew);


// === Exercici 3 ===

arrayNumbers = [1, 10, 8, 11];

arrayNumbers.find((element) => element > 10);

console.log('Exercici 3:');
console.log(arrayNumbers.find((element) => element > 10));


// === Exercici 4 ===


arrayNumbers = [13, 7, 8, 21];

arrayNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0,
);


console.log('Exercici 4:');
console.log(arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0,));


// === Nivell 2 ===
// === Exercici 5 ===

let add = 0;
arrayNumbers = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];

suma = (array) => {for (number of array) {if (number >= 10) { (add = add + (number * 2)) }} return add};

console.log('Exercici 5:');
console.log(suma(arrayNumbers));


// === Nivell 3 ===
// === Exercici 6 ===

array = [11, 12, 13, 14];
console.log('Exercici 6:');

if (array.some((element) => element > 10)) {
    if (array.every((element) => element > 10)) {
        console.log('Tots els valors són superiors a 10.');
    } else {
        console.log('Un valor és superior a 10.');
    }
};

