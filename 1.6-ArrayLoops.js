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


// === Nivell 2 ===
// === Exercici 4 ===

let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' };
console.log('Exercici 4:');

for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
};


// === Exercici 5 ===

let numeros = [1, 2, 3, 4, 5, 6];
console.log('Exercici 5:');

for (const num of numeros) {
    if (num == 5) {
        break;
    }
    console.log(num);
};


// === Nivell 3 ===
// === Exercici 6 ===

console.log('Exercici 6:');
for (const nom of noms) {console.log(nom, noms.indexOf(nom))};
