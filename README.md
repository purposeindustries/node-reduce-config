# node-reduce-config

Reduce complex configuration object to a single one.

## Install

```
$ npm install reduce-config
```

## Usage

```js
var reduce = require('reduce-config');

var config = {
  foo: 1,
  bar: 2,
  baz: 3,
  qux: {
    corge: {
      foo: 4,
      bar: 5
    },
    garply: {
      foo: 6,
    }
  },
  waldo: {
    fred: {
      foo: 7
    }
  }
};

console.log(reduce(config, ['foo', 'bar', 'baz'], [
  ['qux', 'corge'],
  ['waldo', 'fred']
]));
// { foo: 7, bar: 5, baz: 3 }
```

## License

MIT
