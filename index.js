module.exports = mgip

var raw = require('./raw')
var css = require('./css')

function mgip (img) {
  return css(raw(img))
}
