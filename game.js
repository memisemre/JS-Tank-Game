window.onkeydown = function(){
    const box = document.querySelector('.box');
    let boxLeft = box.offsetLeft;
    let boxTop = box.offsetTop;
    let keyCodes = event.keyCode;
    let movementValue;
    console.log(keyCodes)
    console.log(boxLeft)
    console.log(boxTop)
    console.log("osman")
    if(keyCodes === 40 || keyCodes === 83){
        movementValue = boxTop+10
        console.log(movementValue)
        console.log("mahmut")
        box.style.top = `${movementValue}px`
        console.log(box.style.top);
        movementValue = 0;
        console.log(movementValue)
    }
    else if (boxTop>0 && (keyCodes === 38 || keyCodes === 87)){
        movementValue = boxTop-10;
        box.style.top = `${movementValue}px`;
        movementValue = 0;
    }
    else if (boxTop === 0  && (keyCodes === 38 || keyCodes === 87)){
        box.style.backgroundColor = "green"
        console.log("hata");
    }
}
