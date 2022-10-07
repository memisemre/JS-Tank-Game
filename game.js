

const tank = document.querySelector(".tank-container");
let checkMouseMove = true;
function checkMouseMoveSituation(){
    if(checkMouseMove == true){
document.addEventListener("mousemove", (e)=>{
    const tankRect = tank.getBoundingClientRect();
    let xCenter = tankRect.left + (tankRect.width/2);
    let yCenter = tankRect.top + (tankRect.height/2);
    let rad = Math.atan2(e.x - xCenter , e.y - yCenter );
    let deg = ((rad * (180/ Math.PI)) * -1)+180;
    tank.style.transform = `rotate(${deg}deg)`;
});}}
checkMouseMoveSituation();
document.addEventListener("click",fireAnimation);
function fireAnimation(){
    const fireBall = document.querySelector(".fire-ball");
    fireBall.style.display = "none";
    if(fireBall.style.display === "none"){
    let fireAnimationTimerValue = 15;
    const ballShotArea = document.querySelector(".ball-shot-area");
    let tankOffSetLeft = tank.offsetLeft;
    let fireBallSetLeft =  tankOffSetLeft-370;
    fireBall.style.display = "flex";
    fireBall.style.left = `${fireBallSetLeft}px`;
    const fireAnimationInterval = setInterval(function(){ //eslint-disable-line
        if(fireAnimationTimerValue >0){
            checkMouseMove = false;
            fireAnimationTimerValue--;
            fireBallSetLeft+=15;
            fireBall.style.left = `${fireBallSetLeft}px`;
            ballShotArea.style.borderRight = "8px solid #ff7d56";
            fireBall.style.boxShadow = "10px 10px 100px 25px rgba(66, 66, 66, 1)";
        }
        else if(fireAnimationTimerValue == 0){
            clearInterval(fireAnimationInterval);
            ballShotArea.style.borderRight = "none";
            fireBall.style.boxShadow = "none";
            fireBall.style.display = "none";
        }
    },100);
}}
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