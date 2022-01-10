// 3. Crea una función que tome como parámetro un número y lo divida en dígitos
// individuales dentro de un array. Tip: puedes usar el método split();

// const toArray = (num) => {
// const newArr = String(num).split("");
// console.log(newArr);
//
// const arr = []
// newArr.forEach((item) => {
// arr.push(Number(item));
// })
// console.log(arr)
// }
//
// toArray(20);
//

// 4. Crea una función que tome como parámetro un array. Si todos los elementos del
// array son estrictamente iguales, muestra por consola true, de lo contrario muestra
// false.

// const areEqual = (array) => {
//   for (let i = 1; i < array.length; i++) {
// if (array[0] === array[i]) {
//   return true;
// } else {
//   return false;
// }
//   }
// };
//
// console.log(areEqual([true, true, true]));

// 5. Dado un array de números, muestra por consola un array con dichos números
// ordenados en forma descendente.

// const orderedNumbers = (array) => {
// return array.sort(function (a,b) {
// return b -a;
// })
// }
//
// console.log(orderedNumbers([56, 0, 12, 4, 31]));

// 6. Dado un array de strings, muestra por consola un array con sus valores ordenados
// alfabéticamente.

// const letters = ['b', 'c', 'd', 'a'];
// console.log(letters.sort());

// 7. Crea una función que tome como parámetro un array de strings y muestra por
// consola el string más largo.

// const longestStr = (arr) => {
// let longestWord = '';
// arr.forEach((word) => {
// if (word.length > longestWord.length) {
// longestWord = word;
// }
// });
// return longestWord;
// }
// console.log(longestStr(['help', 'me', 'alfonso']));

// 8. Crea una función que tome dos arrays de números como parámetros. Une ambos
// arrays, remueve valores duplicados (si hay alguno) y ordena los números en orden
// ascendente.

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
// const deleteKey = (object) => {
// delete object.country
// console.log(object)
// }
//
// deleteKey(myObj);

// 11. Algunas de las propiedades de los siguientes objetos son strings vacíos.
// Reemplazalos por el valor “null”, empleando para ello una función que tome como
// parámetro dichos objetos. Muestra por consola el objeto resultante

// const letterObj = { a: '', b: 'b', c: ' ', d: 'd' };
//
// const replaceKey = (obj) => {
// for (const key in obj) {
// if (obj[key] === '' || obj[key] === ' '){
// obj[key] = null;
// }
// }
// console.log(obj);
// }
// replaceKey(letterObj);

// 12. Crea una función que tome como parámetros un array de objetos y un string. Agrega
// a cada uno de los objetos la propiedad “continent” que tome como valor el parámetro
// de string. Muestra por consola el nuevo array.

const addKey = (arr, newValue) => {
  const newKey = "continent";
  for (let i = 0; i < arr.length; i++) {
    arr[i][newKey] = newValue;
  }
};

addKey(
  [
    { city: "Tokyo", country: "Japan" },
    { city: "Bangkok", country: "Thailand" },
  ],
  "Asia"
);
