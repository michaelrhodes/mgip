# mgip

![demo](demo.jpg)

## install
```sh
npm install michaelrhodes/mgip#1.0.0
```

## use
```js
var get = require('get-image-data')
var raw = require('mgip/raw')
var css = require('mgip/css')

get(url, function (err, img) {
  el.style.cssText = css(raw(img))
})
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
