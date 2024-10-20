/*Instancio el tipo de datos que vamos a usar para obtener una imgPerro aleatoria*/
type Perro = {
    message:string,
    status:string
};
/*Funcion asincrona que se conecta a una API para traerse una imagPerro aleatoria*/
async function obtenerDatosPerro(): Promise<Perro>  {
    //Hacemos la peticion a la api de perros
    let peti = await fetch ("https://dog.ceo/api/breeds/image/random");
    //Parseo a JSON para que sea legible
    let datos = await peti.json() as Promise<Perro>;
    //Retorno de los datos
    return datos;
};
/*Llamamos a la funcion asincrona para traernos la imgPerro */
let perrito = obtenerDatosPerro();
perrito.then((perrito:Perro) =>{
    //Cuando la promesa se resuelve, creamos un elemento img con la URL de imgPerro
    let imgPerro = document.createElement("img") as HTMLImageElement;
    imgPerro.src = perrito.message;
     //Agregamos el listener para cambiar la imagen cuando se hace click en ella
     imgPerro.addEventListener("click", async () => {
        let nuevoPerro = await obtenerDatosPerro();
        imgPerro.src = nuevoPerro.message; // Cambiamos la imagen por una nueva
    });
    //Lo agrego al body
    let bodypag = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    bodypag.appendChild(imgPerro);
});
/*Elementos del DOM que vamos a usar para agregar o borrar contenido de la lista */
let input = document.getElementById("input-contenido") as HTMLInputElement;
let listaContenido = document.getElementById("lista-contenidos") as HTMLOListElement;
let btnAgregar = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement;
let btnEliminar = document.getElementById("btn-remove-content") as HTMLButtonElement;
let errores = document.getElementById("errores") as HTMLDivElement;
/*Listener para el boton de agregar contenido */
btnAgregar.addEventListener("click", (evento:Event)=>{
    //Si el usuario escribio algo en el campo de texto, se agrega a la lista
    if(input.value.trim()!=""){
        //Creamos un elemento de li con el texto del input
        let nuevoElemento = document.createElement("li");
        let txtElemento = document.createTextNode(input.value);
        nuevoElemento.appendChild(txtElemento);
        listaContenido.appendChild(nuevoElemento);
    }else{
        //Si el campo no esta relleno muestro el mensaje de error
        let mensajeError = document.getElementById("p-errores") as HTMLParagraphElement;
        mensajeError.textContent = "ERROR: No has escrito nada";
        errores.appendChild(mensajeError);
    }
});
/*Listener para el boton eliminar contenido */ 
btnEliminar.addEventListener("click", (evento:Event)=>{
    //Si hay elementos en la lista eliminamos el ultimo
    if(listaContenido.lastElementChild){
        listaContenido.removeChild(listaContenido.lastElementChild);
    }else{
        //Si no hay nada para borrar muestra:
        let mensajeError = document.getElementById("p-errores") as HTMLParagraphElement;
        mensajeError.textContent = "ERROR: No hay nada para borrar";
        errores.appendChild(mensajeError);
    }
});
/*Funcionalidad para la estrella solitaria que esta abajo del boton de agregar contenido */ 
let estrella = document.getElementsByName("single-star")[0] as HTMLElement;
/*Cuando pasamos el raton sobre la estrella, se rellena */
estrella.addEventListener("mouseover", () => { 
    estrella.classList.remove("bi-star");
    estrella.classList.add("bi-star-fill");
});
/*Cuando quitamos el raton de la estrella, se vacia si no ha clickado antes */ 
estrella.addEventListener("mouseout",() =>{
    if(estrella.classList.contains("clickeada")){
        //Si estaba clickeada, la vaciamos
        estrella.classList.remove("clickeada");
        estrella.classList.remove("bi-star-fill");
        estrella.classList.add("bi-star")
    }else{
        //Si no lo estaba rellenamos y marcamos
        estrella.classList.add("clickeada");
        estrella.classList.remove("bi-star");
        estrella.classList.add("bi-star-fill")
    }
});
/*Cuando hacemos click en la estrella, la rellenamos o la vaciamos segun en el estado en el que este */ 
estrella.addEventListener("click",() =>{
    if(estrella.classList.contains("clickeada")){
        //Si estaba clickeada, la vaciamos
        estrella.classList.remove("clickeada");
        estrella.classList.remove("bi-star-fill");
        estrella.classList.add("bi-star")
    }else{
        //Si no lo estaba rellenamos y marcamos
        estrella.classList.add("clickeada");
        estrella.classList.remove("bi-star");
        estrella.classList.add("bi-star-fill")
    }
});

