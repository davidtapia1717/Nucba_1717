//CONDICIONALES
// toman apartir de una condicion  una decision, si se cumple va a pasar determinada cosa y sino va a pasar otra
//Un condicional es la respuesta de nuestro programa a determinada situacion o condicion la cual si se cumple nos va a responder de N forma y sino nos va a dar otra respuesta

/*
    SI tengo 18 años o mayor:
        Soy mayor de edad
    SINO: 
        NO soy mayor de edad
*/

//vamos a pasar el condicional de arriba a codigo

// const edad = prompt('Que edad tenes?')
// if(edad >= 18){
//     alert("Sos mayor de edad");
// } else {
//     alert('No sos mayor de edad');
// }


/*
= : compara de forma no estricta y evalua si sobre-escribir el valor de una condicion, este operador jamas se utiliza en un condicional

== : compara de forma no estricta el valor de nuestra variable con la condicion a cumplir

=== : compara de forma estricta, nuestra variable o dato con el valor de la condicion a cumplir

<> : el simbolo menor y mayor, lo que hace es delimitar un vector numerico en el cual nuestra condicion se cumple o no.

&& : Representa el valor AND o Y en español, y su funcion es la de contatenar varias condiciones que deben cumplirse para ejecutar las intrucciones que se encuentran dentro de IF

|| : OR u O en español, en donde su funcion, es que SI se cumple un acondicion O la otra condicion, sse ejecuta lo que esta denro de nuestro condicional.

*/

const edad = prompt('Que edad tenes?')
if(edad >= 18 && edad <= 21){
    alert("Sos mayor de edad y naciste a partir del año 2000");
} else if(edad > 21){
    alert('Sos mayor edad y naciste antes del año 2000');
} else {
    alert('Sos menor de edad');
}

//----------------------------------------------------------------------------------------------------------------//

//Switch statement

switch (new Date().getDay()){
    case 0:
        day = "Domingo";
        alert(day);
        break;
    case 1:
        day = "Lunes";
        alert(day);
        break;
    case 2:
        day = "Martes";
        alert(day);
        break;
    case 3:
        day = "Miercoles";
        alert(day);
        break;
    case 4:
        day = "Jueves";
        alert(day);
        break;
    case 5:
        day = "Viernes";
        alert(day);
        break;
    case 6:
        day = "Sabado";
        alert(day);
}