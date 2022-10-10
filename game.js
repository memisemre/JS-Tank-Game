const tank = document.querySelector(".tank-container");
const fireBall = document.querySelector(".fire-ball");
const tarretOne = document.querySelector(".tarret-1");
const tarretTwo = document.querySelector(".tarret-2");
const tarretThree = document.querySelector(".tarret-3");
const tarretFour = document.querySelector(".tarret-4");
const levelOneWalls = document.querySelector(".level-1-walls");
const levelTwoWalls = document.querySelector(".level-2-walls");
const levelThreeWalls = document.querySelector(".level-3-walls");
const levelFourWalls = document.querySelector(".level-4-walls");
fireBall.style.display = "none";
window.onkeydown = function(){
    let tankLeftCorner = tank.offsetLeft;
    let tankTopCorner = tank.offsetTop; 
    let keyCode = event.keyCode;
    let movementValue;
    if(fireBall.style.display == "none" && (keyCode === 38 || keyCode === 87)){
        movementValue = tankTopCorner-10;
        tank.style.top = `${movementValue}px`;
        movementValue = 0;
    }
    else if (fireBall.style.display == "none" && (keyCode === 40 || keyCode === 83)){
        movementValue = tankTopCorner+10;
        tank.style.top = `${movementValue}px`;
        movementValue = 0;
    }
    else if(fireBall.style.display == "none" && (keyCode === 37 || keyCode === 65)){
        movementValue = tankLeftCorner-10;
        tank.style.left = `${movementValue}px`;
        movementValue = 0;
    }
    else if(fireBall.style.display == "none" && (keyCode === 39 || keyCode === 68)){
        movementValue = tankLeftCorner+10;
        tank.style.left = `${movementValue}px`;
        movementValue = 0;
    }
    else if(keyCode === 32){
        fireAnimation();
    }
};
function addFireAudio(){
    const audio = document.querySelector(".audio");
    audio.volume = 0.2;
    audio.play();
}
document.addEventListener("click",fireAnimation);
function fireAnimation(){
    const tarretOneRect = tarretOne.getBoundingClientRect();
    const tarretOneXCenter = Math.ceil(tarretOneRect.left + (tarretOneRect.width/2));
    const tarretTwoRect = tarretTwo.getBoundingClientRect();
    const tarretTwoXCenter = Math.ceil(tarretTwoRect.left + (tarretTwoRect.width/2));
    const tarretThreeRect = tarretThree.getBoundingClientRect();
    const tarretThreeXCenter = Math.ceil(tarretThreeRect.left + (tarretThreeRect.width/2));
    const tarretFourRect = tarretFour.getBoundingClientRect();
    const tarretFourXCenter = Math.ceil(tarretFourRect.left + (tarretFourRect.width/2));
    const levelOneWallsRect = levelOneWalls.getBoundingClientRect();
    const levelTwoWallsRect = levelTwoWalls.getBoundingClientRect();
    const levelThreeWallsRect = levelThreeWalls.getBoundingClientRect();
    const levelFourWallsRect = levelFourWalls.getBoundingClientRect();
        if(fireBall.style.display === "none"){
        const ballShotArea = document.querySelector(".ball-shot-area");
        let fireAnimationTimerValue = 250;
        let ballShotOffSetLeft = ballShotArea.offsetLeft;
        fireBall.style.display = "flex";
        fireBall.style.left = `${ballShotOffSetLeft}px`;
        addFireAudio();
        const fireAnimationInterval = setInterval(function(){ //eslint-disable-line
            if(fireAnimationTimerValue >0){
                let fireBallRect = fireBall.getBoundingClientRect();
                let ceilFireBallX = Math.ceil(fireBallRect.x);
                if(Math.ceil(levelOneWallsRect.left) == ceilFireBallX){
                    levelOneWalls.style.opacity = "0";
                    ballShotArea.style.borderRight = "none";
                    fireBall.style.boxShadow = "none";
                    fireBall.style.display = "none";
                    clearInterval(fireAnimationInterval);
                }
                if(Math.ceil(levelTwoWallsRect.left) == ceilFireBallX){
                    levelTwoWalls.style.opacity = "0";
                    ballShotArea.style.borderRight = "none";
                    fireBall.style.boxShadow = "none";
                    fireBall.style.display = "none";
                    clearInterval(fireAnimationInterval);
                }
                if(Math.ceil(levelThreeWallsRect.left) == ceilFireBallX){
                    levelThreeWalls.style.opacity = "0";
                    ballShotArea.style.borderRight = "none";
                    fireBall.style.boxShadow = "none";
                    fireBall.style.display = "none";
                    clearInterval(fireAnimationInterval);
                }
                if(Math.ceil(levelFourWallsRect.left) == ceilFireBallX){
                    levelFourWalls.style.opacity = "0";
                    ballShotArea.style.borderRight = "none";
                    fireBall.style.boxShadow = "none";
                    fireBall.style.display = "none";
                    clearInterval(fireAnimationInterval);
                }
                if(tarretOneXCenter == ceilFireBallX){
                    tarretOne.style.display = "none";
                    clearInterval(fireAnimationInterval);
                    ballShotArea.style.borderRight = "none";
                    fireBall.style.boxShadow = "none";
                    fireBall.style.display = "none";
                }
                if(tarretTwoXCenter == ceilFireBallX){
                    tarretTwo.style.display = "none";
                    clearInterval(fireAnimationInterval);
                    ballShotArea.style.borderRight = "none";
                    fireBall.style.boxShadow = "none";
                    fireBall.style.display = "none";
                }
                if(tarretThreeXCenter == ceilFireBallX){
                    tarretThree.style.display = "none";
                    clearInterval(fireAnimationInterval);
                    ballShotArea.style.borderRight = "none";
                    fireBall.style.boxShadow = "none";
                    fireBall.style.display = "none";
                }
                if(tarretFourXCenter == ceilFireBallX){
                    tarretFour.style.display = "none";
                    clearInterval(fireAnimationInterval);
                    ballShotArea.style.borderRight = "none";
                    fireBall.style.boxShadow = "none";
                    fireBall.style.display = "none";
                }
                if(tarretOne.style.display == "none" && levelOneWalls.style.opacity == "0"){
                    console.log("osman");
                }
                fireAnimationTimerValue--;
                ballShotOffSetLeft+=1;
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
        },0.1);
}}
document.addEventListener("mousemove", (e)=>{
    const tankRect = tank.getBoundingClientRect();
    let xCenter = tankRect.left + (tankRect.width/2);
    let yCenter = tankRect.top + (tankRect.height/2);
    let rad = Math.atan2(e.x - xCenter , e.y - yCenter );
    let deg = ((rad * (180/ Math.PI)) * -1)+180;
        if(fireBall.style.display === "none"){
        tank.style.transform = `rotate(${deg - 80}deg)`;
        }
    }
);


