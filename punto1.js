let matricularPadawan=(nombre,planeta,edad,estatura,clasificarActividad){

let padawan={

    nombre:"johana",
    planeta:"jupiter",
    edad:13,
    estatura:1.30, 
}

let clasificarActividad=(padawan.edad,actividad)=>{

    if(padawan.edad>0 && padawan.edad<=15){
        console.log(`Manejo de Fuerza`)
        actividad("Manejo de Fuerza");
    }else{
        console.log(`Manejo sable de luz`);
        actividad("Manejo sable de luz")
    }
}

clasificarActividad(edad,manejodefuerza=>{

    if(manejodefuerza){
        console.log("Su actividad es Manejo de Fuerza")
    }else{
        console.log("Su actividad es Manejo sable de luz")
    }
})
}