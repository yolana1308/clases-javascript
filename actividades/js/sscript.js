/*let numero = 42;               // Variable 
let texto = "Hola, mundo!";    // Variable de texto  
const esVerdadero = true;      // Variable booleana  

console.log("Número:", numero);  
console.log("Texto:", texto);  
console.log("Es verdadero:", esVerdadero);

let contador = 0;
console.log(contador);

let numeroa = 13 ;
let numerob = 17 ;
let numeroc = numeroa + numerob ;

console.log(numeroc);

let numerod = 10;
let numeroe = 2;
let numerof = numerod - numeroe;

console.log(numerof);

let numerog = 10; 
let numeroh = 4;
let numeroi = numerog * numeroh;

console.log(numeroi) ;


alert(numerod - numeroe);

let nombredeusuario = prompt("ingresar nombre de usuario");

//console.log("el usuario se llama" + nombredelusuario);
//alert("el usuario se llama" + nombredelusuario);

//segunda actividad

let numeroAA = 5;
let numeroBB = 2 + 3;

console.log (numeroAA == numeroBB);
 
let numeroCC = 3;
let numeroDD = 1 - 6;

console.log (numeroCC == numeroDD);

// === es una igualdad estricta que compara valor y el tipo de dato

console.log ( 4 != 5);
console.log (5 != 5);   

const edad = parseint ( prompt ("ingrese su edad"));

if ( edad >= 18){
    alert ("bienvenido maestro mayor de obra");
} else {
    alert ("tomatela");
}

const edades = parseint(prompt("ingrese su edad "));

if ( edad < 18){
    alert ("los niños no entran");
} else if (edad > 60){
    alert ("ya estas muy decrepito para pasar");
} else { 
    alert   ("bienvenido a loa bosques de palermo");
}

const idioma = ("ingrese el idioma en el que quiere  saludar"). toLowerCase; //lowecase pne toda letra en misnuscula  y UPPERCASE en mayusculas.

if (idioma === "español"){
    alert ("hola");
} else if (idioma === "ingles"){
    alert ("hello");
} else if (idioma === "italiano"){
    alert("else");
} else {
    alert("no existe este idioma");
}

switch (idioma){
    case "español":
        alert ("hola");
        break;
    case "ingles":
        alert ("hello");
        break;
    default:
        alert ("idioma no registrado");
        break;
}

for(let i = 1 ; i < 11 ; i++ ){
    console.log ( " 7 * " + i + " = " + 7 * i);
}

const numeroParaLaTabla = parseInt(prompt("ingrese numeropara la tabla"));

console.log("esta es la tabla del " + numeroParaLaTabla );

for (let i = 1 ; i < 11 ; i ++);
    console.log(numeroParaLaTabla + " x " + i + " = " + numeroParaLaTabla * i);



const cantidadDeUsuarios = parseInt(prompt("ingrese la cantidaad de usuarios"));
let TodosLosNombres =  ""

for(let i = 0 ; i <cantidadDeUsuarios; i++){
    let nombre = prompt("ingrese su nombre de usuario");
    TodosLosNombres += nombre + "\n";
    console.log("usuario" + nombre);
};

const palabraMagica = "coder"
let palabraParaAdivinar = prompt("ingrese la palabra magica, a ver si tiene suerte");

while (palabraMagica !== palabraParaAdivinar) {
    alert("esa no es la palabra magica");
    palabraParaAdivinar = prompt("ingrese la palabra magica, a ver si la suerte lo acompaña");
};

let confirmar;

do{
    let nombre = prompt("ingrese el nobre del producto");
    alert("el producto elegido es" + nombre);

    confirmar = confirm("quiere seguir?");
} while(confirmar) 








//actividad 3 

function SaludarAlaTia(){
    const NombreDeLaTia = prompt ("ingrese el nombre de la tia que quiere saludar");
    console.log("hola tia" + NombreDeLaTia + "! como estas?");
}

SaludarAlaTia();

function saludar(persona){
    if (isNaN(persona)){
    console.log("hola," + persona);
    } else{
        console.log("no podes saludar al numero" + persona)
    }
};

saludar("nauhel");
saludar("fernando");
saludar("nadie");
saludar("5");

function SaludarParentesco(nombre, parentesco){
    console.log("hola, " + parentesco + " "  + nombre);

};

SaludarPariente("silvia", "tia");
SaludarPariente("nicolas", "primo");
SaludarPariente("maria ", "sobrina");
SaludarPariente("yaya", "");

//calculadora

function suma(a ,b){
    console.log("el suma es: " + (a + b));
};

suma(15 + 11);

function resta(a ,b){
    console.log("el ressta es: " + (a - b));
};

resta(19 + 11);

function multiplicacion(a ,b){
    console.log("el resultado es: " + (a * b));
};

multiplicacion(15 + 5);

function division(a ,b){
    if(b === 0 ){
        console.log("no se puede dividir en 0");
    } else{
    console.log("el cociente es: " + (a / b));
    };

};

division(5 + 11);

function calculadora(numeroA, numeroB , numeroC){
    switch (operacion){
        case "+" :
            let resultadoSuma = suma (numeroA , numeroB);
            return resultadoSuma;
            break;
        case "-":
            let resultadoResta = resta (numeroA , numeroB);
            return resultadoResta;
            break;
        case "*":
            let resultadoMultiplicacion = multiplicacion (numeroA , numeroB);
            return resultadoMultiplicacion;
            break;
        case "/":
           let resultadoDivision = division (numeroA , numeroB);
           return resultadoDivision;
            break;

        default:
            alert ("no exise esa operacion");
            break;
    };
};

//let resultado = calculadora  ( 3 , 6 , "*")
//let resultado = suma  ( 3 , 6 , "+");
//console.log(resultado);
console.log(calculadora(3 , 6 , "+"));
alert(calculadora(3 , 6 , "+"));

//ahoara optimizado
function calculadora (numeroA, numeroB , numeroC) {
    let resultadoFinal ; 
    switch (operation){
        case "+":
            resultadoFinal = suma (numeroA, numeroB);
            break;        case "-" :
            resultadoFinal = resta(numeroA,  numeroC);
            break;        case "*":
            resultadoFinal = multiplicacion (numeroA, numeroB);
            break;
        case "/":
            resultadoFinal = division ( numeroA , numeroB);
            break;
        default: 
            resultadoFinal = "operacion n o valida";
            break;
    };

    return resultadoFinal
};


//CICLO

let continuar = true;

while(continuar){
    let numeroA = parseInt (prompt("ingrese su numero"));
    let numeroB =  parseInt(prompt("ingreses su numero"));
    let operacion = prompt ("ingrese la operacion (+ - * /");

    let resultado = calculadora ( numeroA, numeroB, operacion);

    alert("tu resultado es" + resultado);

    continuar = confirm(" quiere seguir operando en nuestra calculadora");
};

// se pude declarar tambien

const suma = function(numeroA , numeroB){
    return numeroA + numeroB;
};
console.log(suma(1,2));

const suma = (numeroC , numeroD) => {
    return suma = ( numeroC + numeroD) ;
};

console.log(suma(12, 3 ));


function variarIntentos(i){
    if (i=== 2){
        return "se agotaron los intentos, su cuenta sera bloqueada";
    } else {
        if ( i === 0 ){
            return "re quedan 2 intentos";
        } else {
            return "te queda 1 intentno";
        };
    };
};

for (let i= 0; 1 < 3 ; i ++) {
    const usuario = prompt("ingrese su usuario");
    const clave = prompt("ingrese su clave ");
    
    if (usuario === "user" && clave === "password"){
        alert ("bienvenido usuario!");
        break;
    } else {
        alert ("credenciales invalidas");
        const mensaje = validarIntentos (I);
        alert(mensaje);
    };
};


*/

//ejemplo para entrega como ejemplo final
//CLAE CUATRO DE ARRAYS ,MINUTO 2:06:14


let opcion;
const listaDePresentes = [];
const listaDeAusentes = [];

function verPresentes(){
    if (listaDePresentes,length === 0){
        alert("mo tener alumnos cargados presentes")
    } else {
        alert ("estos son los alunmos presentes:");
        alert(listaDePresentes.join("\n"));
    };
};

function verAusentes() {
    if (listaDeAusentes.length  === 0);
        alert("no tenes alumnos ausentes");
    } else {
        alert("estos son los alumnos ausentes");
        alert(listaDeAusentes.join("\n"));
    };
};

do{
    opcion = parseInt(prompt("bienenido al sistema de gestion de alumnos'n\n1. para ver los pesentres.\n\n2 para ver los ausentes \n3 para agregar un alumno a la lista \n\npara salir ingrese 0")) ;

    switch(option){
        case 0:
            alert("gracias, vuelva prontos!");
            break;
        case 1:
            verPresentes();
            break;
        case 2:
            verAusentes();
            break;
        case 3:
            agregarAlumno();
            break;
        default:
            alert("opcion invalida");
            break;
    };
} while ( "opcione" !=== 0);