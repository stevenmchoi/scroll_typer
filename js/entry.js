var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 1.0;
ctx.strokeRect(450, 300, 750, 125);
ctx.fillStyle = '#eee';
ctx.fill();
ctx.closePath();
