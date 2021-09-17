const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');

const ctx = canvas.getContext('2d');

let size = 30;
let x = undefined;
let y = undefined;

let isPressed=false;
let color ="black"

canvas.addEventListener('mousedown', ()=> {
    isPressed = true;

    x = undefined;
    y = undefined;
});

// canvas.addEventListener('mousedown', ()=> {
//     isPressed = true;
// });

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){    
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        
        drawLine(x, y, x2, y2);
        x = x2; 
        y = y2;
    }    

console.log(e);
});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x,y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
}
drawLine(100,100, 200, 200)

function drawLine (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
  
}

increaseBtn.addEventListener("click",() =>{
    size += 5;

    if (size > 50) {
        size = 50;
    }
     updateSizeOnScreen() 
});
decreaseBtn.addEventListener("click",() =>{
    size -= 5;
    
    if (size < 5) {
        size = 5;
    }
    updateSizeOnScreen(); 
});

colorEl.addEventListener("change",(e) =>{
    color = e.target.value;
});

function updateSizeOnScreen() {
    sizeEl.innerText = size
}
// drawCircle(50, 50);

// function draw (){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
   
//     drawCircle(x, 50);
//     requestAnimationFrame(draw);
// }
// draw();