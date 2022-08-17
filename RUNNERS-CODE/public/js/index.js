window.addEventListener('load',function(){
    const carrusel= document.querySelector('.carrusel-items')
    let intervalo=null;
    let step=1;
    let maxScrollLeft= carrusel.scrollWidth -carrusel.clientWidth;
    const start= ()=>{
    intervalo=setInterval(function(){
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if(carrusel.scrollLeft===maxScrollLeft){
      step= step * -1;
    }else if(carrusel.scrollLeft===0){
     step= step * -1
    }
    },6 );
    };
    const stop= ()=>{
    clearInterval(intervalo)
    }
    carrusel.addEventListener('mouseover',()=>{
        stop();
    })
    carrusel.addEventListener('mouseout',()=>{
        start()
    })
    })