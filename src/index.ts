import { Console, error, log } from "console";
import Cookies from "js-cookie";

console.log("Hola Mundo");

var nomb:string= "Adrian";
let apellido:string="Medina";

console.log("Hola" + "Mundo");
console.log(nomb+apellido);
console.log(nomb,apellido);
console.log(`Hola${nomb}${apellido}`);


//Arrays de Datos
let alumnos:string[]=["Wanillo","Kokunero","Adrian"];
let personas:string[]=["Lucia"];
let union:string[]=[...alumnos,...personas];
console.log(union);

let misDatos ={
    nombre:"Adrian",
    apellidos:"Medina",
    edad:24
}

let configuracion = {
    versionTS:"Es6",
    versionCodigo:"1.0",
    ...misDatos
}

let propiedad = configuracion.versionTS;
let propiedad2= configuracion.versionCodigo;

console.log(`${propiedad}${propiedad2}`)

enum EstadoTarea {"Pendiente"="P","EnProceso"="E","Terminado"="T"}

let estadoPendiente = EstadoTarea.EnProceso

console.log(estadoPendiente);

interface Tarea{
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}
try{
    let numero1:number=1;
    console.log(numero1.toString)
}catch(error){
console.log("Se ha producido un error al convertir un numero en String")
}

//Funciones
/**
 * Funcion que muestra un saludo por conosla
 */
function saludar(){

    let nombre="Martin"

    console.log(`Hola, ${nombre}!`);
}
//Invocacion de la funcion
saludar();
/**
 * Funcion que muestra un saludo por conosla a una persona
 * @param nombre Nombre de la persona a saludar 
 */
function saludarPersona(nombre:string){
    console.log(`Hola, ${nombre}!`);
}

//Funcion con valor
const persona = "Martin"
saludarPersona(persona);

function despedirPersona(nombre: string = "Pepe"){
    console.log(`Adios, ${nombre}`);
}

despedirPersona();
despedirPersona("Alba");

function despedirOpcional (nombre?:string){
    if(nombre){
        console.log(`Adios, ${nombre}`);
    }else{
        console.log(`Adios`);
    }
}

despedirOpcional(); //Adios
despedirOpcional("Juanjo");//Adios Juanjo

function variosParams(nombre: string, apellidos?:string, edad: number=18){
    if(apellidos){
    console.log(`${nombre} ${apellidos} tiene ${edad}`);
    }else{
        console.log(`${nombre} tiene ${edad}`)
    }
}

variosParams("Martin");//Martin tiene 18 años
variosParams("Martin","San Jose");//Martin San jose tiene 18 años
variosParams("Martin", undefined, 30);//Martin tiene 30 años
variosParams("Martin", "San Jose" , 30)//Martin San Jose tiene 30 años

function saludoconerror(a:string| number){
    if(typeof(a)== `string`){
        console.log("A ES UN STRING");
    }else if(typeof(a)== `number`){
        console.log("A ES UN NUMBER")
    }else{
        console.log("No es un string ni un number");
        throw Error("A no es un string ni un number")
    }
}

saludoconerror("Hola");
saludoconerror(3);

function ejemploReturn(nombre:string, apellidos: string):string{
 return `${nombre} ${apellidos}`
}

const nombrecompleto= ejemploReturn("Martin", "San Jose");

console.log(nombrecompleto);//Martin San Jose
console.log(ejemploReturn("Martin", "San Jose"));//Martin San Jose


