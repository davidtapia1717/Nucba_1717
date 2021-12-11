// EJERCICIO 0
// let nombreUsuario = prompt('Ingrese su nombre')
// alert('Hola ' + nombreUsuario)

// let apellidoUsuario = prompt('Ingrese su apellido')
// alert('Hola ' + nombreUsuario + apellidoUsuario)

//EJERCICIO 1
// let number1 = parseInt(prompt('Ingrese un numero'));
// let number2 = parseInt(prompt('Ingrese otro numero'));
// let resultado = number1 + number2;

// alert('El resultado es: ' + resultado)


//EJERCICIO 2
// let edad1 = parseInt(prompt("Cuantos años tiene?"));
// let año = 2021
// let añoDeNacimiento = año - edad1
// alert("Naciste en: " + añoDeNacimiento)

// EJERCICIO 3

// alert('Usted tiene 1500 a su favor')
// let balance = parseInt(prompt('¿Cuanto desea retirar?'));
// let saldo = 1500;
// let resultado = saldo - balance;

// alert('Su nuevo saldo es: ' + resultado);

//EJERCICIO 4
// let nota1 = parseInt(prompt("coloque su primer nota"));
// let nota2 = parseInt(prompt("coloque su segunda nota"));
// let nota3 = parseInt(prompt("coloque su tercer nota"));
// let suma = nota1 + nota2 + nota3;
// let promedio = suma / 3;

// alert('Su promedio es: ' + promedio);

//EJERCICIO 5
// let metros = parseInt(prompt("coloque la medida en metros"));
// let pulgadas = metros * 39.3701;
// let pies = metros * 3.28;
// let centimetros = metros * 100;

// alert('La medida en pulgadas es: ' + pulgadas );
// alert('La medida en pies es: ' + pies );
// alert('La medida en centimetros es: ' + centimetros );

//EJERCICIO 6
// let numero1 = parseInt(prompt('Coloque un numero'));
// let numero2 = parseInt(prompt('Coloque otro numero'));
// let suma = numero1 + numero2;
// alert('El resultado es: ' + suma );
// let numero3 = parseInt(prompt('Coloque un tercer numero'));
// let resultadoFinal = numero3 * suma;
// alert('El resultado final es: ' + resultadoFinal);

//EJERCICIO 7
// let minutos = parseInt(prompt('Coloque los minutos'));
// let segundos = minutos * 60;
// alert('Cantidad de Segundos: ' + segundos);

//EJERCICIO 8
// let base = parseInt(prompt('coloque la medida de la base'));
// let altura = parseInt(prompt('coloque la medida de la altura'));
// let area = base * altura;
// alert('El area del rectangulo es: ' + area );

//EJERCICIO 9
// let base = parseInt(prompt('coloque la medida de la base'));
// let altura = parseInt(prompt('coloque la medida de la altura'));
// let area = (base * altura) / 2;
// alert("el area es: " + area );

//EJERCICIO 10
// let monto = parseInt(prompt('Coloque el Monto'));
// let montoDescuento = parseInt(prompt('Coloque el Porcentaje de descuento'));
// let descuento = (monto * montoDescuento ) / 100;
// let montoFinal = monto - descuento;
// alert('El monto final a pagar es: ' + montoFinal);

//EJERCICIO 11
// let nombre = (prompt('Coloque su nombre'));
// let edad = parseInt(prompt('Coloque su edad'));
// let año = 2021 - edad;
// alert('Hola ' + nombre + ' usted nacio en el año ' + año);

//EJERCICIO 12
// let nombre = (prompt('coloque su nombre'));
// let temperatura = parseInt(prompt('Coloque la temperatura en Celsius'));
// let farenheit = temperatura * 33.8;
// alert('Hola ' + nombre + ' la temperatura en Farenheit es: ' + farenheit);

//EJERCICIO 13
// let nombre = (prompt('coloque su nombre'));
// let temperatura = parseInt(prompt('Coloque la temperatura en Farenheit'));
// let celsius = temperatura * (-17.22);
// alert('Hola ' + nombre + ' la temperatura en celsius es: ' + celsius);

//EJERCICIO 14
// let numero = parseInt(prompt('coloque un numero'));
// let suma = numero + 5;
// let multiplicacion = suma * 10;
// let division = multiplicacion / 3;
// alert(division);

//BONUS
// Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529)
// let numeroUno = (prompt('coloque un numero'));
// let numeroDos = (prompt('coloque otro numero'));
// let suma = numeroUno + numeroDos;
// alert(suma);

//Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por alert o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)
// let dias = parseInt(prompt('coloque la cantidad de dias'));
// let segundos = dias * 86400;
// alert('Es equivalente a ' + segundos + ' segundos.');

//Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)
// let kilometros = parseInt(prompt('coloque la cantidad de kilometros que desea recorrer'));
// let velocidad = parseInt(prompt('coloque la velocidad promedio en Kilometros por Hora'));
// let tiempoEnHoras = kilometros / velocidad;
// let tiempoEnMinutos = tiempoEnHoras * 60;
// alert('Tiempo estimado en llegar en minutos ' + tiempoEnMinutos);

//Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.
// ej: Sueldo bruto: $70.000
// Deducciones:
// Obra social: $2100
// Ley 19032: $2100
// Jubilación: $7700
// Neto a pagar: $58100
let sueldoBruto = parseInt(prompt('Ingrese su sueldo Bruto'));
let obraSocial = (sueldoBruto * 3) / 100;
let jubilacion = (sueldoBruto * 11) / 100;
let ley19032 = (sueldoBruto * 3) / 100;
let sueldoNeto = sueldoBruto - obraSocial - jubilacion - ley19032;
alert('Su sueldo Neto es de ' + sueldoNeto);
