#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Pings an MCPE server for simple data.

This is a port of `mc-ping` for MCPE. 

This library was written using code from the DirtServer project.

## Install

```sh
$ npm install --save mcpe-ping
```


## Usage

```js
var mcpeping = require('mcpe-ping');

mcpeping('example.com', 19132, function(err, res) {
    if (err) {
        // Some kind of error
        console.error(err);
    } else {
        // Success!
        console.log(res);
    }
}, 3000);
```


## License

MIT © [Falkirks](http://falkirks.com)


[npm-image]: https://badge.fury.io/js/mcpe-ping.svg
[npm-url]: https://npmjs.org/package/mcpe-ping
[travis-image]: https://travis-ci.org/Falkirks/mcpe-ping.svg?branch=master
[travis-url]: https://travis-ci.org/Falkirks/mcpe-ping
[daviddm-image]: https://david-dm.org/Falkirks/mcpe-ping.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Falkirks/mcpe-ping
