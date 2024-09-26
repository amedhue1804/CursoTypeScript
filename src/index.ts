import { Console } from "console";

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