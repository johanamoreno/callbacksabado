function matricularPadawan(nombre,planeta,edad,estatura,clasificarActividad){

    let padawan={

        nombre:nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura, 
    }

console.log(padawan);

clasificarActividad(padawan.edad)

}

matricularPadawan("johana","jupiter",50,1.20,function(edad){

    if(edad>0 && edad<=15){
        console.log(`Manejo de Fuerza`);
    }else{
        console.log(`Manejo sable de luz`);
    }

})