
const btnSi = document.getElementById('si');
const btnNo = document.getElementById('no');
const sorpresa = document.getElementById('sorpresa');

const posicion = ()=>{
    let posiciones = [];
    let posicion_x = Math.trunc(97 * Math.random());
    let posicion_y = Math.trunc(97 * Math.random());
    console.log(`x:${posicion_x}   y:${posicion_y}`);
    posiciones.push(posicion_x);
    posiciones.push(posicion_y);
    return posiciones;
}

const btnNoMover = ()=>{
    let ps = posicion();
    let ps_x = ps[0];
    let ps_y = ps[1];
    if(ps_x > 85 || ps_y > 85){
        ps = posicion();
        ps_x = ps[0];
        ps_y = ps[1];
    }
    btnNo.style.top = ps_x + "%";
    btnNo.style.left = ps_y + "%";
}

btnNo.addEventListener('mouseover', ()=>{
    btnNoMover();
});

btnNo.addEventListener('click', ()=>{
    btnNoMover();
});

btnSi.addEventListener('click', ()=>{
    btnSi.style.display = "none";
    btnNo.style.display = "none";
    sorpresa.style.display = "block";
});