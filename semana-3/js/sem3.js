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