/**
 * 
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres: string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    });
}

ejemploMultipleParams("Martin");
ejemploMultipleParams("Martin","Pepe","Juan", "Alba");

const lista=["Alberto", "Sandra"];
ejemploMultipleParams(...lista);

function ejemploParamLista(nombres: string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    });
}

ejemploParamLista(lista);

//Arrow Functions
type Empleado2 = {
    nombre: string
    apellidos: string
    edad:number
}

let empleadoMartin:Empleado2={
    nombre:"Martin",
    apellidos:"San Jose",
    edad: 30
}

const mostrarempleado=(empleado:Empleado2) => `${empleado.nombre} tiene ${empleado.edad} años`

//Llamamos a la Arrow Function
mostrarempleado(empleadoMartin);

const datosEmpleado =(empleado:Empleado2):string => {
    if(empleado.edad>70){
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`
    }else{
        return `Empleado ${empleado.nombre} esta en edad laboral`
    }
}

datosEmpleado(empleadoMartin)//Empleado martin esta en edad laboral

const obtenerSalario= (empleado:Empleado2, cobrar: ()=> string )=>{

    if(empleado.edad>70){
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`
    }else{
        cobrar() //callback a ejecutar
    }
}


obtenerSalario(empleadoMartin, ()=> `Cobrar Martin`);

//Async Function

async function ejemploAsync(): Promise<void>{
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
console.log("Compleatado")
}

ejemploAsync().then((respuesta)=> {
    console.log("Respuesta", respuesta)
}).catch(()=>{
    
}).finally

//Generators

function* ejemploGenerator(){
    //yield --> para emitir valores    
    let index=0;
    
    while(index < 5){
        //Emitimos un valor incrementado
        yield index++;
    }
}

//Guardamos la funcion generadora en una variable

let generadora= ejemploGenerator();

//Accedemos a los valores emitidos
console.log(generadora.next().value) //0
console.log(generadora.next().value) //1
console.log(generadora.next().value) //2
console.log(generadora.next().value) //3

//Worker

function* watcher(valor: number){

    yield valor;//Emitimos valor actual
    yield* worker(valor);//Llamamos a las emisiones del worker para que emita otros valores 
    yield valor +4;//Emitimos el valor final
}


function* worker (valor: number){
    yield valor +1;
    yield valor +2;
    yield valor +3;
}

let generatorSaga = watcher(0);
console.log(generatorSaga.next().value);//0 lo hace el WATCHER
console.log(generatorSaga.next().value);//1 LO HACE EL WORKER
console.log(generatorSaga.next().value);//2 LO HACE EL WORKER
console.log(generatorSaga.next().value);//3 LO HACE EL WORKER
console.log(generatorSaga.next().value);//4 LO HACE EL WATCHER

/**
 * CallBack
 */

let fsuma= function suma (a:number, b:number){
    return a+b;
}

let fresta= function resta (a:number, b:number){
    return a-b;
}


function opera(x:number,y:number, funcion:(a:number,b:number)=>number){
    return funcion(x,y);
}

opera(1,2,fsuma);
opera(1,2,fresta);

async function asincrona() {
    let suma:number=0
    for (let i=0;i<1000;i++){
        suma+=i;
    }

   return suma;
}

asincrona().then((data:number)=>{console.log(`El resultado es ${data}`)})

//ASYNC GENERADORA
function* fgenerador2():Generator<string>{
    yield "Hola"
    yield "Mundo"
    yield "IES"
}

let llamadafgen2 = fgenerador2();
let str= llamadafgen2.next();
type WEBPage={
    Name:string,
    Domain:string,
    Description: string
}


// Definición de la clase Tarea (esto es esencial para que el array de tareas funcione)
class Tarea {
    constructor(
        public id: number,
        public descripcion: string,
        public completada: boolean
    ) {}
}

/**
 * Función que almacena un conjunto de datos en el almacenamiento del navegador, 
 * ya sea en el Session Storage o en el Local Storage, dependiendo del tipo especificado.
 * 
 * @param type Indica el tipo de almacenamiento ("session" o "local")
 * @param key Clave para identificar los datos almacenados  
 * @param data Array que contiene las tareas a guardar
 */
function Ejercicio_2(type: string = "session", key: string, data: Tarea[]) {
    
    // Si el tipo es "session", almacenamos los datos en el Session Storage
    if (type === "session") {
        sessionStorage.setItem(key, JSON.stringify(data));
        console.log("Los datos se han guardado en Session Storage");
    
    // Si el tipo es "local", los guardamos en el Local Storage
    } else if (type === "local") {
        localStorage.setItem(key, JSON.stringify(data));
        console.log("Los datos se han guardado en Local Storage");
    }
}
//Ejercicio 5
// Simulación de sessionStorage y localStorage en Node.js
class Storage {
    private store: { [key: string]: string } = {};

    setItem(key: string, value: string) {
        this.store[key] = value;
    }

    getItem(key: string): string | null {
        return this.store[key] || null;
    }

    removeItem(key: string) {
        delete this.store[key];
    }

    clear() {
        this.store = {};
    }
}

// Crear instancias simuladas de sessionStorage y localStorage
const sessionStorage = new Storage();
const localStorage = new Storage();


// Definimos un array de tareas como ejemplo
const tareas: Tarea[] = [
    new Tarea(1, "Terminar el proyecto de TypeScript", false),
    new Tarea(2, "Estudiar para el examen", true),
    new Tarea(3, "Comprar materiales para la clase", false)
];

// Ejecucion 1: Guardar los datos en Session Storage
Ejercicio_2("session", "datos", tareas);

// Ejecucion 2: Guardar los mismos datos en Local Storage
Ejercicio_2("local", "datos", tareas);

