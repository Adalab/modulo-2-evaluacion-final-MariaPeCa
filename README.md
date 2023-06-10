# Ejercicio de Adalab
# Módulo 2: Ejercicio de evaluación final

Este proyecto está incluído en el starter kit de Adalab. Para arrancar el proyecto solo necesitamos hacer nmp start.

**Enunciado** 

El ejercicio consiste en desarrollar una aplicación web que contiene un listado de personajes de Disney todo el planeta, que nos permite marcar y desmarcar los personajes como favoritos y guardarlos en localStorage.
La página también tiene una parte de maquetación con HTML y Sass.

**Hitos**

**1. Estructura básica**
En primer lugar hay que realizar una estructura básica del HTML. 
La aplicación de búsqueda de personajes de Disney consta de dos partes:
  1. Un listado de resultados de búsqueda donde aparece la imagen del personaje de Disney y el nombre. 
  2. Un campo de texto y un botón para buscar un personajes de Disney por su título.

**2. Mostrar listado**
Mostraremos una lista de tarjetas con los resultados de los personajes de Disney que obtendremos del API de
la página disneyapi

**3. Favoritos**
Una vez aparecen los resultados, la usuaria puede indicar cuáles son sus personajes de Disney favoritos. Para ello, al hacer clic sobre la tarjeta de un personaje animado debe pasar lo siguiente:
El color de fondo y el del texto se intercambian, indicando que es un personaje favorito.
Hay que mostrar otro listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda, con los personajes favoritos. 

**4. Almacenamiento local**
Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado de favoritos se debe mostrarse.

**Bonus**

5. BONUS: Búsqueda
al hacer clic sobre el botón de Buscar, la aplicación debe conectarse a Disney API.
Por cada personaje de Disney contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos una imagen del personaje y el nombre (igual que en el listado inicial).
Los personajes favoritos deben seguir apareciendo a la izquierda aunque la usuaria realice otra búsqueda. Es decir, el listado de favoritos se debe mantener entre búsquedas.

6. BONUS: Borrar favoritos
Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.

9. BONUS: Afinar la maquetación
Una vez terminada la parte de la interactividad de la página, podemos centrarnos en la parte de maquetación donde tenéis libertad para decidir los estilo. 

**¡Al turrón!**
