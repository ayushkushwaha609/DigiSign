const canvas = document.getElementById('signature-canvas');
const ctx = canvas.getContext('2d');

const colorPicker = document.getElementById('color-picker');
const downloadBtn = document.getElementById('download-btn');
const clearBtn = document.getElementById('clear-btn');
const brushSizeSlider = document.getElementById('brush-size');

canvas.width = 560;  
canvas.height = 360; 

let isDrawing = false;
let lastPos = { x: 0, y: 0 }; 

ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = brushSizeSlider.value; // Initialize brush size
ctx.lineJoin = ctx.lineCap = 'round'; 

function draw(e) {
    if (!isDrawing) return; 

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastPos.x, lastPos.y] = [e.offsetX, e.offsetY]; 
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastPos.x, lastPos.y] = [e.offsetX, e.offsetY]; 
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

colorPicker.addEventListener('change', (e) => ctx.strokeStyle = e.target.value);

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'signature.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete; 
});

brushSizeSlider.addEventListener('change', (e) => {
    ctx.lineWidth = e.target.value;
});



/////////////////////////////////////////////////



////////////////////////////////////////////////////////////

// const canvas = document.getElementById('signature-canvas');
// const ctx = canvas.getContext('2d');

// const colorPicker = document.getElementById('color-picker');
// const downloadBtn = document.getElementById('download-btn');
// const clearBtn = document.getElementById('clear-btn');
// const brushSizeSlider = document.getElementById('brush-size');

// let isDrawing = false;
// let lastPos = { x: 0, y: 0 }; // Initialized outside the function
// let canvasOffset = getCanvasOffset(canvas); // Initial offset calculation 

// ctx.strokeStyle = colorPicker.value;
// ctx.lineWidth = brushSizeSlider.value;
// ctx.lineJoin = ctx.lineCap = 'round'; 

// function getCanvasOffset(canvas) {
//     const rect = canvas.getBoundingClientRect();
//     return {
//         left: rect.left + window.scrollX,  
//         top: rect.top + window.scrollY  
//     };
// }

// function draw(e) {
//     if (!isDrawing) return; 

//     const mouseX = e.clientX - canvasOffset.left; 
//     const mouseY = e.clientY - canvasOffset.top;

//     ctx.beginPath();
//     ctx.moveTo(lastPos.x, lastPos.y);
//     ctx.lineTo(mouseX, mouseY); 
//     ctx.stroke();

//     [lastPos.x, lastPos.y] = [mouseX, mouseY]; 
// }

// canvas.addEventListener('mousedown', (e) => {
//     isDrawing = true;
//     [lastPos.x, lastPos.y] = [e.offsetX, e.offsetY]; 
// });

// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);

// colorPicker.addEventListener('change', (e) => ctx.strokeStyle = e.target.value);

// clearBtn.addEventListener('click', () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

// downloadBtn.addEventListener('click', () => {
//     const link = document.createElement('a');
//     link.download = 'signature.png';
//     link.href = canvas.toDataURL();
//     link.click();
//     link.delete; 
// });

// brushSizeSlider.addEventListener('change', (e) => {
//     ctx.lineWidth = e.target.value;
// });

// // Recalculate offset on window resize and scroll
// window.addEventListener('resize', () => {
//     canvasOffset = getCanvasOffset(canvas); 
// });
// window.addEventListener('scroll', () => {
//     canvasOffset = getCanvasOffset(canvas); 
// }); 
