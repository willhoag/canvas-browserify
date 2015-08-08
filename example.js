var createCanvas = require('./');

var dia = 200;
var canvas = createCanvas(dia, dia);
var ctx = canvas.getContext('2d');

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = (dia - 5) / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();

if (process.title === 'browser') {
  document.body.appendChild(canvas);
} else {
  canvas.pngStream().pipe(process.stdout);
}
