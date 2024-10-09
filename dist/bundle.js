/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
console.log("Hola Mundo");
var nombre = "Adrian";
let apellido = "Medina";
console.log("Hola" + "Mundo");
console.log(nombre + apellido);
console.log(nombre, apellido);
console.log(`Hola${nombre}${apellido}`);
//Arrays de Datos
let alumnos = ["Wanillo", "Kokunero", "Adrian"];
let personas = ["Lucia"];
let union = [...alumnos, ...personas];
console.log(union);
let misDatos = {
    nombre: "Adrian",
    apellidos: "Medina",
    edad: 24
};
let configuracion = Object.assign({ versionTS: "Es6", versionCodigo: "1.0" }, misDatos);
let propiedad = configuracion.versionTS;
let propiedad2 = configuracion.versionCodigo;
console.log(`${propiedad}${propiedad2}`);
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["Pendiente"] = "P";
    EstadoTarea["EnProceso"] = "E";
    EstadoTarea["Terminado"] = "T";
})(EstadoTarea || (EstadoTarea = {}));
let estadoPendiente = EstadoTarea.EnProceso;
console.log(estadoPendiente);
let tarea1 = { nombre: "Tarea1", prioridad: 2, estado: EstadoTarea.Terminado };
let empleadoAdri = { nombre: "Adrian", edad: 24, sueldo: 1500 };
console.log(empleadoAdri.edad);
console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecucion` : 'aun no se ha ejecutado');
//IF-ELSE
if (tarea1.estado == "P") {
}
else if (tarea1.estado == "E") {
}
else {
}
//Switch
switch (tarea1.estado) {
    case "P":
        console.log("Tarea en proceso");
        break;
    case "E":
        console.log("Tarea en proceso");
        break;
    default:
        console.log("Tarea en proceso");
}
try {
    let numero1 = 1;
    console.log(numero1.toString);
}
catch (error) {
    console.log("Se ha producido un error al convertir un numero en String");
}
//Funciones
/**
 * Funcion que muestra un saludo por conosla
 */
function saludar() {
    let nombre = "Martin";
    console.log(`Hola, ${nombre}!`);
}
//Invocacion de la funcion
saludar();
/**
 * Funcion que muestra un saludo por conosla a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre) {
    console.log(`Hola, ${nombre}!`);
}
//Funcion con valor
const persona = "Martin";
saludarPersona(persona);
function despedirPersona(nombre = "Pepe") {
    console.log(`Adios, ${nombre}`);
}
despedirPersona();
despedirPersona("Alba");
function despedirOpcional(nombre) {
    if (nombre) {
        console.log(`Adios, ${nombre}`);
    }
    else {
        console.log(`Adios`);
    }
}
despedirOpcional(); //Adios
despedirOpcional("Juanjo"); //Adios Juanjo
function variosParams(nombre, apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad}`);
    }
    else {
        console.log(`${nombre} tiene ${edad}`);
    }
}
variosParams("Martin"); //Martin tiene 18 años
variosParams("Martin", "San Jose"); //Martin San jose tiene 18 años
variosParams("Martin", undefined, 30); //Martin tiene 30 años
variosParams("Martin", "San Jose", 30); //Martin San Jose tiene 30 años
function saludoconerror(a) {
    if (typeof (a) == `string`) {
        console.log("A ES UN STRING");
    }
    else if (typeof (a) == `number`) {
        console.log("A ES UN NUMBER");
    }
    else {
        console.log("No es un string ni un number");
        throw Error("A no es un string ni un number");
    }
}
saludoconerror("Hola");
saludoconerror(3);
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombrecompleto = ejemploReturn("Martin", "San Jose");
console.log(nombrecompleto); //Martin San Jose
console.log(ejemploReturn("Martin", "San Jose")); //Martin San Jose
/**
 *
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultipleParams("Martin");
ejemploMultipleParams("Martin", "Pepe", "Juan", "Alba");
const lista = ["Alberto", "Sandra"];
ejemploMultipleParams(...lista);
function ejemploParamLista(nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploParamLista(lista);
let empleadoMartin = {
    nombre: "Martin",
    apellidos: "San Jose",
    edad: 30
};
const mostrarempleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;
//Llamamos a la Arrow Function
mostrarempleado(empleadoMartin);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
    }
    else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
};
datosEmpleado(empleadoMartin); //Empleado martin esta en edad laboral
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
    }
    else {
        cobrar(); //callback a ejecutar
    }
};
obtenerSalario(empleadoMartin, () => `Cobrar Martin`);
//Async Function
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
        console.log("Compleatado");
    });
}
ejemploAsync().then((respuesta) => {
    console.log("Respuesta", respuesta);
}).catch(() => {
}).finally;
//Generators
function* ejemploGenerator() {
    //yield --> para emitir valores    
    let index = 0;
    while (index < 5) {
        //Emitimos un valor incrementado
        yield index++;
    }
}
//Guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();
//Accedemos a los valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3
//Worker
function* watcher(valor) {
    yield valor; //Emitimos valor actual
    yield* worker(valor); //Llamamos a las emisiones del worker para que emita otros valores 
    yield valor + 4; //Emitimos el valor final
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); //0 lo hace el WATCHER
console.log(generatorSaga.next().value); //1 LO HACE EL WORKER
console.log(generatorSaga.next().value); //2 LO HACE EL WORKER
console.log(generatorSaga.next().value); //3 LO HACE EL WORKER
console.log(generatorSaga.next().value); //4 LO HACE EL WATCHER
/**
 * CallBack
 */
let fsuma = function suma(a, b) {
    return a + b;
};
let fresta = function resta(a, b) {
    return a - b;
};
function opera(x, y, funcion) {
    return funcion(x, y);
}
opera(1, 2, fsuma);
opera(1, 2, fresta);
function asincrona() {
    return __awaiter(this, void 0, void 0, function* () {
        let suma = 0;
        for (let i = 0; i < 1000; i++) {
            suma += i;
        }
        return suma;
    });
}
asincrona().then((data) => { console.log(`El resultado es ${data}`); });
//ASYNC GENERADORA
function* fgenerador2() {
    yield "Hola";
    yield "Mundo";
    yield "IES";
}
let llamadafgen2 = fgenerador2();
let str = llamadafgen2.next();
while (str.done == false) {
    console.log(str.value);
}
function obtenerDatosweb() {
    return __asyncGenerator(this, arguments, function* obtenerDatosweb_1() {
        let peticion = yield __await(fetch("https://haveibeenpwned.com/API/v2/breaches"));
        let datos = yield __await(peticion.json());
        for (let index = 0; index < datos.length; index++) {
            yield yield __await(datos[index]);
        }
    });
}
let datosWebPage = obtenerDatosweb();
datosWebPage.next().then(({ value }) => { console.log(`${value.Name}`); });
datosWebPage.next().then(({ value }) => { console.log(`${value.Name}`); });
//SOBRECARGA DE FUNCIONES


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map