## left-pad

String left pad.

P.S: [I've unpublished it from NPM.](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.b6xzn8r6w)

## Install

```bash
$ npm install azer/left-pad
```

## Usage

```js
leftpad = require('left-pad')

leftpad('foo', 5)
// => "  foo"

leftpad('foobar', 6)
// => "foobar"

leftpad(1, 2, 0)
// => "01"
```

## Instructions
This module contains one function: leftpad . Leftpad has 3 parameters. The first pameter is mandatory and must be a variable whose type is convertable into a String by using the String constructor. The second parameter is the minimum length the String must be padded to. This is also mandatory, and must be an integer. The third parameter is the phrase to pad with. This is optional, and if present, must be a variable whose type is convertable into a String. By default, the third parameter is the first space character in Unicode. Note that if the result needs to be exactly the length specified in the second parameter, the third parameter must have a length of exactly one. Otherwise, the result may be longer than specified.
