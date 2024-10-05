// === Nivell 1 ===
// === Exercici 1 ===

add = (a, b) => a + b;

console.log(add(1,2));


// === Exercici 2 ===

randomNumber = () => Math.floor(Math.random() * 101);

console.log(randomNumber());


// === Exercici 3 ===

class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => console.log(`Hola, ${this.name}`);
    }

let person = new Person('Eduard');
person.greet();
