window.onload = () => {
  // 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
  // hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
  // console.log(). Para ello, es necesario que crees un .html y un .js.

  // fetch("https://api.agify.io?name=michael")
    // .then((response) => {
      // return response.json();
    // })
    // .then((myJson) => {
      // console.log(myJson);
    // });


    // 
  // const datos = async () => {
    // await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
      // .then((response) => response.json())
      // .then((myJson) => console.log(myJson));
  // };
  // console.log(datos());




  // 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
  // fetch() para hacer una consulta a la api cuando se haga click en el botón,
  // pasando como parametro de la api, el valor del input.

  const baseUrl = "https://api.nationalize.io";

  const writeName = async (event) => {
      const input = document.getElementById('input');
    
      await fetch(baseUrl + "?name=" + input.value)
      .then((res) => res.json())
      .then((myJson) => {
      console.log(myJson)
      console.log(`El nombre ${myJson.name} tiene un ${myJson.country[0].probability} de ser de ${myJson.country[0].country_id}`);
      const result = document.getElementById('result');
      result.textContent = `El nombre ${myJson.name} tiene un ${myJson.country[0].probability} de ser de ${myJson.country[0].country_id}`;
      
      });
      };
    
      const button = document.getElementById('button');
      button.addEventListener("click", writeName);

  
  

  //   2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
  //   a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
  //   EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
  //   de MZ.

  // 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
  // de los p que hayas insertado y que si el usuario hace click en este botón
  // eliminemos el parrafo asociado.

  // 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando
  // async-await.

  // const runTimeOut = async () => {
    // await new Promise((resolve) => {
      // setTimeout(function () {
        // resolve();
      // }, 2000);
    // });
    // {
      // console.log("Time out!");
    // }
  // };

  // runTimeOut();

  // 2.2 Convierte la siguiente función con un fetch utilizando async-await.
  // Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

  // const getCharacters = async () => {
    // await fetch("https://rickandmortyapi.com/api/character")
      // .then((res) => res.json())
      // .then((characters) => console.log(characters));
  // };

  // getCharacters();
};

