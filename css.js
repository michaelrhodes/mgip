module.exports = css

function css (raw, tl, tr, bl, br) {
  tl = raw.slice(0, 3).join(', ')
  tr = raw.slice(3, 6).join(', ')
  bl = raw.slice(6, 9).join(', ')
  br = raw.slice(9, 12).join(', ')

  return 'background:\n' +
    '  linear-gradient(135deg, rgba(' + tl + ', 0.7), transparent),\n' +
    '  linear-gradient(-135deg, rgba(' + tr + ', 0.7), transparent),\n' +
    '  linear-gradient(-45deg, rgba(' + br + ', 0.7), transparent),\n' +
    '  linear-gradient(45deg, rgba(' + bl + ', 0.7), transparent)\n' +
    '  #fff;\n' +
    'background-blend-mode: hard-light;'
}
