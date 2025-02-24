//variable: es un espacio de memoria reservado para almacenar informacion importante del programa. tres partes declaracion, asignacion de valores  e inicializar variables 

// declaracion-:
let cliente; 

//asignacion:
cliente= "carlos";
cliente= "samuel";

console.log(cliente);

//inicializar variables 
let edad =37;

console.log(edad);

//const: es una varieble cuyo valor no puede ser modificado una vez que a sifo asignado. abajo genera un ejempo donde la linea 23 es una modificacion hecha en a constante modificada, entonces cuando realizamos una inspecion con f2 va a saltar el error.

const nacimiento = 1987;

console.log(nacimiento);

nacimiento = 1997 ;

//video de ejemplo de video de vinculacion

console.log("el script esta funcionando corrrectamente"); 

const titulo = document.getElementById("titulo");
titulo.textcontent = "texto modificado"
//declarar esta etiqueta  de scrip al final del body o agregar el atributo defer para no delcarar la etiwueta al dinla de body                          
//estructura basica del IF (semana dos)

if (condición) {
    // Código a ejecutar si la condición es verdadera
}

//uso de else y esle if

if (condición) {
    // Código si la condición es verdadera
} else {
    // Código si la condición es falsa
}

//Cuando hay múltiples posibles condiciones que queremos evaluar, podemos usar else if para definir condiciones adicionales:

if (condición1) {
    // Código si condición1 es verdadera
} else if (condición2) {
    // Código si condición2 es verdadera
} else {
    // Código si ninguna de las condiciones anteriores es verdadera
}
//Consideremos un ejemplo simple para determinar si un estudiante aprueba o no un examen:

let calificacion = 75;

if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 70) {
    console.log("Bueno");
} else {
    console.log("Necesitas estudiar más");
}

//operadores de detalle
//En el ejemplo , el operador && se utiliza para asegurar que ambas condiciones sobre la variable edad sean verdaderas para permitir el acceso.
let edad = 20;
let acceso = (edad >= 18) && (edad <= 30);
console.log(acceso); // true si la edad está entre 18 y 30

//el operador || permite generar una advertencia si alguna de las condiciones climáticas es extrema.

let temperatura = 35;
let advertencia = (temperatura < 0) || (temperatura > 32);
console.log(advertencia); // true si la temperatura es menor que 0 o mayor que 32

//ciclo flor
//Este código imprimirá los números del 0 al 4 en la consola.
for (let i = 0; i < 5; i++) {
    console.log('Número: ' + i);
}

//ciclo while El ciclo while sigue ejecutándose mientras la condición especificada sea verdadera. A diferencia del ciclo for, la inicialización y actualización del contador suelen hacerse fuera y dentro del ciclo, respectivamente.


let i = 0;
while (i < 5) {
    console.log('Número: ' + i);
    i++;
}
//Ciclo Do...While
//A diferencia del ciclo while, el ciclo do...while garantiza que el cuerpo del bucle se ejecute al menos una vez, ya que la condición se evalúa después de la ejecución del código dentro del bucle.

let i = 0;
do {
    console.log('Número: ' + i);
    i++;
} while (i < 5);

//controlando ciclos
//Uso de break y continue
//En JavaScript, los bucles son estructuras que repiten bloques de código. Dentro de estos ciclos, las declaraciones break y continue permiten manejar el flujo de ejecución de formas más flexibles y potentes. Aquí veremos cómo y cuándo utilizar estas declaraciones para controlar los ciclos eficazmente.


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del ciclo cuando i es igual a 5
    }
    console.log(i); // Imprime los números de 0 a 4
}
//Contexto de uso: break es útil cuando necesitas detener el ciclo en una condición particular, por ejemplo, cuando se encuentra un valor específico en un array.


//Uso de continue
//La declaración continue omite la iteración actual del ciclo y continua con la siguiente, siempre y cuando la condición del ciclo siga siendo verdadera.
//Contexto de uso: continue es efectivo en casos donde solo algunas condiciones específicas requieren que el ciclo se omita, como saltarse valores especiales o erróneos dentro de una secuencia de datos.

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Omite los números pares
    }
    console.log(i); // Imprime los números impares entre 0 y 9
}

//Lugar de uso: Ambas declaraciones se pueden usar en todos los tipos de ciclos (for, while, do...while).

//Control del flujo: Ayudan a hacer el código más claro y fácil de entender al manejar casos especiales sin anidar demasiadas condiciones.

//Prevención de bucles infinitos: Es crucial actualizar las variables de control de los bucles cuando se utilizan break o continue para evitar ciclos sin fin.

