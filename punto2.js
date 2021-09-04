function robarPlanos(id,despegarNave){

    if(id>0 && id<=10){
        console.log(`Accedimos a el plano ${id}`)
        despegarNave(null);
    }else{
        console.log(`Accedimos a el plano falso`)
        despegarNave("error");
    }
}
robarPlanos(5,function(error){

    if(error){
        console.log("Devolvete papa..")
    }else{
        console.log("Arrancando la nave..")
    }
})

