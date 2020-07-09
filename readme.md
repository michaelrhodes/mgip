# mgip

![demo](demo.jpg)

## install
```sh
npm install michaelrhodes/mgip#1.0.0
```

## use
```js
var get = require('get-image-data')
var mgip = require('mgip')

get(url, function (err, img) {
  el.style.cssText = mgip(img)
})
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
