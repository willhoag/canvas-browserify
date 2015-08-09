# create-canvas

wrap canvas so you can load it the same in node or the client!

## Note

this is a fork of [dominictarr/canvas-browserify](https://github.com/dominictarr/canvas-browserify) which makes the api a function call instead of a class instantiation, getting rid of the return override of the constructor which fails in phantomjs and maybe elsewhere

## Example

draw a green circle in both the browser or node.

``` js
//example.js
var createCanvas = require('./')

var dia = 200
var canvas = createCanvas(dia, dia)
var ctx = canvas.getContext('2d')

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = (dia - 5)/2;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();

if(process.title == 'browser') {
  document.body.appendChild(canvas)
} else {
  canvas.pngStream().pipe(process.stdout)
}
```

run it in node...
```
node example.js > circle.png
```

bundle and run in the browser
```
browserify example | indexhtmlify > index.html
open index.html
```

## License

MIT
