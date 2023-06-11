'use strict';



//PASOS
//hacer el HTML básico (crear una tarjeta de ejemplo, estilo)
//pintar una tarjeta (fetch, crear la función que renderiza la tarjeta)
//pintar la lista completa de todas las tarjetas(cambiar la url API y hacer un bucle para recorrer el array que nos da el servidor)
//añadir a mis paletas favoritas (identificar )


//variables
//Comenzaremos copiandonos los datos del API (el array de objetos) a una variable de nuestro código JavaScript y generando el HTML para un único personaje.

const ulElement = document.querySelector('.js_card_list');
const url = `https://api.disneyapi.dev/character?pageSize=50`;



let listCharachtersApi = []; //la relleno cuando me lleguen los datos del servidor

//fetch
fetch(url)
    .then((response) => response.json())
    .then((listData) => {
        console.log(listData);
        listCharachtersApi = listData.data
        renderAllCharacters(listCharachtersApi);
        //ulElement.innerHTML = renderOneCharacter(data.data[0]);
        
    });

//funciones
function renderAllCharacters(listData) {
    for (const character of listData) {
        ulElement.innerHTML += renderOneCharacter(character);
    }
}

function renderOneCharacter(character) {
    let html = `
        <li id="${character._id}" class="card">
        <article class="character__box">
        <img class="character__img js_img"
            src="${character.imageUrl}"
            alt="Disney Characters:${character.name}" />
        <p class="character__name js_name">"${character.name}"</p>
        </article>
        </li>`;
           
    return html;
}
//Después, añadiremos un bucle para que se genere el HTML de cada personaje que hay en el array.




//eventos

//# sourceMappingURL=main.js.map
