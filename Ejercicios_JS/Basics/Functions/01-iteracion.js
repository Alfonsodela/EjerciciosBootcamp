// Iteración #1: Buscar el máximo
// Completa la función que tomando dos números como argumento devuelva el más alto.
// 
// const sum = (numberOne, numberTwo) => {
// return Math.min(numberOne, numberTwo);
// return Math.max(numberOne, numberTwo);
// }
// 
// const res = sum(5,9);
// console.log(`El valor máximo de ambos números es ${res}`);



// Iteración #2: Buscar la palabra más larga
// Completa la función que tomando un array de strings como argumento devuelva el más largo, 
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

// const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']
// 
// let findLongestWord = (avenger) => {
// debugger
// let countWords = 0;
// var avenger = "";
// for (let i = 0; i < avengers.length; i++) {
// if (countWords < avengers[i].length) {
// countWords = avengers[i].length;
// avenger = avengers[i]
// console.log(countWords)
// console.log(avenger)
// }
// };
// return avenger;
// };
// 
// const res = findLongestWord()
// console.log(res)
// 


// Iteración #3: Calcular la suma
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada 
// uno de los elementos. Implemente la función denominada sumNumbers que toma un 
// array de números como argumento y devuelve la suma de todos los números de la matriz.
// 
// let numbers = [1, 2, 3, 5, 45, 37, 58];
// 
// let sumNumbers = (number) => {
// 
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
// sum += numbers[i]; 
// }
// return sum
// }
// 
// const res = sumNumbers(numbers)
// console.log(res)

// let sumNumbers = (number) => {
// let sum = 0;
// 
// numbers.forEach((number) => {
// sum += number;
// })
// return sum
// }
// let res = sumNumbers(numbers);
// console.log(res);

//

// Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. 
// Puedes usar este array para probar tu función:
// 
// const numbers = [12, 21, 38, 5, 45, 37, 6];

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


// const calculaPromedio = (number) => {
// let sum = 0;
// let average = 0;
// 
// numbers.forEach((number) => {
// sum += number;
// average = sum / numbers.length
// })
// return average
// }
// let res = calculaPromedio(numbers);
// console.log(res);



// Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando 
// es un valor number lo sume y de lo contrario cuente la longitud 
// del string y lo sume. Puedes usar este array para probar tu función:
// 
// 
// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
// 
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



// let averageWord = (list) => {
// let sum = 0;
// 
// mixedElements.forEach((item) => {
// if(typeof item === 'number') {
// sum += item;
// } else if ( typeof item === 'string') {
// let length = item.length;
// sum += length
// }
// })
// return sum
// }
// 
// let res = averageWord (mixedElements);
// console.log(res);

// 
// 
// Iteración #6: Valores únicos
// Crea una función que reciba por parámetro un array 
// y compruebe si existen elementos duplicados, en caso 
// que existan los elimina para retornar un array sin los 
// elementos duplicados. Puedes usar este array para probar tu función:
// 
// 
// const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings',
// 'pasta','soda'];
// 
// let uniqueValor = (list) => {
// const alfonso = []
// 
// duplicates.forEach((item) => {
// debugger
// if(!alfonso.includes(item)){
// alfonso.push(item)
// }
// })
// return alfonso
// }
// let res = uniqueValor(duplicates)
// console.log(res)
// 


// Iteración #7: Buscador de nombres
// 
// Crea una función que reciba por parámetro un array y el valor 
// que desea comprobar que existe dentro de dicho array - comprueba 
// si existe el elemento, en caso que existan nos devuelve un true 
// y la posición de dicho elemento y por la contra un false. 
// Puedes usar este array para probar tu función:

// const nameFinder = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xabier','Bruce',
// 'Peggy', 'Jessica','Marc'];
// 
// let matchValor = (list) => {
// 
// nameFinder.forEach((item) => {
// if(nameFinder.indexOf('Peter')){
// console.log(true)
// } else {
// console.log(false)
// }
// })
// return 
// }
// 
// let res = matchValor(nameFinder)
// console.log(res)


// let search = (list) => {
// 
// nameFinder.forEach((name) => {
// if(name.includes('Alfonso')) {
// console.log(true);
// } else {
// console.log(false);
// }
// }) 
// return 
// }
// 
// let res = search(nameFinder)
// console.log(res);



// **Iteration #8: Contador de repeticiones**
// Crea una función que nos devuelva el número de veces que se repite cada una de 
// las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  // 
  let repeatCounter = (list) => {
  
    let repeatWord = 0
    counterWords.forEach((item) => {
      if (item === 'code') {
        repeatWord += item
        // console.log(item)
      }
    })
    return repeatWord
  }
  
  let res = repeatCounter(counterWords)
  console.log(res)
  // 
  // 
  
  