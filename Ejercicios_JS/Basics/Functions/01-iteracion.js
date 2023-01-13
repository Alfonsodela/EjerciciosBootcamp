// Iteración #1: Buscar el máximo
// Completa la función que tomando dos números como argumento devuelva el más alto.

// const theLargest = (num1, num2) => {
//   return Math.max(num1, num2);
// };

// console.log(theLargest(6, 2));

// Iteración #2: Buscar la palabra más larga
// Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

// const avengers = [
//   "Hulk",
//   "Thor",
//   "IronMan",
//   "Captain A.",
//   "Spiderman",
//   "Captain M.",
// ];

// const theLongest = () => {
//   let avenger = "";
//   avengers.forEach((item) => {
//     if (item.length > avenger.length) {
//       avenger = item;
//     }
//   })
//   return avenger;
// };

// const res = theLongest(avengers);
// console.log(res);

// Iteración #3: Calcular la suma
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada
// uno de los elementos. Implemente la función denominada sumNumbers que toma un
// array de números como argumento y devuelve la suma de todos los números de la matriz.
//
// let numbers = [1, 2, 3, 5, 45, 37, 58];

// const sumNumbers = () => {
//   let sum = 0;
//   numbers.forEach(number => {
//     sum += number
//   })
//   return sum
// }

// const res = sumNumbers(numbers);
// console.log(res)

// Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común.
// Puedes usar este array para probar tu función:
//
// const numbers = [12, 21, 38, 5, 45, 37, 6];

// const averageArr = () => {
//   let sum = 0;
//   numbers.forEach(number => {
//     sum += number;
//     average = sum / numbers.length
//   })
//   return average
// }

// const res = averageArr(numbers);
// console.log(res);
//
// const calculateAverage = (number) => {
// let sum = 0
// let average = 0
// for (let i = 0; i < numbers.length; i++) {
// sum += numbers[i];
// average = sum / numbers.length
// }
// return average
// }
//
// const res = calculateAverage(numbers);
// console.log(res);

// Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando
// es un valor number lo sume y de lo contrario cuente la longitud
// del string y lo sume. Puedes usar este array para probar tu función:
//
//
// const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

// const averageStr = () => {
//   let sum = 0
//   let average = 0
//   mixedElements.forEach(item => {
//     if( typeof item === 'number') {
//       sum += item
//     } else if ( typeof item === 'str') {
//       sum += item.length
//     }
//   })
//   return sum / mixedElements.length

// }

// const res = averageStr(mixedElements);
// console.log(res);

// const averageString = () => {
//   let sum = 0;
//   let average = 0;
//   mixedElements.forEach(item => {
//     if(typeof item === 'string') {
//       sum += item.length
//     } else if (typeof item === 'number') {
//       sum += item
//     }
//   })
//   return sum / mixedElements.length
// }

// const res = averageString(mixedElements)
// console.log(res)

// let calculateStringsAverage = (list) => {
// let sum = 0
//
// for (let i = 0; i < mixedElements.length; i++) {
// const element = mixedElements[i]
// if(typeof element === 'number') {
// sum += element
// } else if (typeof element === 'string') {
// sum += element.length
// }
// }
// return sum
// }
//
// const res = calculateStringsAverage(mixedElements);
// console.log(res)

// Iteración #6: Valores únicos
// Crea una función que reciba por parámetro un array
// y compruebe si existen elementos duplicados, en caso
// que existan los elimina para retornar un array sin los
// elementos duplicados. Puedes usar este array para probar tu función:
//
// //
// const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings',
// 'pasta','soda'];

// const deleteDuplicate = () => {
//   let withoutDuplicate = '';
//   duplicates.forEach(item => {
//     if(!withoutDuplicate.includes(item)) {
//       withoutDuplicate.push(item)
//     }
//   })
// }

// const deleteDuplicate = () => {
//   let withoutDuplicate = [];
//   duplicates.forEach(item => {
//     if(!withoutDuplicate.includes(item)){
//       withoutDuplicate.push(item)
//   }

// })
// return withoutDuplicate
// }

// let res = deleteDuplicate(duplicates)
// console.log(res)

// Iteración #7: Buscador de nombres
//
// Crea una función que reciba por parámetro un array y el valor
// que desea comprobar que existe dentro de dicho array - comprueba
// si existe el elemento, en caso que existan nos devuelve un true
// y la posición de dicho elemento y por la contra un false.
// Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

// const match = () => {

//   nameFinder.forEach(item => {
//     if(nameFinder.indexOf('Peter')) {
//       console.log(true)
//     } else {
//       console.log(false)
//     }
//   })
//   return
// }

// const res = match(nameFinder);
// console.log(res)

// let matchValor = (list) => {

// nameFinder.forEach((item) => {
// if(nameFinder.includes('Marc')){
// console.log(true)
// console.log(nameFinder.indexOf('Marc'))
// } else {
// console.log(false)
// }
// })
// return
// }

// let res = matchValor(nameFinder)
// console.log(res)

// const arr = () => {
//   nameFinder.forEach(item => {
//     if(item.includes('Peter')) {
//       console.log('true')
//     } else {
//       console.log('false')
//     }
//   })
//   return
// }

// const res = arr(nameFinder)
// console.log(res)

// **Iteration #8: Contador de repeticiones**
// Crea una función que nos devuelva el número de veces que se repite cada una de
// las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

let repeatCounter = () => {
  const count = {};

  counterWords.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  return count
};

let res = repeatCounter(counterWords);
console.log(res);

//
