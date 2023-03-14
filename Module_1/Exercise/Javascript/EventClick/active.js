var w = window.innerWidth - 212;
var h = window.innerHeight;
//    let img = document.getElementById('ball');
console.log(w);
var angle = 5;
var step = 10;
function moveRight() {
        let imgObj = document.getElementById('ball')
        if(parseInt(imgObj.style.left)<=w){
        imgObj.style.left = parseInt(imgObj.style.left) + step + 'px';
        imgObj.style.transition = '.1s';
        imgObj.style.transform = `rotate(${angle += step}deg)`;
}
}

function moveDown() {
    let imgObj = document.getElementById('ball');
    imgObj.style.top = parseInt(imgObj.style.top) + step + 'px';
    imgObj.style.transition = '.1s';
    imgObj.style.transform = `rotate(${angle += step}deg)`;
    // imgObj.style.transform = 'rotate(' + (angle += step) + 'deg)';

}

function moveLeft() {
    let imgObj = document.getElementById('ball')
    if(parseInt(imgObj.style.left)>=0){

    imgObj.style.left = parseInt(imgObj.style.left) - step + 'px';
    imgObj.style.transition = '.1s';
    imgObj.style.transform = `rotate(${angle -= step}deg)`;
    // imgObj.style.transform = 'rotate(' + (angle += step) + 'deg)';
    }
}

function moveUp() {
    let imgObj = document.getElementById('ball');
    if(parseInt(imgObj.style.top)>=0){

    imgObj.style.top = parseInt(imgObj.style.top) - step + 'px';
    imgObj.style.transition = '.1s';
    imgObj.style.transform = `rotate(${angle -= step}deg)`;
    // imgObj.style.transform = 'rotate(' + (angle += step) + 'deg)';
    }
}
document.addEventListener('keydown', controlBall);

function controlBall(e) {
    // console.log(e.keyCode);
    if (e.keyCode == 39) {
        moveRight();
    }
    if (e.keyCode == 37) {
        moveLeft()
    }
    if (e.keyCode == 40) {
        moveDown()
    }
    if (e.keyCode == 38) {
        moveUp();
    }
}

