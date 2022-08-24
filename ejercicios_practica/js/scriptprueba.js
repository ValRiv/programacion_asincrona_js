const button = document.getElementById("btnConsultar");
button.onclick = async() => {

  const personaje=document.querySelector("#personaje").value;
  const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;
  fetch(url)
  .then(results=>results.json())
  .then(data =>{
    console.log(data.results[0])
    console.log(personaje)
    console.log(url)
  

  data.results.forEach(element =>{
    //const contenedor = document.createElement("div")
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
   
  

