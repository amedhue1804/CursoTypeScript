
export default class Persona {
    nombre:string;
    apellidos:string;
    edad:number;

    constructor(nombre:string,apellidos:string,edad:number){
        this.nombre=nombre;
        this.apellidos= apellidos
        this.edad= edad;
      
      
    }
    set setNombre(nombre:string){
        this.nombre= nombre;
    }
    get getNombre(){
        return this.nombre;
    }

    getJSON():string {
        return JSON.stringify(new Persona (this.nombre,this.apellidos,this.edad));
    }

    getJSONToObject(json:string):Persona{
        return JSON.parse(json) as Persona;
    }

    toTexto(){
        console.log(`${this.nombre} - ${this.apellidos} - ${this.edad}`)
    }
}
