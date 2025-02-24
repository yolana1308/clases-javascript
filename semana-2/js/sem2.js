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