// Función para recuperar datos del almacenamiento
function recuperarDeStorage(type: string = "session", key: string): Tarea[] | null {
    let jsonData: string | null;

    // Recuperamos datos según el tipo especificado
    if (type === "session") {
        jsonData = sessionStorage.getItem(key);
    } else if (type === "local") {
        jsonData = localStorage.getItem(key);
    } else {
        console.error("El tipo debe ser 'session' o 'local'.");
        return null; // Retornamos null si el tipo es inválido
    }

    // Verificamos si hay datos y los convertimos de JSON a objeto
    if (jsonData) {
        return JSON.parse(jsonData) as Tarea[]; // Convertimos el string JSON a un array de Tarea
    }

    console.log("No se encontraron datos en el almacenamiento.");
    return null; // Retornamos null si no hay datos
}


// Recuperar datos de Session Storage y mostrarlos por consola
const tareasDesdeSession = recuperarDeStorage("session", "datos");
console.log("Tareas recuperadas de Session Storage:", tareasDesdeSession);

// Recuperar datos de Local Storage y mostrarlos por consola
const tareasDesdeLocal = recuperarDeStorage("local", "datos");
console.log("Tareas recuperadas de Local Storage:", tareasDesdeLocal);

//Ejercicio6
/**
 * Función que elimina un dato almacenado en Session Storage o Local Storage
 * según el tipo especificado y la clave proporcionada.
 * 
 * @param type Indica el tipo de almacenamiento ("session" o "local")
 * @param key Clave para identificar los datos a eliminar
 */
function borrarDeStorage(type: string = "session", key: string) {
    if (type === "session") {
        sessionStorage.removeItem(key);
        console.log(`El dato con la clave "${key}" ha sido eliminado de Session Storage.`);
    } else if (type === "local") {
        localStorage.removeItem(key);
        console.log(`El dato con la clave "${key}" ha sido eliminado de Local Storage.`);
    } else {
        console.error("El tipo debe ser 'session' o 'local'.");
    }
}

// Ejemplo de cómo usar la función
borrarDeStorage("session", "datos"); // Eliminar del Session Storage
borrarDeStorage("local", "datos");   // Eliminar del Local Storage

//Ejericio 7

//a. Crear la cookie "nombre" que expira en 7 días y es accesible desde el path "/"
Cookies.set('nombre', 'Adrian', { expires: 7, path: '/' });
console.log('Cookie "nombre" creada');

// Crear la cookie "apellidos" que expira en 2 días
Cookies.set('apellidos', 'Medina', { expires: 2 });
console.log('Cookie "apellidos" creada');

// Crear la cookie "email" que expira en 4 días
Cookies.set('email', 'adrianmedina@gmail.com', { expires: 4 });
console.log('Cookie "email" creada');

// b. Recuperar las cookies y mostrarlas en la consola
const nombre = Cookies.get('nombre');
const apellidos = Cookies.get('apellidos');
const email = Cookies.get('email');

console.log('Cookie "nombre":', nombre);
console.log('Cookie "apellidos":', apellidos);
console.log('Cookie "email":', email);

//c. Borrar las cookies "nombre", "apellidos" y "email"
Cookies.remove('nombre', { path: '/' });  // Especificamos el path ya que la cookie fue creada con un path
console.log('Cookie "nombre" eliminada');

Cookies.remove('apellidos');
console.log('Cookie "apellidos" eliminada');

Cookies.remove('email');
console.log('Cookie "email" eliminada');

// ACCESO A ELEMENTOS DOM
let input = document.getElementById("input-contenido") as HTMLInputElement;
let btnNuevoContenido = document.getElementsByClassName("btn-add-content")[0] as HTMLButtonElement;
let btnEliminarContenido= document.getElementsByClassName("btn-remove-content")[0] as HTMLButtonElement;
let elemenoOl = document.querySelector("#lista-contenidos") as HTMLOListElement;

// EVENTO DEL BOTÓN AÑADIR
btnNuevoContenido.addEventListener("click", (event:Event) => {
    /*Verificamos que haya texto en el input*/
    if (input.value.trim() !== "") {
        /*Crear un nuevo elemento <li>*/
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerText = input.value;  // Usar el texto del input

        /* Añadir el nuevo elemento al final de la lista*/
        elemenoOl.appendChild(nuevoElemento);

        /*Limpiar el input después de añadir el contenido*/
        input.value = "";
    } else {
        console.log("Por favor, introduzca un texto válido.");
    }
});
//ELEMENTO DEL BOTON ELIMINAR
/* Para eliminar el boton necesitamos addEventListener porque estamos añadiendo una nueva accion
*Intente hacerlo con removeEventListener y segun he visto no funciona para el ejercicio de borrar sino
para borrar acciones de botones que se hayan instanciado
*/ 
btnEliminarContenido.addEventListener("click",(event:Event)=>{
/* Aqui miramos si hay un ultimo elemento*/ 
    if(elemenoOl.lastElementChild){
        elemenoOl.removeChild(elemenoOl.lastElementChild);//Eliminamos el ultimo
    }else{
        console.log("No hay elementos que eliminar")
    }
});