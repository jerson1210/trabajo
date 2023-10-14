window.onload = init;/*lo que hace es llamar ala funcion init que lo que hace 
es iniciar los enventos*/
function init(){
    document.getElementById("agregar").addEventListener("click",agregar);
    document.getElementById("borrar").addEventListener("click",borrar);
}   

function agregar(){/*primero se crea una variabel que toma la palabra ingresada
dsepues si es mayuscula la vuelve miniscula , despues se crea un variable lista 
que en ella se va crear un elemento li , despues en la lista se le iguala a la variable
donde se guardo la palabra , por ultimo se3 crea otro elemento de la lista par poder utilizar 
la funcion insert before que lo que hace es que cada vez que una palabra sea ingresada 
aparezca de primero y la ultima parte del codigo lo que hace es que cuando se de agregar 
deje el input en blanco*/
    var palabra= document.getElementById("texto").value;
    palabra=palabra.toLowerCase();
    var lista=document.getElementById("lista");
    var nuevalista=document.createElement("li");
    nuevalista.textContent=palabra;
    var viejalista= document.querySelector("li");
    
    lista.insertBefore(nuevalista,viejalista);
    document.getElementById("texto").value = "";

}

function borrar(){/* se crea una variable lista despues se crear un primer elemento que va guardar
el primer elemtno que tenga la lista y por ultimo el if si el primer elemento existe se elimina*/
    var lista=document.getElementById("lista");
    var primerElemento = lista.querySelector("li");

  if (primerElemento) {
    lista.removeChild(primerElemento);
  }

}

