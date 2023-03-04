// //============================================EVERYDAY TYPES======================================

// let string: string = 'jorge';
// let number: number = 22;
// let boolean: boolean = true;
// let arrayNumber: number[] = [1, 2, 3, 4, 5];
// let arrayString: string[] = ["1", "2", "3"];
// let array: Array<number> = [1, 2, 3];
// let obj: {
//     nombre: string;
//     apellido: string;
// } = { nombre: 'jorge', apellido: 'lopez' }

// //INTERFACE / TYPE

// interface Person {
//     nombre: string;
//     apellido: string;
//     edad: number
// }

// let obj: Person = { nombre: 'jorge', apellido: 'lopez', edad: 21 }

// //RECORD - Usado para asignar una clave-valor

// let obj: Record<number, number> = {
//     1: 1,
//     2:2
// }
// obj[3] = 3 //push new param
// console.log(obj); //{ '1': 1, '2': 2, '3': 3 }

// //============================================FUNCIONES======================================

//function params and return type / default params (22)

// function suma (a:number, b:number = 22):number {
//     return a + b
// };

//union types (parametro acepta mas de un tipo de dato)

// function joinStrs (a:string, b:string | number | boolean):string {
//     return `${a + b}`
// };

// console.log(joinStrs('hola', true)); //'holatrue'

// //si la funcion no retorna nada se declara el return type con void

//PROMISE RETURN TRPE

// function promesa (data:string): Promise<string> {
//     return Promise.resolve(data)
// }

// console.log(promesa('asd'))

// //REST PARAMETERS

// // aca el primer parametro va a ser el nombre y los demas se van a almacenar todos en un array de strings llamado "names"

// function rest (nombre: string, ...names:string[]): string | string[] {
//     return (names)
// }
// console.log(rest('jorge', 'asd','asd','asd','asd', )) 

// // ==================================CALLBACKS==========================================

// //recordamos que un callback es una funcion que pasa una funcion como argumento

// //esta funcion toma un numero como argumento y lo devuelve en el callback para luego imprimirlo, hay muchas formas de hacer esto

// function callbackFunction(age: number, callback: (data: number) => number) {
//   console.log(callback(age));
// }

// callbackFunction(1, (i) => { return i }) // 1

// //mismo ejemplo con type. A diferencia de interface necesita el =

// type cbFunction = (data: number) => number;

// function callbackFunction(age: number, callback: cbFunction) {
//   console.log(callback(age));
// }

// callbackFunction(1, (i) => { return i }) // 1

// ================================== DIFERENCIA ENTRE INTERFACE Y TYPE ============================================

// type es una forma de definir un alias de tipo, mientras que interface es una forma de definir una estructura para un objeto.

//====================================== FUNCTION OVERLOADING ====================================000

// es cuando en la misma funcion podemos ajustar a que acepte x tipos de entrada, por ejemplo en coordenadas que acepte numeros, 
// un objeto, o un string y a partir de la eleccion con un condicional elegir que hacer con cada tipo de entrada, bastante piola

// interface Coordinate {
//   x: number,
//   y: number,
// }

// no hice el ejemplo de string porque es medio quilombo 
// function getCoords(x: number, y: number): Coordinate; //ENTRADA CON NUMBER
// function getCoords(obj: Coordinate): Coordinate; //ENTRADA CON OBJ
// function getCoords(arg1: unknown, arg2?: unknown): Coordinate { //OVERLOAD FUNCTION
//   let coord: Coordinate = {
//     x: 0,
//     y: 0,
//   }
//   //verificamos los tipos de entrada 
//   if (typeof arg1 === 'object') {
//     coord = { ...arg1 as Coordinate }
//   } else if (typeof arg1 === 'number') {
//     coord = { x: arg1 as number, y: arg2 as number }
//   }
//   return coord
// }

// console.log(getCoords({ x: 1, y: 2 })) //output { x: 1, y: 2 }
// console.log(getCoords(1, 2)) //output { x: 1, y: 2 }


//====================================== OPTIONALS ====================================000

// interface User {
//   id: number,
//   name: string,
//   lastname?: string,
// }

// function getData (user: User): object { 
//   //hay que verificar si lastname existe en el ejemplo de abajo sino tira error porque user PUEDE tirar null 
//   //return user.lastname <========= error^^^
//     return user
//   }

//============================================OPTIONAL FUNCTION CALL(?.)============================================

// function callback(arg1: string, callback?: () => void): void {
//   console.log(arg1);
//   callback?.() //<====== 
// }

//===============================================TUPLAS (ejemplo con 'estado', un poco raro el codigo)==================================

// function stringState(initial: string): [() => string, (v: string) => void] {
//   let initialStr: string = initial
//   return [
//     () => initialStr,
//     (str) => {
//       initialStr = str
//     }
//   ]
// }

// const [get, set] = stringState('hello')

// console.log(get()); //hello
// set('bye')
// console.log(get()); //bye

//===================================================GENERICS===================================================00

// Mismo ejemplo con estado, reemplazando tipo string por generic <T> (puede ser cualquier nombre en vez de T)
// function stringState<T>(initial: T): [() => T, (v: T) => void] {
//   let initialStr: T = initial
//   return [
//     () => initialStr,
//     (str) => {
//       initialStr = str
//     }
//   ]
// }

// const [get, set] = stringState(10) // aca si no ponemos nada es unknown, si ponemos un valor toma ese valor como tipo

//OVERRIDE INFERED GENERICS TYPE (CAMBIAR EL ESTADO INFERIDO) 

// const [get, set] = stringState<string | null>(null) //si es null, no podemos hacer operaciones, por ende hay que declarar que puede ser cambiado
// set('asd')   //aca cambiamos de null a un string 
// console.log(get()); 


