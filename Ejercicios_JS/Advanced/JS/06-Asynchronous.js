window.onload = () => {
  // 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
  // hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
  // console.log(). Para ello, es necesario que crees un .html y un .js.

  fetch("https://api.agify.io?name=michael")
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
    });

  // 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
  // fetch() para hacer una consulta a la api cuando se haga click en el botón,
  // pasando como parametro de la api, el valor del input.

  const baseUrl = "https://api.nationalize.io";

  const writeName = (event) => {
    const input = document.getElementById('input');

    fetch(baseUrl + "?name=" + input.value)
      .then((res) => res.json())
      .then((myJson) => {
        //   console.log(myJson)
        // console.log(`El nombre ${myJson.name} tiene un ${myJson.country[0].probability} de ser de ${myJson.country[0].country_id}`);
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

};




