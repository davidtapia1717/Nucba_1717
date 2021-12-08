// Estas son las 2 funciones vasicas de JS
// alert("hola 1717!");
// prompt("¿Que dia es hoy?");

//Vamos a ver variables, cajas para guardar cosas
//la version old schoool
//Js no permite nombres numericos
var estoEsUnSaludo = "Hola!"
//en var el scope es global esto significa que declaro la variable y la puedo llamar desde cualquier parte del codigo, VAR te permite modificar su valor y actualmente no se recomienda su uso

//NO TODOS LOS DATOS SON IGUALES, hay diferentes tipos de datos 
//Existen
//
//--> Cadenas de texto o String : ex, "Esto es la intro a JS" y van entre comillas simples o dobles.
//
//--> Tipos de datos numericos enteros, o Integers, que son todos los reales, que son todos los reales positivo y negativos no fraccionales, por ejemplo, 1, 2, 3, 4 blah
//
// --> Tipos de datos numericos NO enteros, es decir con coma o que representan una fraccion, tambien conocidos como flotantes, o en el caso de datos como "floats" o "double"

//Tipo de dato booleano, el cual representa y solo puede expresarse en 0 y 1, o verdadero y falso (true or false)

//En JS, por defecto, todas las variables declaradas, son cadenas de texto o string.

//desde ES6+
let estoEsOtroSaludo ="Bajale la espuma a tu chocalate";
//let tiene scope local, solo existe esa variable dentro del espacio que fue declarado y su valor puede ser modificado
const esteEsElSaludoFinal = "Chau";
// Tiene la capacidad de trabajar con scope global y local, sin embargo no pueden ser modificadas.

//vamos a Saludar
//Declaro una constante para guardar el nombre del usuario
const nombre = prompt("¿Cual es tu nombre?");
//Uso un alert para saludar concatenando con la variable nombre.
alert("Hola " + nombre);

//Vamos a crear una calculadora o intentar
const primerNumero = prompt("Introduci un numero");
const segundoNumero = prompt ("Introduci otro numero");
const resultadoSuma = parseInt(primerNumero)+parseInt(segundoNumero);
alert("La suma es: " + resultadoSuma);

//NaN  = not a number
//parseInt() sirve para convertir un string de un numero entero a numero entero
//parseFloat() toma un numero sea entero o decimal, en string y lo convierte a float o double

