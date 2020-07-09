module.exports = nano

var mgip = require('./index')

function nano (img) {
  return mgip(img)
    .replace(/\s/g, '')
    .replace(/0\./g, '.')
}
