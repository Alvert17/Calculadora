window.addEventListener("DOMContentLoaded", () =>{

class Calculadora {
constructor(botones, botondeEncendido, pantallita){
/*Bob */
this.encendido = false;
this.botones = botones;
this.botondeEncendido = botondeEncendido;
this.pantallita = pantallita;
this.funcionar();
 }

encender(){
this.botondeEncendido.addEventListener("click", () => {
console.log("clickeado");
if(this.encendido){
this.encendido = false;
this.pantallita.classList.add("pantalla-Apagada")
this.limpiatelo();

console.log(this.encendido)
 
}
else{
    this.encendido = true;
    
   
    this.pantallita.classList.remove("pantalla-Apagada")
    
console.log(this.encendido)

}

})



}
funcionar(){

this.botones.forEach(botn => {
    botn.addEventListener("click", () => {
        if(this.encendido === false ) return
if(botn.dataset.value === "CL"  ){
    this.limpiatelo();
    
    return  ;
} 
else if(botn.dataset.value === "="){

 this.calculos();   
 return ;

}

else if(botn.dataset.value === "C"){

this.limpiateUno();

return; 

}

console.log("le di al boton")
this.pantallita.dataset.value +=botn.dataset.value;
this.pantallita.innerText = this.pantallita.dataset.value;
 


    });
});



}
/*ddd*/

limpiatelo (){

  this.pantallita.innerText = "";
  this.pantallita.dataset.value = "";
  
 
  

   }


limpiateUno(){

let textoReducido = this.pantallita.dataset.value.slice( 0, -1);    
this.pantallita.dataset.value = textoReducido;
this.pantallita.innerText = textoReducido ;

}

calculos(){
let operacion = eval(this.pantallita.dataset.value );
this.pantallita.innerText = operacion;
this.pantallita.dataset.value = operacion;

} 


}

console.log("s borro mi app weather :(");


const botonesCalcu = document.querySelectorAll(".botones");
const pantallita = document.getElementById("pantalla");
const botonPoder = document.getElementById("power");
const calculadora = new Calculadora(botonesCalcu,botonPoder,pantallita);
calculadora.encender();

})


