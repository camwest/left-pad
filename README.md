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

## Leftpad
There is one function in this module: leftpad . This function pads the left side of the string to be at least a specified size. leftpad has 3 paramters. The first parameter is a variable which must be convertable to a string, and must be passed. This is the phrase that will be on the right of the string. The second parameter should be an integer and must be passed. The second paramter is the garunteed minimum size of the string when the padding is complete. The third parameter is optional, and if present, must be convertable into a string. This is the phrase the string will be padded with. By default, this is the first space character occuring in unicode. It is reccomended that this phrase be a single character.

So leftpad(1, 2, 0) means "take the number 1 and turn that into a string, pad the string to be at least 2 characters long, and pad it with zeros."
