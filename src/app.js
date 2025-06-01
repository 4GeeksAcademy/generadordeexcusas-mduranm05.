import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let whoRandom= who[Math.floor(Math.random()*who.length)]
  let actionRandom= action[Math.floor(Math.random()*action.length)]
  let whatRandom= what[Math.floor(Math.random()*what.length)]
  let whenRandom= when[Math.floor(Math.random()*when.length)]

  let ExcusaAleatoria= whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom + " "
  document.getElementById("Excuse").innerHTML=ExcusaAleatoria
  
}


//Resumen de Fase 2
//Cosas que debes saber sobre HTML/CSS
//¿Qué es HTML y para qué sirve?

//Los tags más esenciales como encabezados (<h1>, <h2>, <h3>...), párrafos (<p>), listas ordenadas/no ordenadas (<ol>, <ul>), etc. Piensa en cómo cada uno de estos tags cambia la apariencia, sensación y el comportamiento de tu sitio web. Por ejemplo, ¿qué parece más grande <h1> o <h2>? ¿Por qué usar <ul> en lugar de <ol>? Etc

//Cómo incluir una hoja de estilo CSS separada en el sitio web usando el tag <link>.

//Cómo incluir una hoja de estilo CSS separada en el sitio web usando el tag <link>.

//Cómo anular o mejorar el aspecto y el comportamiento de los tags HTML mediante el uso de selectores y reglas de CSS, por ejemplo:
//-¿Cómo puedo seleccionar un elemento para actualizar sus estilos? Usando un selector.
//-Lo más sencillo como cambiar el color del texto y manipular las fuentes (tamaño, familia, etc).
//-Cambiar el color o la imagen de fondo del elemento.

//Comprende completamente el tag <div> que inherentemente se comporta como una "caja" (lo que significa que tiene bordes, ancho y alto) y cómo usar <div> para separar visualmente su contenido.

//Cómo crear los layouts de sitios web más comunes utilizando la regla CSS display: flex;
//¿Cómo puedes hacer que un <div> esté del lado de otro? Aplicando display: flex; a un padre inmediato común.
//¿Cómo se puede hacer un layout de barra lateral?
//¿Cómo se puede hacer el clásico layout de "línea de tiempo de Instagram"?

// Cosas que debes saber sobre CSS





// resumen prework

// estructura basica HTML INSTERTARLA ESCRIBIENDO H5 o ! 
// <!DOCTYPE html

// selectores basicos 
 /*selector universal: aplica a todos los elementos del documento
 // *{
 // margin: 0
 // paddin: 0
 // }

 /*selector por tipo o etiqueta: aplica a todos los elementos <p>
 // p {
 // color: red;
 //} 

 /*selector por clase: aplica a cualquier elemento con class="destacado"
 // .destacado {
 // font-weight: Bold;
 //}

 /*selector por ID: aplica solo al elemento con id= "titulo"
 // #titulo{
 // font-size: 30px;
 // }

 /* SELECTORES COMBINADORES (RELACIONES ENTRE ELEMENTOS) */
 //todos los p dentro de un div
 // div p {
 // color: green
 // }

 /*SELECTOR HIJO DIRECTO: APLICAN A <li> que esten directamente dentro de un <ul>
 ul > li {
 list-style-type: square;
 }

 SELECTOR HERMANO ADYACENTE: APLICA AL <p> QUE VA JUSTO DESPUES DE UN <h1>
 h1 + p {
 font-style: italic;
 }

 SELECTOR HERMANO GENERAL: APLICA A TODOS LOS <p>  QUE VAN DESPUES DE UN <h1> como hermanos
h1 - p {
background-color: white;
}

SELCTORES DE ATRIBUTO: APLICA A INPUTS QUE SEAN ESPECIFICAMENTE DE TIPO TEXTO
input[type: "text"] {
border: 1px solid black;
}

APLICA A ENLACES (a) CUYO HREF COMIENCE CON "https"
a[href^="https"] {
color: green;
}

APLICA A IMAGENES CUYO ALT TERMINE CON ".jpg"
img[alt$=".jpg"] {
border: 2px dashed blue;
}

SELECTORES DE PSEUDOCLASE

APLICA CUANDO EL USUARIO PASA EL MOUSE POR ENCIMA DEL ENLACE
a:hover {
color: orange;
text-decoration: underline;
}

APLICA AL INPUT CUANDO ESTA ENFOCADO (ACTIVO)
input:focus {
outline: 2px solid blue;
}

APLICA AL PRIMERO <li> DENTRO DE UNA LISTA
li:first-child {
font-weight: bold;
}

APLICA AL ULTIMO <li> DENTRO DE UNA LISTA
li:last-child {
font-style: italic;
}

APLICA AL SEGUNDO HIJO (indice 2) DE UN ELEMNTO PADRE
li:nth-child(2) {
color: darkred;
}



// condicion if = si
// if (numero === string){
// console log('son iguales');
// }else if( numero == string){
// console.log('No son iguales los valores');
// else{
// console log('No son iguales')}

// = asignar valor
// == compara si los valores son iguales
// === compara si los valores y tipo de datos son iguales

// tipos de datos

// string - una cadena de texto
// numero -> 5
// boleano -> true o false
// Array -> []
// objeto -> {}
