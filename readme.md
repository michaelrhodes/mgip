# mgip

## install
```sh
npm install michaelrhodes/mgip
```

## use
```js
var mgip = require('mgip')
var get = require('get-image-data')

get(url, function (err, img) {
  el.style.cssText = mgip(img)
})
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
