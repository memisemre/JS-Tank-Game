function startGame(){
    console.log("osman");
}
startGame();
const tank = document.querySelector(".tank-container");
const fireBall = document.querySelector(".fire-ball");
fireBall.style.display = "none";
let checkMouseMove = true;


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
    else if(keyCode === 32){
        fireAnimation();

    }
};
function addFireAudio(){
    // document.body.addEventListener("click", () => {
    const audio = document.querySelector(".audio");
    audio.volume = 0.2;
    audio.play();
}
document.addEventListener("click",fireAnimation);
function fireAnimation(){
    if(fireBall.style.display === "none"){
    addFireAudio();
    checkMouseMove = false;
    let fireAnimationTimerValue = 15;
    const ballShotArea = document.querySelector(".ball-shot-area");
    let ballShotOffSetLeft = ballShotArea.offsetLeft;
    fireBall.style.display = "flex";
    fireBall.style.left = `${ballShotOffSetLeft}px`;
    const fireAnimationInterval = setInterval(function(){ //eslint-disable-line
        if(fireAnimationTimerValue >0){
            fireAnimationTimerValue--;
            ballShotOffSetLeft+=15;
            fireBall.style.left = `${ballShotOffSetLeft}px`;
            ballShotArea.style.borderRight = "10px solid #ff7d56";
            fireBall.style.boxShadow = "10px 10px 100px 25px rgba(66, 66, 66, 1)";
        }
        else if(fireAnimationTimerValue == 0){
            clearInterval(fireAnimationInterval);
            ballShotArea.style.borderRight = "none";
            fireBall.style.boxShadow = "none";
            fireBall.style.display = "none";
        }
    },50);
}}
function checkMouseMoveSituation(){
    if(checkMouseMove === true){
document.addEventListener("mousemove", (e)=>{
    const tankRect = tank.getBoundingClientRect();
    let xCenter = tankRect.left + (tankRect.width/2);
    let yCenter = tankRect.top + (tankRect.height/2);
    let rad = Math.atan2(e.x - xCenter , e.y - yCenter );
    let deg = ((rad * (180/ Math.PI)) * -1)+180;
    tank.style.transform = `rotate(${deg}deg)`;
});}}
checkMouseMoveSituation();
