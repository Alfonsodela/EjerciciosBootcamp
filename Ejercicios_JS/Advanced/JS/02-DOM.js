window.onload = () => {
  // 2.1 Inserta dinamicamente en un html un div vacio con javascript.

  // const emptyDiv = document.createElement('emptyDiv');
  // const newDiv = document.appendChild()


  // 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

  // const p = document.createElement('p');
  // const newDiv = document.getElementById('prueba');
  // newDiv.appendChild(p);
  // p.textContent = 'Dinamically inserted paragraph'



  // 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

  // for (let i = 0; i < 6; i++) {
  //   const p = document.createElement('p')
  //   const emptyDiv = document.getElementById('prueba')
  //   emptyDiv.appendChild(p)
  //   p.textContent = 'hora del café'
  // }



  // 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

  // const soyDinamico = document.createElement("p");
  // emptyDiv.appendChild(soyDinamico);
  // soyDinamico.textContent = "Soy dinámico";
  // // console.log(emptyDiv);



  // 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

  // const div = document.createElement('div')
  // const wubba = document.querySelector(".fn-insert-here");
  // wubba.appendChild(div)
  // div.textContent = "Wubba Lubba dub dub";
  // // // console.log(document.querySelector('.fn-insert-here'));



  // 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
  const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

  const ul = document.createElement('ul')
  const insertUl = document.getElementById('prueba');
  insertUl.appendChild(ul)

  apps.forEach(item => {
    const li = document.createElement('li');
    const insertLi = document.getElementById('ul');
    ul.appendChild(li)
    li.textContent = item
  })


  // 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

  // const removeNodes = document.querySelectorAll('.fn-remove-me')
  // removeNodes.forEach(item => {
  //   item.remove()
  // })

  

  // 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
  // Recuerda que no solo puedes insertar elementos con .appendChild.

  // const p = document.createElement('p')
  // const div = document.querySelectorAll('div')
  // p.textContent = 'Voy en medio!'

  // const insertP = document.body.insertBefore(p, div[1])

  

  // 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

  // const allDiv = document.querySelectorAll('div.fn-insert-here')
  // allDiv.forEach(item => {
  //   const p = document.createElement('p')
  //   p.textContent = 'Voy dentro!'
  //   item.appendChild(p)
  // })


 

};


 


