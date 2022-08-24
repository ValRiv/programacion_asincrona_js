"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
    --> Leer el README para ver el enunciado
    # 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Consultar"
y leer los datos ingresados en "personaje".
- Tome esos datos y dentro del evento consulte los datos del
  personaje con la API mediante fetch.
- Ejemplo de la URL con la variable personaje:
- * `https://rickandmortyapi.com/api/character/?name=${personaje}`
- Capture los datos del personaje en un JSON e imprimalos en consola.


*/

const button = document.getElementById("btnConsultar");
button.onclick = async() => {

  const personaje=document.querySelector("#personaje").value;
  console.log(personaje)
  const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;
  fetch(url)
  .then(results=>results.json())
  .then(data =>{
    console.log(data.results[0])
    
    
    /*## 2 - Enunciado
- Capture la información del personaje y preséntela en el HTML, puede
  presentar la información como los ejemplos que se muestran en la página
  de la API:

![personaje_biblesuarus](personaje_biblesaurus.jpg)

- Puede agregar o no estilos al HTML, o presentar la información de forma cruda (queda a su criterio y creatividad).
*/

  data.results.forEach(element =>{
    const li = document.createElement("div");
      li.innerHTML = `
      <img src= "${element.image}" alt="">
      <h1> ${element.name}</h1>
      <li> ${element.status}</li>
       <li>${element.species}</li>
      <h2> ${element.location.name}</h2>
    `
      document.body.appendChild(li);
    });
  });
  } 
   
  

