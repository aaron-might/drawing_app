const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const ctx = canvas.getContext('2d');

let size = 30;
// let x = 50;
// let y = 50;
let isPressed=false;
canvas.addEventListener('mousedown', ()=> {
    isPressed = true;
});

canvas.addEventListener('mousedown', ()=> {
    isPressed = true;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){    
        const x = e.offsetX;
        const y = e.offsetY;
        
        drawCircle(x,y);
    }    

console.log(e);
});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x,y, size, 0, Math.PI * 2);
    ctx.fill();
}


increaseBtn.addEventListener("click",() =>{
    size += 5;

    if (size > 50) {
        size = 50;
    }
});
decreaseBtn.addEventListener("click",() =>{
    size -= 5;
    
    if (size < 5) {
        size = 5;
    }
});
// drawCircle(50, 50);

// function draw (){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
   
//     drawCircle(x, 50);
//     requestAnimationFrame(draw);
// }
// draw();