'use strict';



//PASOS
//hacer el HTML básico (crear una tarjeta de ejemplo, estilo)
//pintar una tarjeta (fetch, crear la función que renderiza la tarjeta)
//pintar la lista completa de todas las tarjetas(cambiar la url API y hacer un bucle para recorrer el array que nos da el servidor)
//añadir a mis paletas favoritas (identificar )


//variables

const ulElement = document.querySelector('.js_card_list');
const url = `https://api.disneyapi.dev/character?pageSize=50`;

//fetch
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        ulElement.innerHTML = renderOneCharacter(data.data[0]);
        
    });



//funciones
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

//eventos
