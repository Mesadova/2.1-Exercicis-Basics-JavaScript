// === Nivell 1 ===
// === Exercici 1 ===

let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});


// === Exercici 2 ===

promise1.then((resolvedValue) => {
    console.log('Exercici 2:', resolvedValue);
});


// === Exercici 3 ===
let input = 'Hola, món';

let promise2 = new Promise(function(resolve, reject) {
    if (input == 'Hola') {
        setTimeout(() => {
            resolve('Resolved');
        }, 2000);
    } else {
        reject('Exercici 3: Rejected');
    }
});

promise2.then(
    (result) => { 
       console.log(result);
    },
    (error) => { 
       console.log(error);
    }
);


// === Exercici 4 ===

async function asyncCall() {
    console.log('calling exercici 4...');
    const result = await promise1;
    console.log('executed exercici 4...')
    console.log('Exercici 4 result:', result);;
}

asyncCall();


// === Nivell 2 ===
// === Exercici 5 ===

async function asyncCall2() {
    console.log('calling exercice 5...');
    try {
        const result = await promise1;
        console.log('executed exercici 5...')
        console.log('Exercici 5 result:', result);
    } catch (error) {
        console.error('Exercici 5 error:', error);
    }
  };
  
asyncCall2();


// === Nivell 3 ===
// === Exercici 6 ===

const promise2sec = new Promise(function(resolve, reject) {
    setTimeout(() => {resolve('Ex. 6: 2 sec resolved.')}, 2000);
  });
  
  const promise3sec = new Promise(function(resolve, reject) {
    setTimeout(() => {resolve('Ex. 6: 3 sec resolved.')}, 3000);
  });
  
  Promise.all([promise2sec, promise3sec]).then((values) => {
    values.forEach(element => {console.log(element) });
  });
  
  