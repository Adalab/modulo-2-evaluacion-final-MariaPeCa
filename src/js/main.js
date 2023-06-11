'use strict';

//PASOS
//hacer el HTML básico (crear una tarjeta de ejemplo, estilo)
//pintar una tarjeta (fetch, crear la función que renderiza la tarjeta)
//pintar la lista completa de todas las tarjetas(cambiar la url API y hacer un bucle para recorrer el array que nos da el servidor)
//añadir a mis paletas favoritas (identificar )


//VARIABLES
//Comenzaremos copiandonos los datos del API (el array de objetos) a una variable de nuestro código JavaScript y generando el HTML para un único personaje.

const ulElement = document.querySelector('.js_card_list');
const url = `https://api.disneyapi.dev/character?pageSize=50`;



let listCharactersApi = []; //la relleno cuando me lleguen los datos del servidor
let listCharactersFav = [];//crear el array de favoritos, aquí debo guardar el eelmento clicado

//fetch peticion al servidor
fetch(url)
    .then((response) => response.json())
    .then((listData) => {
        listCharactersApi = listData.data //elijo la propiedad del array que necesito y lo guardo en array personal
        renderAllCharacters(listCharactersApi);  //una vez tengo los datos los renderizo(hago q se vean)
    
    });

//FUNCIONES
//creo una función para renderizar los datos que tengo guardados en mi array. esta función recorre el array y por cada elemento del array guarda en el HTML lo q nos retorna la funcion renderOneCharacter (creada previamente, que es un solo una tarjeta personaje)
function renderAllCharacters(listData) {
    for (const character of listData) {
        ulElement.innerHTML += renderOneCharacter(character);
    }
    addEventCharacter();
}

function addEventCharacter(){
const liElementList = document.querySelectorAll('.js_list');
    for (const li of liElementList) {
        li.addEventListener("click", handelClick);
    }
}

//Crear función render, esta función nos retorna un li con todo el HTML correspondiente a un personaje de la lista de la API. Posteriormente le añado un id(atributo gancho) para poder identificar el elemento clicado posteriormente. Añado un condicional para mostrar un placeholder el caso de que la tarjeta proporcionada por la Api no tenga imagen
function renderOneCharacter(character) {
    let img = character.imageUrl;
    if (img === undefined || img === "") {
        img = "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";
    }
    let html = `
        <li id="${character._id}" class="card js_list">
        <article class="character__box">
        <img class="character__img js_img"
            src="${img}"
            alt="Disney Characters:${character.name}" />
        <p class="character__name js_name">"${character.name}"</p>
        </article>
        </li>`;
           
    return html;
}
//EVENTOS
//escuchar un evento click sobre cada uno de las tarjetas de personajes para obtener la info del atributo gancho y saber cuál es el elemento clicado. Se lo he puesto al li completo por eso uso currentTarget.
function handelClick (event){
    const id = parseInt(event.currentTarget.id); //parseInt para convertirlo en número


//method find
const selectedCharacter = listCharactersApi.find((item) => item._id === id);
//

listCharactersFav.push(selectedCharacter);
console.log(listCharactersFav);
}

//Una vez obtengo el id me interesa guardar todo ese objeto que obtengo de la tarjeta de personajes en un array nuevo. El array de todos mis favoritos. Primero crear el array






