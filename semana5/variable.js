    const nombre="Ritjoe Mujica";
    const direccion="Av. Siempre Viva 123"
    const pasatiempo="video juegos,"
    alert(nombre);
    console.error(direccion);
    console.warn(pasatiempo);

    let curso="Front-End Devoloper";

    console.log(curso);

    //guardar mas de un valor en una variable
    // Array -- Arreglo

    const cursosDeProgramacion= ["Html","Css","Js","React"];

    console.log(cursosDeProgramacion);


    // Para imprimir o usar un dato de un array empieza en cero y se usa VARIABLE[INDICE] 
    console.log(cursosDeProgramacion[2])
    //la mayoria de los array son const

    //JS tiene funciones para cambiar o agregar  el valor de un array

    //Push modifica solo a array

    // const datosVariados=[
    //   "mouse", true,100,null,-10,"hola"
    // ];

    // console.log(datosVariados)
    // datosVariados.push="nuevo dato al final"
    // console.log(datosVariados)
    // datosVariados.pop();
    // // borra el ultimo
    // console.log(datosVariados)

    // datosVariados.unshift("Nuevo Dato Al Inicio")
    // console.log(datosVariados)
    // datosVariados.shift();
    // // Borra el primer dato del array
    // console.log(datosVariados)




    const datosVariados = ["mouse", true, 100, null, -10, "hola"];

    /**
     * JS tiene funciones ya creadas para poder alterar los
     * valores de un arreglo
     */
    
    // insertar un nuevo valor al final del array
    datosVariados.push("otro dato");
    
    console.log("------------");
    console.log(datosVariados);
    
    // eliminar el ultimo elemento de un array
    datosVariados.pop();
    
    datosVariados[1] = false;
    
    // insetar un elemento en la primera posicion (0)
    datosVariados.unshift("soy primero");
    
    // eliminar un elemento en la primera posicon (0)
    datosVariados.shift();
    
    console.log("------------");
    console.log(datosVariados);
    
    console.log("------ AT ------");
    console.log(datosVariados.at(4)); //lo uso para buscar un valor en el array
