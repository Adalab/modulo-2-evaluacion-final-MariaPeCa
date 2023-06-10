'use strict';



//PASOS
//hacer el HTML básico (crear una tarjeta de ejemplo, estilo)
//pintar una tarjeta (fetch, crear la función que renderiza la tarjeta)
//pintar la lista completa de todas las tarjetas(cambiar la url API y hacer un bucle para recorrer el array que nos da el servidor)
//añadir a mis paletas favoritas (identificar )


//variables

const ulElement = document.querySelector('.js_card_list');
const url = `https://api.disneyapi.dev/character/6`;

//fetch
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        ulElement.innerHTML = renderOneCharacter();
    });



//funciones
function renderOneCharacter() {
    let html = `
    <li id="6" class="card">
    <article class="character__box">
        <img class="character__img js_img"
            src="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png"
            alt="Disney Characters:'Olu Mel" />
        <p class="character__name js_name">"'Olu Mel"</p>
    </article>
</li>`;
           
    return html;
}

//eventos

//# sourceMappingURL=main.js.map
