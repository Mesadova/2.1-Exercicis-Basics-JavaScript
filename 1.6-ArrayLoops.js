// === Nivell 1 ===
// === Exercici 1 ===

let noms = ['Anna', 'Bernat', 'Clara'];

console.log('Exercici 1:');
noms.forEach((nom) => console.log(nom));


// === Exercici 2 ===

console.log('Exercici 2:');
for (const nom of noms) {console.log(nom)};


// === Exercici 3 ===

const array = [1,2,3,4,5,6];

const newArray = array.filter((number) => number % 2 == 0);
console.log('Exercici 3:');
console.log(newArray);

