function valida(xnombreyapell, xtel, mensaje, xcorreo){
    xtel = parseInt(xtel)
    if(xtel>100000000 && xnombreyapell.length > 4 && mensaje.length > 4 && xcorreo.length > 4){
        alert("Mensaje enviado con Éxito");
    } else{
        alert("Ingresa tu numero de teléfono correctamente o rella algunos de los campos...");
    }
}