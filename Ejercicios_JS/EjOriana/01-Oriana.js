// 1. Crea una función que tome como parámetro un número. Si es un número entero (sin
// decimales) muestra por consola true. Si no, muestra por consola false.

// const isInteger = (num) => Number.isInteger(num)
//
// console.log(isInteger(10.5))
//

// 2. Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. Si
// a contiene b, añade b al principio de a. Si no, añade b al final. Por ejemplo:

// const twoString = (a, b) => {
// if (a.includes(b)){
// return a + b
// } else {
// return b + a
// }
// }
//
// const res = twoString('alfonso', 'alfonsoLopez')
// console.log(res);

// 3. Crea una función que tome como parámetro un número y lo divida en dígitos
// individuales dentro de un array. Tip: puedes usar el método split();

// const toArray = (num) => {
//   const newArr = String(num).split("");
//
//   const arr = [];
//   newArr.forEach((element) => {
// arr.push(Number(element));
//   });
//   console.log(arr)
// };
//
// const res = toArray(12345);

// 4. Crea una función que tome como parámetro un array. Si todos los elementos del
// array son estrictamente iguales, muestra por consola true, de lo contrario muestra
// false.

// const areEqual = (array) => {
//
// for (let i = 1; i < array.length; i++) {
// if(array[0] === array[i]) {
// return true
// } else {
// return false
// }
// }
// }
//
// console.log(areEqual(['res', 'res', 10]));

// 5. Dado un array de números, muestra por consola un array con dichos números
// ordenados en forma descendente.

// const orderedNumbers = (array) => {
// return array.sort((a,b) => {
// return b - a;
// })
// }
//
// console.log(orderedNumbers([5, 55, 34, 3, 2]))

// 6. Dado un array de strings, muestra por consola un array con sus valores ordenados
// alfabéticamente.

// const orderedLetters = ['b', 'c', 'd', 'a']
//
// const res = orderedLetters.sort()
// console.log(res)

// 7. Crea una función que tome como parámetro un array de strings y muestra por
// consola el string más largo.

// const longestStr = (array) => {
// let longestWord = '';
// array.forEach(word => {
// if(word.length > longestWord.length){
// longestWord = word
// }
// });
// return longestWord
// }
//
// const res = longestStr(['alf', 'alfon', 'alfonso']);
// console.log(res);

// 8. Crea una función que tome dos arrays de números como parámetros. Une ambos
// arrays, remueve valores duplicados (si hay alguno) y ordena los números en orden
// ascendente.

const arr1 = [1,2,3]
const arr2 = [1,2,3,4,5,6]

const spreadArr = [...arr1, ...arr2];
;
const newArr = []
spreadArr.forEach(item => {
    if(!newArr.includes(item)){
        newArr.push(item)
    }
})

newArr.sort((a,b) => {
    return (b - a);
})
console.log(newArr)


// const joinArr = (arr1, arr2) => {
// const newArr = [...arr1, ...arr2];
//
// return newArr.sort().filter(function(item, index, arr){
// return !index || item != arr[index - 1];
// });
//
// }
//
// console.log(joinArr([1,2,3], [1,2,3,4,5,6]));

// 9. Crea una función que tome un objeto como parámetro. Remueve la propiedad
// “country” y su valor y muestra el resultado por consola.
//
// const myObj = {
//   city: "Sacramento",
//   state: "California",
//   country: "USA",
//   continent: "North America",
// };
//
// const removeObj = (object) => {
// delete object.country
// console.log(object)
// }
//
// removeObj(myObj)

// 11. Algunas de las propiedades de los siguientes objetos son strings vacíos.
// Reemplazalos por el valor “null”, empleando para ello una función que tome como
// parámetro dichos objetos. Muestra por consola el objeto resultante

// const letterObj = { a: "", b: "b", c: " ", d: "d" };
//
// const replaceKey = (obj) => {
// for (const key in obj){
// if(obj[key] === "" || obj[key] === " "){
// obj[key] = null
// }
// }
// console.log(obj)
// }
//
// replaceKey(letterObj);
//

// 12. Crea una función que tome como parámetros un array de objetos y un string. Agrega
// a cada uno de los objetos la propiedad “continent” que tome como valor el parámetro
// de string. Muestra por consola el nuevo array.

// const addKey = (arr, newValue) => {
//   const newKey = "continent";
//   for (let i = 0; i < arr.length; i++) {
    // arr[i][newKey] = newValue;
//   }
//   console.log(arr)
// };
// 
// addKey(
//   [
    // { city: "Tokyo", country: "Japan" },
    // { city: "Bangkok", country: "Thailand" },
//   ],
//   "Asia"
// );
