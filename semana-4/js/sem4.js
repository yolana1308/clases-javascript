//clase semana 4

// se declara con corchetes []

const arrayDePrueba = [];
console.log(arrayDePrueba);
//para declarar un elemento especifico en  un array, usamos BRACKET NOTATION  

const arraysDeNumeros = [5,3,74,20,];
console.log(arraysDeNumeros);
console.log(arraysDeNumeros[2]);
console.log(arraysDeNumeros[0]);//  cero es donde arrranca es decir 5
console.log(arraysDeNumeros[4]);
console.log(arraysDeNumeros[5]);// muestra la posicion de los elementos escritos , no en el orden de mayor a menos , sino en posiscion escrita

const nombre = "lana";
console.log(nombre[1]);


//tambien se puede realizar operaciones 

const numeros = [1,2,3,4,5];
console.log(numeros[0]);
console.log (numeros[3]);

let reesultado = numer[1] + numeros[2];
console.log(resultado);

//recorrer un array: significa pasar por todos llos valores y hacer algo con ellos

const ArrayDeNumeros = [5,8,19,2,11,28];
for(let i = 0; i < 4, i++;){
    console.log("en tu array tenes" + arraysDeNumeros [i] + "en la posicion" + i);
};
console.log(arraysDeNumeros.length);
// no muestra los otros numeros porque no puse la cantidad de casillas en el for
//con el leigth permite recorrer la cantidad de casitllas de manera dinamica sin extenderse hasta el ultimo numero  o casilla que hay


const arraydenum = [3,4,13,8];
//PUSH: nos permite agregar el elemento al final del array

//sirve para agregar agregar cosas a un producto
//si el cliente quiere agregar el elemento a un carrito,
const nuevoNum = parseInt(prompt("ingrese un numero"));

arraydenum.push(7);
arraydenum.unshift(-10);
//UNSHIFT: nos permite agregaral PRINCIPIO DE LA LISTApara una linea de tiepo como las de facebook ,o cuando armas un tweet 
console.log(arraydenum);

//para eliminar elementos de unarray (push y unshift agregan al final y el principio) PUSH POP elimina el ultimo elemenrto de un array y UNSHIFT SHIFT elimina el pirimer elemento 

arraydenum.pop();
const ultimoEliminado = arraydenum.pop();
arraydenum.unshift();
const primerEliminado = arraydenum.unshift();



const arrayDeTareas =["lavar la ropa", "colgar la ropa" , "cocinar"];
console.log(arrayDeTareas);

/* let mensaje = "";
for(let i = 0; i < arrayDeTareas.length; i++){
    mensjae += arrayDeTareas[i] + "+";
};

console.log(mensaje); */
console.log(arrayDeTareas.join(" - "));
//si quiero separar los elemntos puedo poner un stringh como , . - / etc o dejar el espacio vacio o salto de line con 
//JOIN: nos permite unir un unico string todos los elementos de un array
//REVERSE: nos permite invertir el orden de los elementos de array , es de los conocidos metodos destructivos ademas de ejectutar algo modifica la raiz original,
arrayDeTareas.reverse(); //invierte orden


//index of enocntrar en el arrray el indice de un elemento especifico
const arrayNUMERO = [1,15,74,5,36,9,74,99];

console.log(arrayNUMERO.indexOf(99));
console.log(arrayNUMERO.indexOf(11));
console.log(arrayNUMERO.indexOf(74)); // ya hace un bucle si da numero negativo es que no esta en el array , buscar el indice en un elemento en un array, si encuentra devuelve el elemento pero si no devuelva -1, si tiene varios elementos iguales devuelve el primero que encuentró

//INCLUDES: true o false , nos permite conocer la existencia de un elemento de un array true si loo encuentra o false si no lo encuentra.

console.log(arrayNUMERO.includes(10));


//sort
//ordena de menor a mayor , alfabeticamente ,las mayusculas son menores que las minusculas. 

const arrayDETAREA = ["lavar la ropa", "colgar la ropa" , "cocinar", "planchar"];
const arrayDEnume = [1,15,74,5,36,9,74,99];

console.log(arrayDETAREA);
arrayDETAREA.sort();
arrayDETAREA.reverse();
console.log(arrayDETAREA);
// se puede concatenar tambien 
console.log(arrayDETAREA);
arrayDETAREA.sort().reverse();
console.log(arrayDETAREA);

//con numeros
console.log(arrayDEnume);
arrayDEnume.sort();
//arrayDETAREA.reverse();
console.log(arrayDEnume);

/*splice permite eliminar uno o varias elementos de un array en cualquier posicion funciona con dos parametros 
EL PRIMERO e el indice donde se ubica el metodo para trabajar y el SEGUNDO es la cantidad de elemntos a eliminar desdde esa posicion, si no especifico cantidadelimina todo desde donde esta el parametro dado
*/
const arrayDEnumeritos = [1,15,74,5,36,9,74,99];
//si quiero eliminar un elemento que no se donde esta posicionado uso (posision, cantidad de elemtos a eliminar)
const position = arrayDEnumeritos.indexOf(9)
arrayDEnumeritos.splice((2),1 );
console.log(arrayDEnumeritos);


//SLICE: crea una copia de l array original  cuyo contenido es una porcion de ese array. se escubre array.slice(1,4 ) el 1 es el indice de donde voy a ARRANCAR mi copia y el 4 es el indice donde voy a termunar mi copia PERO NO ESTA IINCLUIDA, SI QUERO HASTA LA OSICION 4 TENGO QUE ESCRIBI HASTA EL 5 si son varios elementos que no son consecutivos es mejor usar un for y selecionar los elementos
const nuevoArray = arraydenum.slice(2,5);
console.log(nuevoArray);


//CONCAT: nos permite concatenar 
//no se pede sumar array 
const arrayA =[1,2,3,];
const arratB = [4,5,6];

const arrayC = arrayA.concat(arratB);
const arrayD = arrayA.concat(arratB, arrayA);

console.log(arrayC);
console.log(arrayD);


// for of simirlar a FOR pero optimizado para arrays

const arraynumerardos = [11,15,74,5,11,36,9,11];

//for (let i = 0; i < arraynumerardos.length; i ++);{
   // console.log(arraynumerardos[i]);
//}; //aca toma por posisciones y pone contador

for (let numero of arraynumerardos){
    console.log(numero)
};//aca toma elementos del arrays 

