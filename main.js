const botonG = document.querySelector('.boton');

const opc = document.querySelector('.opciones');

const c1 = document.querySelector('.tarjeta__contenido1');
const c2 = document.querySelector('.tarjeta__contenido2');

const o1 = document.querySelector('.op1');
const o2 = document.querySelector('.op2');
const o3 = document.querySelector('.op3');
const o4 = document.querySelector('.op4');
const o5 = document.querySelector('.op5');

const men = document.querySelector('.valor');


opc.addEventListener('click', (event)=>{
    event.preventDefault();
    let camText = event.target.innerText;
    men.innerHTML = camText;

    if(camText<=5 && camText>0 ){
        botonG.addEventListener('click', (event)=>{
            pestaña();
        })
    }
})


function pestaña(){
    c1.classList.toggle('noshow')
    c2.classList.toggle('show')
}