//En JavaScript, las estructuras de control permiten dirigir el flujo de ejecución del programa basándose en condiciones lógicas. Las sentencias más comunes son if, else if y else, que permiten ejecutar bloques de código según se cumplan ciertas condiciones.
javascript
if (condición) {
  // Código a ejecutar si la condición es verdadera
} else {
  // Código a ejecutar si la condición es falsa
}

javascript
let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

javascript
Copiar código
let edad = null;
let nombre = "Carlos";

if (edad !== null && edad !== undefined) {
  console.log(`Tienes ${edad} años`);
} else {
  if (nombre) {
    console.log(`Bienvenido, ${nombre}`);
  } else {
    console.log("Información incompleta");
  }
}



//operadores utiles para evaluar condicones
javascript
Copiar código
let valor1 = 0;
let resultadoOR = valor1 || "Valor predeterminado";

console.log(resultadoOR); // "Valor predeterminado"

//Operador Nullish Coalescing (??)
javascript
Copiar código
resultado = a ?? b;

//introducion de las funciones

function saludar() {
    console.log("¡Hola, mundo!");
}

// para ejecutar la funcion de saludar que definimos, la llamamos usando su nombre en parentesis, ejemplo:
saludar();  // Muestra: ¡Hola, mundo!

//parametros y argumentos

//Las funciones pueden recibir datos externos mediante parámetros. Los parámetros actúan como variables locales dentro de la función. Aquí un ejemplo con parámetros:
function sumar(a, b)//parametros
 {
    return a + b;
}

let resultado = sumar(5, 3); //argumentos 
console.log(resultado);  // Muestra: 8


//ventaja de laas funciones
// Sin usar funciones (código repetitivo)
console.log("Hola, Ana");
console.log("Hola, Juan");
console.log("Hola, María");

// Usando funciones
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludar("Ana");
saludar("Juan");
saludar("María");
//simplicidad y claridad
//Aplicando el principio KISS ("Keep It Simple, Stupid"), las funciones ayudan a mantener la simplicidad del código. Al encapsular operaciones complejas dentro de funciones, el código principal se vuelve más sencillo y claro. En lugar de repetir las mismas líneas de código, una llamada a una función puede reemplazar múltiples instancias de código repetitivo, haciendo que el programa sea más legible y fácil de entender.
// Sin encapsular operaciones complejas
let base = 10;
let altura = 5;
let areaTriangulo = (base * altura) / 2;
console.log(`El área del triángulo es ${areaTriangulo}`);

// Encapsulando la lógica en una función
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.log(`El área del triángulo es ${calcularAreaTriangulo(10, 5)}`);


//reutilizacion de codigo
// Función para calcular el precio final con descuento
function calcularPrecioFinal(precio, descuento) {
    return precio - (precio * descuento / 100);
}

// Reutilizando la función en diferentes contextos
let precioCamisa = calcularPrecioFinal(50, 10);
let precioPantalon = calcularPrecioFinal(80, 15);

console.log(`Precio final de la camisa: ${precioCamisa}`);
console.log(`Precio final del pantalón: ${precioPantalon}`);


//modularidad
// Función para calcular el descuento
function calcularDescuento(precio, porcentajeDescuento) {
    return precio - (precio * porcentajeDescuento / 100);
}

// Función para calcular el precio final incluyendo impuestos
function calcularPrecioFinal(precio, descuento, impuesto) {
    let precioConDescuento = calcularDescuento(precio, descuento);
    return precioConDescuento + (precioConDescuento * impuesto / 100);
}

// Invocación
// Función para calcular el descuento
function calcularDescuento(precio, porcentajeDescuento) {
    return precio - (precio * porcentajeDescuento / 100);
}

// Función para calcular el precio final incluyendo impuestos
function calcularPrecioFinal(precio, descuento, impuesto) {
    let precioConDescuento = calcularDescuento(precio, descuento);
    return precioConDescuento + (precioConDescuento * impuesto / 100);
}

// Invocación
let total = calcularPrecioFinal(100, 10, 21);
console.log(total); // Muestra: 98.9



//creacion y uso de funciones
//1definir funcion
function mostrarLibros() {
    console.log("Bienvenido a la biblioteca. ¡Estos son los libros disponibles!");
}
//2 llamar la funcion
mostrarLibros(); // Muestra: Bienvenido a la biblioteca. ¡Estos son los libros disponibles!
//3: Añadir parámetros a la función

function buscarLibro(titulo) {
    console.log(`Buscando el libro: ${titulo}...`);
}

buscarLibro("El Principito"); // Muestra: Buscando el libro: El Principito...
//4 reutilizar el retorno de la funcion 

function calcularMulta(diasRetraso) {
    const multaPorDia = 0.50; // 50 centavos por día de retraso
    return diasRetraso * multaPorDia;
}

let multa = calcularMulta(5);
console.log(`La multa total es: $${multa}`); // Muestra: La multa total es: $2.5


