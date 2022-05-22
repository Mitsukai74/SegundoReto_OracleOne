
String.prototype.replaceAt=function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); }

const palabras=['aleta','leon','nintendo','traje','paleta'];
const palabraEscogida=palabras[Math.floor(Math.random()*palabras.length)];
let palabraguionada=palabraEscogida.replace(/./g,"_ ");
//alert(palabraEscogida + " - " + palabraguionada);
document.querySelector('#salida').innerHTML=palabraguionada;
document.querySelector('#verificar').addEventListener('click',() =>
{
    const letra = document.querySelector('#letra').value;
     
    for (const i in palabraEscogida){
        if (letra==palabraEscogida[i]){
            palabraguionada=palabraguionada.replaceAt(i*2,letra);
            
        }
    }
    document.querySelector('#salida').innerHTML=palabraguionada;
})
    
    

