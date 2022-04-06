function fcirculo(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
    selector.className ='';
    selector.classList.toggle("circulo");
}

function frectangulo(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
     // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
    selector.className ='';
    selector.classList.toggle("rectangulo");
}

function frombo(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
     // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
    selector.className ='';
    selector.classList.toggle("rombo");
}

function arriba(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("subir"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function abajo(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("bajar"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function izquierda(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("izquierda"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function derecha(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("derecha"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function diagonal1(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("diagonal1"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function diagonal2(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("diagonal2"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function diagonal3(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("diagonal3"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function diagonal4(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("diagonal4"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function operaciones(){
    var a = Number(document.getElementById("valor1").value);
    var b = Number(document.getElementById("valor2").value);
    
    var operacion = document.getElementById("operaciones").value; //este hace referencia al select el cual va hacer la operacion en este caso
    

    switch (operacion) { //se da operación por que es quien tendra la variable desplegable
        case "+": // en caso que sea una suma la operacion del caso
            resultado = a + b; //aqui se realiza la operación
            document.getElementById("respuesta").value = resultado; // para la respuesta se llama a document y seleccionamos la variable para el resultado
            break;

        case "-": // en caso que sea una suma la operacion del caso
            resultado = a - b; //aqui se realiza la operación
            document.getElementById("respuesta").value = resultado; // para la respuesta se llama a document y seleccionamos la variable para el resultado
            break;

        case "+": // en caso que sea una suma la operacion del caso
            resultado = a * b; //aqui se realiza la operación
            document.getElementById("respuesta").value = resultado; // para la respuesta se llama a document y seleccionamos la variable para el resultado
            break;

        case "/": // en caso que sea una suma la operacion del caso
            resultado = a / b; //aqui se realiza la operación
            document.getElementById("respuesta").value = resultado; // para la respuesta se llama a document y seleccionamos la variable para el resultado
            break;

            
    }

}
// se le dan atributos a la funciona para activar el chat
function chatActive(){
    // se crean dos variables, una para capturar y la otra para agregar o quiyar la clase
    var selector = document.getElementById("chat");
    selector.classList.toggle("active");
    var selector2 = document.getElementById("bntChat");
    selector2.classList.toggle("active");
}