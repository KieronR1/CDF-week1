/** * TASK 1: SETUP
* We fetch the context for each canvas individually.
*/
const ctx1 = document.getElementById('canvas1').getContext('2d');
ctx1.font = "16px Arial";
ctx1.fillText("Canvas Initialized Successfully", 50, 50);

/** * TASK 2: LINES
*/
const ctx2 = document.getElementById('canvas2').getContext('2d');
function drawLine(y, cap, color, width) {
    ctx2.beginPath();
    ctx2.lineWidth = width;
    ctx2.strokeStyle = color;
    ctx2.lineCap = cap; // options: 'butt', 'round', 'square'
    ctx2.moveTo(50, y);
    ctx2.lineTo(350, y);
    ctx2.stroke();
}
drawLine(40, 'butt', 'red', 10);
drawLine(80, 'round', 'blue', 10);
drawLine(120, 'square', 'green', 10);

/** CHALLENGE: Create a new function to accept two points X1, Y1 and X2, Y2 and draw a
line between these points. Draw a shape using this function. */

function newLine(x1, y1, x2, y2, cap, color, width) {
    ctx2.beginPath();
    ctx2.lineWidth = width;
    ctx2.strokeStyle = color;
    ctx2.lineCap = cap;
    ctx2.moveTo(x1, y1);
    ctx2.lineTo(x2, y2);
    ctx2.stroke();
}
newLine(10, 10, 100, 10, 'round', 'purple', 20)

const ctx3 = document.getElementById('canvas3').getContext('2d');

// Triangle
ctx3.beginPath();
ctx3.moveTo(50, 150);
ctx3.lineTo(150, 150);
ctx3.lineTo(100, 50);
ctx3.closePath();
ctx3.stroke();

function drawStar(x, cy, spikes, outerRadius, innerRadius) {
    let cx = x * 100 + 150;
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;
    ctx3.beginPath();
    for (let i = 0; i < spikes; i++) {
        ctx3.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
        rot += step;
        ctx3.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
        rot += step;
    }
    ctx3.lineTo(cx, cy - outerRadius);
    ctx3.closePath();
    let color = '#'+(x)+(x+2)+(x-4);
    ctx3.fillStyle = color;
    console.log(color);
    ctx3.fill();
    ctx3.stroke();
}

for( let x = 1;  x < 11; x++){
    drawStar(x, 100, 5, 50, 25);

};

let


//drawStar(200, 100, 5, 50, 25);
//drawStar(300, 100, 7, 60, 20);

