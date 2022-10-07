const tank = document.querySelector(".tank-container");
document.addEventListener("mousemove", (e)=>{
    const tankRect = tank.getBoundingClientRect();
    let xCenter = tankRect.left + (tankRect.width/2);
    let yCenter = tankRect.top + (tankRect.height/2);
    let rad = Math.atan2(e.x - xCenter , e.y - yCenter );
    let deg = ((rad * (180/ Math.PI)) * -1)+180;
    tank.style.transform = `rotate(${deg}deg)`;
});
window.onkeydown = function(){
    let tankLeftCorner = tank.offsetLeft;
    let tankTopCorner = tank.offsetTop;
    let keyCode = event.keyCode;
    let movementValue;
    if(keyCode === 38 || keyCode === 87){
        movementValue = tankTopCorner-10;
        tank.style.top = `${movementValue}px`;
        movementValue = 0;
    }
    else if (keyCode === 40 || keyCode === 83){
        movementValue = tankTopCorner+10;
        tank.style.top = `${movementValue}px`;
        movementValue = 0;
    }
    else if( keyCode === 37 || keyCode === 65){
        movementValue = tankLeftCorner-10;
        tank.style.left = `${movementValue}px`;
        movementValue = 0;
    }
    else if(keyCode === 39 || keyCode === 68){
        movementValue = tankLeftCorner+10;
        tank.style.left = `${movementValue}px`;
        movementValue = 0;
    }
};