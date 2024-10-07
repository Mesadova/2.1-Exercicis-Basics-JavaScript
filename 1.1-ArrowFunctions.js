// === Nivell 1 ===
// === Exercici 1 ===

add = (a, b) => a + b;

console.log('Exercici 1:');
console.log(add(1,2));


// === Exercici 2 ===

randomNumber = () => Math.floor(Math.random() * 101);

console.log('Exercici 2:');
console.log(randomNumber());


// === Exercici 3 ===

class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => console.log(`Hola, ${this.name}`);
    }

let person = new Person('Eduard');
console.log('Exercici 3:');
person.greet();


// === Nivell 2 ===
// === Exercici 4 ===

printNumbers0 = (array) => array.forEach(element => console.log(element));

printNumbers1 = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
      }
};

printNumbers2 = (array) => {
    for (element of array){
        console.log(element);
    };
};


const array1 = [1, 2, 3, 4, 5];

console.log('Exercici 4:');
printNumbers0(array1);
printNumbers1(array1);
printNumbers2(array1);


// === Nivell 3 ===
// === Exercici 5 ===

printDelay = () => {
    setTimeout(() => {
        console.log("Delayed for 3 seconds.");
      }, "3000");
}

console.log('Exercici 5:');
printDelay();