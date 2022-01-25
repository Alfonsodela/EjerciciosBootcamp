window.onload = () => {
  // 1.1 Basandote en el array siguiente, crea una lista ul > li
  // dinámicamente en el html que imprima cada uno de los paises.

  //   const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

  //   const list = document.createElement("ul");

  // for (const country of countries) {
  // const li = document.createElement("li");
  // li.textContent = country;
  // list.appendChild(li);
  //   }

  //   document.body.appendChild(list);
  //   console.log(body);

  // 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

  // const removeElement = document.querySelector('.fn-remove-me');
  // removeElement.remove();

  // 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
  // en el div de html con el atributo data-function="printHere".

  // const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

  // const div = document.querySelector('[data-function="printHere"]');
  // const carsList = document.createElement("ul");

  // for (const car of cars) {
  // const li = document.createElement("li");
  // li.textContent = car;
  // carsList.appendChild(li);
  // }

  // div.appendChild(carsList);

  // 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
  // h4 para el titulo y otro elemento img para la imagen.

  const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];

  // const bodyLocation = document.querySelector('body');
  // for (const country of countries) {
  // const div = document.createElement('div');
  // const h4 = document.createElement('h4');
  // const img = document.createElement('img');

  // bodyLocation.appendChild(div);
  // div.appendChild(h4);
  // div.appendChild(img);

  // h4.textContent = country.title
  // img.textContent = country.imgUrl;
  // }

  for (const country of countries) {
    let countryItem = document.createElement("div");
    countryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl}/>`;

    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar elemento";
    countryItem.appendChild(botonBorrar);

    botonBorrar.addEventListener("click", () => {
      countryItem.remove();
    });

    document.body.appendChild(countryItem);
  }

  // 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
  // elemento de la lista.

  // const countries = [
  // { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  // { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  // { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  // { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  // { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
  // ];

  // const body = document.querySelector("body");

  // const button = document.createElement("button");
  // button.innerHTML = '<button id="btnToClick">Delete last element</button>';
  // body.appendChild(button);

  // const selecButton = document.getElementById("btnToClick");
  // selecButton.addEventListener("click", () => {
    // let selectDivs = document.querySelectorAll("div");
    // selectDivs[4].remove();
  // });

  const myButton = document.getElementById('delete-last-element');
  myButton.addEventListener('click', (e) => {
  let selectDivs = document.querySelectorAll('div');
  selectDivs[selectDivs.length -1].remove();
  })

  // 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
  // elementos de las listas que elimine ese mismo elemento del html.

  // Ver ejercicio 1.4
};

const datos = async () => {
  await fetch("https://api.agify.io?name=michael")
    .then((response) => response.json())
    .then((myJson) => console.log(myJson));
};
console.log(datos());
