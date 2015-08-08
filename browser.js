var canvas = module.exports = function canvas (w, h) {
  var canvas = document.createElement('canvas')
  canvas.width = w || 300
  canvas.height = h || 150
  return canvas
}

canvas.Image = function () {
  var img = document.createElement('img')
  return img
}
