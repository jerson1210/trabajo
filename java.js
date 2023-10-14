window.onload = init;/*cuando la pagina carga llama la funcion init*/
function init(){/* lo qu realmente hace esta funcion es llamar los eventos que van a
pasar cuando el usuario orprima los botones , tambien se inicializan un varaibles de modo
global y desde aca se coloca el cronometro en cero*/
    document.getElementById("iniciar").addEventListener("click",cro);
    document.getElementById("parar").addEventListener("click",parar);
    document.getElementById("reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}  


function cro(){
    iniciar();
    id = setInterval(iniciar,1000);/*se utliza set interval para llamar
    a la funcion iniciar que se repita cada 1 segunda*/
    document.getElementById("iniciar").removeEventListener("click",cro);/*lo que se hace
    es remover el evento de que cuando el oprime iniciar cuando lo orpima una vez , ya no va volver
    a funcionar mas esto para no generar errores*/
}
function iniciar(){/*iniciar es la funcion que nos ayuda a poder dar inicio al reloj 
se utiliza varios if y las variables que anteriormente creamos cada una corresponde a los 
segundos , minutos , y horas y cuando cada una comple una condicion se va actulizando*/
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}
    document.getElementById("hms").innerHTML = h + ":" + m + ":" + s; /*va a reflejar los minutos horas y segundos
en la pagina*/}

function parar(){/* lo que se hace es llamar a la funcion clearinterval que funciona con id que se creo en la 
funcion cro , se pasa este id y para los intervalos que se llamaban a la funcion iniciar
y abajo se le agregar un evneto es para que el usuario pueda volver a seguir cronometrando en el segundo
o minuto donde lo paro*/
    clearInterval(id);
    document.getElementById("iniciar").addEventListener("click",cro); 
}
function reiniciar(){ /* se hace lo mismo se llama a la funcion clearinterval , pero en este caso se actulizan
las variables en 0:0:0 y por ultimo se refleja esto en la pgina con document.getElementary.iinerHtml*/
    clearInterval(id);
    h=0;
    s=0;
    m=0;
    document.getElementById("hms").innerHTML = h + ":" + m + ":" + s; 
}