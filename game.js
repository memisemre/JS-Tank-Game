window.onkeydown = function(){
    const tank = document.querySelector(".tank-container");
    let tankLeftCorner = tank.offsetLeft;
    let tankTopCorner = tank.offsetTop;
    let keyCode = event.keyCode;
    let movementValue;
    if(keyCode === 38){
        movementValue = tankTopCorner-10;
        tank.style.top = `${movementValue}px`;
        movementValue = 0;
    }
    else if (keyCode === 40){
        movementValue = tankTopCorner+10;
        tank.style.top = `${movementValue}px`;
        movementValue = 0;
    }
    else if( keyCode === 37){
        movementValue = tankLeftCorner-10;
        tank.style.left = `${movementValue}px`;
        movementValue = 0;
    }
    else if(keyCode === 39){
        movementValue = tankLeftCorner+10;
        tank.style.left = `${movementValue}px`;
        movementValue = 0;
    }
};