//consejosadicionales 

function agregarLibro(titulo, autor) {
    return { titulo, autor };
}

function mostrarDetalleLibro(libro) {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
}

// Agregar un libro
let libro1 = agregarLibro("1984", "George Orwell");

// Mostrar detalles del libro
mostrarDetalleLibro(libro1);
// Muestra: Título: 1984, Autor: George Orwell



//declaracion de ina funcion con parametros
function agregarLibro(titulo, autor) {
    console.log(`Libro agregado: "${titulo}" por ${autor}.`);
}

//llamada de la funcion con argumento
function calcularMulta(diasRetraso) {
    const multaPorDia = 0.50; // 50 centavos por día de retraso
    return diasRetraso * multaPorDia;
}

// Llamada a la función con un argumento
let resultado = calcularMulta(7); 
console.log(`La multa por 7 días de retraso es: $${resultado}`);
// Muestra: La multa por 7 días de retraso es: $3.5



///Función con Múltiples Parámetros

function prestarLibro(titulo, usuario) {
    console.log(`El libro "${titulo}" ha sido prestado a ${usuario}.`);
}

prestarLibro("1984", "Ana");
// Muestra: El libro "1984" ha sido prestado a Ana.

//Parámetros y Escalabilidad del Código
//uso avanzado

function devolverLibro(titulo, diasRetraso = 0) {
    const multa = diasRetraso * 0.50;
    const mensaje = diasRetraso > 0 
        ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}` 
        : "Devuelto a tiempo. No hay multa.";
    console.log(`Libro "${titulo}": ${mensaje}`);
}

devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.




////scope global:ejemplo:
let color = 'azul'; // Variable global

function mostrarColor() {
    console.log(color); // Accede a la variable global
}

mostrarColor(); // Imprime: azul

//scope local:1. Scope de Función: Variables declaradas dentro de una función no son accesibles fuera de ella
function establecerColor() {
    let color = 'rojo'; // Variable local a la función
}
// console.log(color); // Error: color no está definido

//2. Scope de Bloque: Introducido con let y const en ES6, permite limitar el scope a un bloque específico, como en ciclos o condicionales.
if (true) {
    let color = 'verde'; // Variable de scope de bloque
    console.log(color); // Imprime: verde
}

// console.log(color); // Error: color no está definido



//¿Qué son las Funciones Anónimas?
const suma = function(a, b) {
    return a + b;
};
console.log(suma(5, 3)); // Salida: 8

//uso comunes
//Callbacks: Manejo de eventos o lógica asincrónica
document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Botón pulsado!");
});
//IIFE (Immediately Invoked Function Expressions): Ejecución inmediata para crear un alcance privado.
(function() {
    let mensaje = "Ejecutada al instante";
    console.log(mensaje);
})();
//metodos de arrays
let dobles = [1, 2, 3].map(function(num) {
    return num * 2;
})



//funciones anonimas y funciones flecha
//funciones anonimas 
const suma = function(a, b) {
    return a + b;
};
console.log(suma(5, 3)); // Salida: 8



//callbacks manejo de eventos  o logica asincronica 
document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Botón pulsado!");
});
//IIFE (Immediately Invoked Function Expressions): Ejecución inmediata para crear un alcance privado.
(function() {
    let mensaje = "Ejecutada al instante";
    console.log(mensaje);
})();
//metodo de arrays
let dobles = [1, 2, 3].map(function(num) {
    return num * 2;
});



// funciones flecha
const suma = (a, b) => a + b;
console.log(suma(5, 3)); // Salida: 8
//callbacks
let cuadrados = [1, 2, 3].map(n => n * n);
//let cuadrados = [1, 2, 3].map(n => n * n);




//semana 4 fundamentos de arrays
//Para declarar un array, puedes utilizar corchetes [], con o sin incluir valores inicialmente. Aquí te muestro algunas formas de declarar arrays:

// Array vacío
const arrayVacio = [];

// Array con números
const numeros = [1, 2, 3];

// Array con strings
const colores = ["rojo", "verde", "azul"];

// Array con varios tipos de datos
const mixto = [1, "dos", true];

//acceso a un array:Cada elemento en un array tiene un índice, que indica su posición. Los índices en JavaScript comienzan en 0, por lo que el primer elemento de un array está en el índice 0, el segundo en el 1, y así sucesivamente. Aquí tienes un ejemplo de cómo acceder a los elementos de un array:const frutas = ["manzana", "banana", "cereza"];

// Acceder al primer elemento
console.log(frutas[0]);  // "manzana"

// Acceder al tercer elemento
console.log(frutas[2]);  // "cereza"


//recorrrido de arrays: ejemplo de uso de bucle FOR

// Supongamos que tenemos el siguiente array de números
const numeros = [10, 20, 30, 40, 50];

// Para recorrer este array usaremos un bucle for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Esto imprimirá cada número del array en la consola
}


//ACCESO A ELEMENTOS 
//En JavaScript, cada elemento en un array tiene una posición única conocida como índice, que comienza desde 0. Esto permite acceder eficientemente a cualquier elemento específico del array. Veamos cómo hacer esto con ejemplos prácticos.
//DECLARACION DE UN ARRAYS DE FRUTAS
const frutas = ["Manzana", "Banana", "Cereza"];


//METODOS Y PROPIEDADES
//metodo de modificacion:PUSH:
//El método push añade uno o más elementos al final de un array. Este método modifica el array original y devuelve la nueva longitud del array.

let frutas = ['manzana', 'banana'];
frutas.push('naranja');
console.log(frutas);  // Salida: ['manzana', 'banana', 'naranja']

//Método pop:
//El método pop elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array

let frutas = ['manzana', 'banana', 'naranja'];
let frutaEliminada = frutas.pop();
console.log(frutaEliminada);  // Salida: 'naranja'
console.log(frutas);  // Salida: ['manzana', 'banana']


//METODO SHIFT:El método pop elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

let frutas = ['manzana', 'banana', 'naranja'];
let primeraFruta = frutas.shift();
console.log(primeraFruta);  // Salida: 'manzana'
console.log(frutas);  // Salida: ['banana', 'naranja']


///METODO UNSHIFT:El método unshift añade uno o más elementos al inicio del array y devuelve la nueva longitud del array

let frutas = ['banana', 'naranja'];
frutas.unshift('manzana');
console.log(frutas);  // Salida: ['manzana', 'banana', 'naranja']


//METODO DE BUSQUEDA
//EJEMPLO

let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
let indice = nombres.indexOf('Carlos');
console.log(indice);  // Salida: 2




//metodo includes
let frutas = ['manzana', 'naranja', 'banana'];
let contiene = frutas.includes('naranja');
console.log(contiene);  // Salida: true


///VIDEO ORDENAR ARRAYS
//ejemplos practicos
//. Uso básico con coma (default)

let colores = ['Rojo', 'Verde', 'Azul'];
let resultado = colores.join();
console.log(resultado);  // "Rojo,Verde,Azul"

// Uso con separador de espacio

let nombres = ['Ana', 'Juan', 'Carlos'];
let listaNombres = nombres.join(' ');
console.log(listaNombres);  // "Ana Juan Carlos"

//uso con separadorde guion

let elementos = ['Hidrógeno', 'Oxígeno', 'Carbono'];
let formula = elementos.join('-');
console.log(formula);  // "Hidrógeno-Oxígeno-Carbono"

//uso con separador vacio

let letras = ['J', 'a', 'v', 'a'];
let palabra = letras.join('');
console.log(palabra);  // "Java"




//objetos literales y su relacion

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires"
};

//ejemplo diferenciales

// Array
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // Accede al primer elemento: "rojo"

// Objeto Literal
const semaforo = {
    rojo: "Detenerse",
    verde: "Avanzar",
    azul: "Cuidado"
};
console.log(semaforo.rojo); // Accede al valor de la clave 'rojo': "Detenerse"


//diferencias con arrays

// Array
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // Accede al primer elemento: "rojo"

// Objeto Literal
const semaforo = {
    rojo: "Detenerse",
    verde: "Avanzar",
    azul: "Cuidado"
};
console.log(semaforo.rojo); // Accede al valor de la clave 'rojo': "Detenerse"



//manimulacion de arrays  y objetos. ejemplos practicos
//1agregar objetos con push
//Para agregar nuevos objetos a un array, se utiliza el método push. Esto es especialmente útil cuando se está construyendo una lista dinámicamente
const usuarios = [];
usuarios.push({ nombre: "Ana", edad: 25 });
usuarios.push({ nombre: "Luis", edad: 30 });

console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]


//2 Ordenar Objetos con sort
//El método sort puede ser personalizado para ordenar arrays de objetos basándose en alguna clave específica de los objetos.
usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]


//3 filtrar con filter , Para filtrar elementos de un array basándose en una condición, se usa filter, que es muy útil para obtener subconjuntos de un array basados en propiedades de los objetos
const mayoresDe25 = usuarios.filter(usuario => usuario.edad > 25);
console.log(mayoresDe25);
// Resultado: [{ nombre: "Luis", edad: 30 }]



//4. Buscar un Objeto con find  ,Para encontrar el primer objeto que cumple con una condición específica, se usa find.

const luis = usuarios.find(usuario => usuario.nombre === "Luis");
console.log(luis);
// Resultado: { nombre: "Luis", edad: 30 }