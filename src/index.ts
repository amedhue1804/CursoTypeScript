import { Console, error, log } from "console";

console.log("Hola Mundo");

var nombre:string= "Adrian";
let apellido:string="Medina";
const PI:number =3.1415;

console.log("Hola" + "Mundo");
console.log(nombre+apellido);
console.log(nombre,apellido);
console.log(`Hola${nombre}${apellido}`);

let a:string= "Wanillo", b:string="Kokunero";

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

let tarea1:Tarea = {nombre:"Tarea1",prioridad:2,estado:EstadoTarea.Terminado}

type Empleado = {
    nombre: string;
    edad: number;
    sueldo: number;
}

let empleadoAdri: Empleado = { nombre: "Adrian", edad: 24, sueldo: 1500 };

console.log(empleadoAdri.edad);

type Admin = {
    id: number;
}&Empleado;

let empleadoDani:Admin = {nombre: "Dani", edad: 24, sueldo: 1500,id:1234}

console.log(tarea1.estado=="E"?`La tarea ${tarea1.nombre} se encuentra en ejecucion`:'aun no se ha ejecutado');

//IF-ELSE

if(tarea1.estado=="P"){

}else if(tarea1.estado=="E"){

}else{

}

//Switch

switch(tarea1.estado){
    case "P":
        console.log("Tarea en proceso")
        break;
    case "E":
            console.log("Tarea en proceso")
        break;
    default:
        console.log("Tarea en proceso")
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

const cobrarempleado = (empleado:Empleado2) => {
    console.log(`${empleado.nombre} cobra su salario`);
}

obtenerSalario(empleadoMartin, ()=> `Cobrar Martin`);

//Async Function

async function ejemploAsync(): Promise<void>{
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
console.log("Compleatado")
}

ejemploAsync().then((respuesta)=> {
    console.log("Respuesta", respuesta)
}).catch((error)=>{
    
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
