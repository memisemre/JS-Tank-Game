window.onkeydown = function(){
    const box = document.querySelector(".box");
    const ball = document.querySelector(".ball");
    let boxLeft = box.offsetLeft;
    let boxTop = box.offsetTop;
    let keyCodes = event.keyCode;
    let movementValue;
    let errorBoolean = false;
    let ballDisplay = ball.style.display = "none";
    console.log(ballDisplay);
    console.log(keyCodes);
    console.log(boxLeft);
    console.log(boxTop);
    console.log("osman");
    console.log(errorBoolean);
    function movementTop(){
        movementValue = boxTop+10;
        console.log(movementValue);
        console.log("mahmut");
        box.style.top = `${movementValue}px`;
        console.log(box.style.top);
        movementValue = 0;
        console.log(movementValue);
        box.style.backgroundColor = "red";
    }
    if(boxTop<1000 && (keyCodes === 40 || keyCodes === 83)){
        movementTop();
    }
    else if (boxTop>0 && (keyCodes === 38 || keyCodes === 87)){
        movementValue = boxTop-10;
        box.style.top = `${movementValue}px`;
        movementValue = 0;
        box.style.backgroundColor = "red";
    }
    else if (boxTop === 0  || boxTop === 1000){
        box.style.backgroundColor = "green";
        console.log("hata");
    }
    
    else if (keyCodes === 32 ){
        if(ballDisplay === "none"){
        console.log("osman");
        ball.style.top = `${boxTop-50}px`;
        ball.style.left = `${boxLeft}px`;
        ball.style.display = "flex";
        let animationTimerValue = 15;
        const animationInterval = setInterval(function(){
            console.log("başladı.");
            if(animationTimerValue>0){
                console.log("hello world");
                animationTimerValue--;
                boxTop-=15;
 
                console.log(boxTop);
                ball.style.top = `${boxTop}px`;
                console.log(animationTimerValue);
            }
            else if(animationTimerValue == 0){
                console.log("bitti.");
                animationTimerValue--;
                console.log("end");
                ball.style.display = "none";
                clearInterval(animationInterval);   
            }},100);
            }}
        else{
            console.log("deli olma olum");
        }
        };

