let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height  - 30;
let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth);
let paddleY = (canvas.height - paddleHeight) / 2;
let rightPressed = false;
let leftPressed = false;
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let score = 0 ;
let lives = 3 ;


let bricks = [];
for(let c = 0 ; c <brickColumnCount ; c++){
    bricks[c] = []
    for(let r = 0 ; r<brickRowCount ; r++) {
        bricks[c][r] = {x:0,y:0 , status: 1}
    }
}




const keyDownHandLer = e => {
    if(e.key == 'Right' || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true;
    }
}
const keyUpHandLer = e => {
    if(e.key == 'Right' || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = flase;
    }
}

const collisionDectector = ()=> {
    for(let c = 0 ; c <brickColumnCount ; c++){
        for(let r = 0 ; r<brickRowCount ; r++) {
            let  b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight ){
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount * brickColumnCount){
                        alert("You win ");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

const mouseMoveHandler = e=>{
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth /2 ;
    }
}


document.addEventListener("keydown", keyDownHandLer, false);
document.addEventListener("keydown", keyUpHandLer, false);
document.addEventListener("mousemove" ,mouseMoveHandler , false);


const drawBall = ()=> {
    ctx.beginPath();
    ctx.arc(x ,y ,10, 0 , Math.PI*2);
    ctx.fillStyle = '#00DC7D';
    ctx.fill();
    ctx.closePath();
}

const drawPaddle = ()=> {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight ,paddleWidth , paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

const drawBricks = ()=> {
    for(let i = 0 ; i< brickColumnCount; i++){
        for(let r = 0 ; r < brickRowCount ; r++){ 
            if(bricks[i][r].status == 1 ){
                let brickX = (
                    i*(brickWidth + brickPadding)
                ) + brickOffsetLeft;
                let brickY = (
                    r*(brickHeight + brickPadding)
                ) + brickOffsetTop;
                bricks[i][r].x = brickX;
                bricks[i][r].y = brickY;  

                ctx.beginPath();
                ctx.rect(brickX,brickY,brickWidth,brickHeight);
                ctx.fillStyle = '#f85c50';
                ctx.fill();
                ctx.closePath();
             }
         }
    }
}

const drawScore = ()=> {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " +score , 8 ,20)
}

const drawLives = ()=> {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " +lives , canvas.width - 65 ,20)
}


const draw = ()=> {
    ctx.clearRect(0,0 , canvas.width , canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDectector();
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height - ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives){
                alert("Game Over");
                document.location.reload();
            }else {
                x = canvas.width/2;
                y = canvas.height - 30;
                dx = 3;
                dy = -3;
                paddleX = (canvas.width - paddleWidth)
            }
        }
    }
    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}


draw();