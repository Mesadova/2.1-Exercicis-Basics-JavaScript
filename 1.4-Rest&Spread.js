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


// === Nivell 2 ===
// === Exercici 3 ===

const objecte1 = { foo: "bar", x: 42 };
const objecte2 = {...objecte1};

Object.assign(objecte2, { foo: 'ooo'}, { x: 1111});


console.log('Exercici 3:');
console.log(objecte1);
console.log(objecte2);


// === Exercici 4 ===

array1 = ['a', 2, 'b', 4, 'c', 6];

const[x, y, ...rest] = array1


console.log('Exercici 4:');
console.log(x);
console.log(y);
console.log(rest);


// === Nivell 3 ===
// === Exercici 5 ===

funct = (arg1, arg2, arg3) => {
    console.log(arg1, arg2, arg3);
};

array1 = ['a', 2, 7];

console.log('Exercici 5:');
funct(...array1);


// === Exercici 6 ===

const objecte3 = { foo: "bar", x: 34 };
const objecte4 = { bar: "foo", y: 11 };

const mergedObj = { ...objecte3, ...objecte4 };

console.log('Exercici 6:');
console.log(mergedObj);

