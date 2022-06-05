
String.prototype.replaceAt=function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); }

const palabras=['aleta','leon','nintendo','traje','paleta'];
const palabraEscogida=palabras[Math.floor(Math.random()*palabras.length)];
let palabraguionada=palabraEscogida.replace(/./g,"_ ");
let contador=0;
document.querySelector('#salida').innerHTML=palabraguionada;
document.querySelector('#verificar').addEventListener('click',() =>
{
    const letra = document.querySelector('#letra').value;
    let haFallado=true;
     
    for (const i in palabraEscogida){
        if (letra==palabraEscogida[i]){
            palabraguionada=palabraguionada.replaceAt(i*2,letra);
            haFallado=false;
        }
    }
    if (haFallado){
        contador++;
        document.querySelector('#imgAhorcado').style.backgroundPosition = -(230*contador)+ 'px 0';
        if (contador==7){
            alert("Has perdido");
        }
    }else{
        if(palabraguionada.indexOf('_')){
            alert("Has adivinado");
        }
    }
    document.querySelector('#salida').innerHTML=palabraguionada;
    document.querySelector('#letra').value = "";
    document.querySelector('#letra').focus();
})

document.querySelector('#salid2').innerHTML=palabraguionada;

    
    

