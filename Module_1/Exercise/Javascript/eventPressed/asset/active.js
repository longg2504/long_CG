var w = window.innerWidth - 212;
var h = window.innerHeight;


function upArrow() {
    var element = document.getElementById('nobita')
    if(parseInt(element.style.top)>=0){
    element.style.top = parseInt(element.style.top) - 10 + 'px'
    element.style.transition = '.1s'
    }
}

function downArrow() {
    var element = document.getElementById('nobita')
    element.style.top = parseInt(element.style.top) + 10 + 'px'
    element.style.transition = '.1s'
}

function leftArrow() {
    var element = document.getElementById('nobita')
    if(parseInt(element.style.left)>=0) {
    element.style.left = parseInt(element.style.left) - 10 + 'px'
    element.style.transition = '.1s'    
    }
}
function rightArrow() {
    var element = document.getElementById('nobita')
    if(parseInt(element.style.left)<=w){
    element.style.left = parseInt(element.style.left) + 10 + 'px'
    element.style.transition = '.1s'    
    }
}
function actionArrow(act) {
    switch(act.keyCode) {
        case 37 :
            leftArrow()
            break
        case 39 :
            rightArrow()
            break
        case 38 :
            upArrow()
            break
        case 40 :
            downArrow()
            break

    }
}

function docReady() {
    window.addEventListener('keydown',actionArrow)
}