'use strict';



//PASOS
//hacer el HTML básico (crear una tarjeta de ejemplo, estilo)
//pintar una tarjeta (fetch, crear la función que renderiza la tarjeta)
//pintar la lista completa de todas las tarjetas(cambiar la url API y hacer un bucle para recorrer el array que nos da el servidor)
//añadir a mis paletas favoritas (identificar )


//variables
//Comenzaremos copiandonos los datos del API (el array de objetos) a una variable de nuestro código JavaScript y generando el HTML para un único personaje.

const ulElement = document.querySelector('.js_card_list');
const url = `https://dev.adalab.es/api/disney?pageSize=15`;



let listCharachtersApi = []; //la relleno cuando me lleguen los datos del servidor

//crear var para cuando no haya img


//fetch
fetch(url)
    .then((response) => response.json())
    .then((listData) => {
        listCharachtersApi = listData.data
        renderAllCharacters(listCharachtersApi);   
    });

//funciones
function renderAllCharacters(listData) {
    for (const character of listData) {
        ulElement.innerHTML += renderOneCharacter(character);
    }
}

function renderOneCharacter(character) {
    let img = character.imageUrl;
    if (img === "") {
        img = "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";
    }
    let html = `
        <li id="${character._id}" class="card">
        <article class="character__box">
        <img class="character__img js_img"
            src="${img}"
            alt="Disney Characters:${character.name}" />
        <p class="character__name js_name">"${character.name}"</p>
        </article>
        </li>`;
           
    return html;
}
//Después, añadiremos un bucle para que se genere el HTML de cada personaje que hay en el array.

//hacer un if para cuando las tarjetas notengan img...


//eventos
