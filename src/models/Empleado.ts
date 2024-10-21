import Persona from "./Persona";

export default  class Empleado extends Persona{
    salario:number;

    constructor (nombre:string,apellidos:string,salario:number,edad:number){
        super(nombre,apellidos,edad);
        this.salario=salario;
    }

    getToTexto():void{
        super.toTexto()
        console.log(`${this.salario}`)
    }
}