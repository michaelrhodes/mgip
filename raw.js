module.exports = raw

var dominant = require('huey/dominant')

function raw (img, iw, ih, w, h) {
  iw = img.width
  ih = img.height
  w = Math.max(iw / 8 | 0, 1)
  h = Math.max(ih / 8 | 0, 1)

  return []
    .concat(dominant(crop(img, 0, 0, w, h))) // top left
    .concat(dominant(crop(img, iw - w, 0, w, h))) // top right
    .concat(dominant(crop(img, 0, ih - h, w, h))) // bottom left
    .concat(dominant(crop(img, iw - w, ih - h, w, h))) // bottom right
}

function crop (from, x, y, w, h, o, j, i, fw, fd, d, n) {
  fw = from.width
  fd = from.data
  x *= 4, y *= 4
  d = [], n = 0

  for (j = y; j < y + h * 4; j += 4) {
    for (i = x; i < x + w * 4; i += 4) {
      o = fw * j + i
      d[n++] = fd[o++]
      d[n++] = fd[o++]
      d[n++] = fd[o++]
      d[n++] = fd[o++]
    }
  }

  return d
}
