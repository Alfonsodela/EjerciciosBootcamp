window.onload = () => {
  // 2.1 Inserta dinamicamente en un html un div vacio con javascript.

  const newDiv = document.createElement("newDiv");
  const emptyDiv = document.getElementById("prueba");
  emptyDiv.appendChild(newDiv);
  // console.log(emptyDiv);



  // 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

  const p = document.createElement("p");
  emptyDiv.appendChild(p);
  // console.log(emptyDiv);



  // 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

  for (let i = 0; i < 6; i++) {
    const p6 = document.createElement("p");
    emptyDiv.appendChild(p6);
    // console.log(emptyDiv);
  }



  // 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

  const soyDinamico = document.createElement("p");
  emptyDiv.appendChild(soyDinamico);
  soyDinamico.textContent = "Soy dinámico";
  // console.log(emptyDiv);



  // 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

  const wubba = document.querySelector(".fn-insert-here");
  wubba.textContent = "Wubba Lubba dub dub";
  // console.log(document.querySelector('.fn-insert-here'));



  // 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
  const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

  const ul = document.createElement("ul");
  emptyDiv.appendChild(ul);

  apps.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  // console.log(emptyDiv);



  // 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

  const eliminame = document.querySelectorAll(".fn-remove-me");

  eliminame.forEach((item) => {
    item.remove();
  });


  
  // 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
  // Recuerda que no solo puedes insertar elementos con .appendChild.

  const pDiv = document.createElement("pDiv");
  const div = document.querySelectorAll("div");
  // div.appendChild(pDiv)
  document.body.insertBefore(pDiv, div[1]);
  pDiv.textContent = "Voy en medio";
  console.log(div);



  // 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

  const pLocation = document.querySelectorAll("div.fn-insert-here");

  pLocation.forEach((item) => {
    const paragrahp = document.createElement("paragrahp");
    paragrahp.textContent = "Voy dentro";
    item.appendChild(paragrahp);
  });

};
