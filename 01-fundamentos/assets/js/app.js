// console.log("Hola Mundo"); // resultado de la operación de ese metodo
// alert("Hola desde app.js") // hasta que este algo
// variables

let a = 10, b = 30; // dificil de leer
const c = 'Hola '; // valor de memoria no podrá cambiar

let d = "Spiderman", // valor de memoria no podrá cambiar
    x = a + b, // valor de memoria no podrá cambiar
    e = 10;

const SALUDO = c + d;
// console.log(SALUDO);


// console.log('%c Mis variables', 'color:pink; font-weight: bold');
// console.log({a}); // metodo función que se encuentra dentro de un objeto
// console.log({b});
// console.log({c});

// console.table({a, b, c, d, x });
// var: evolucionando antes 

// POLYFILL : codigo que provee el funcionamiento de una nueva caracteristica de javaScript(ES6), en versiones viejas como ES5
d= 'Hola de nuevo';
// breakpoint: cuando la aplicación llegue y se detenga en este punto



// let y el const no sobreescriben las variables en el objeto global windows o donde sea que este
// corriendo javascript
