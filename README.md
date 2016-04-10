## left-pad

String left pad.

<a href="https://travis-ci.org/camwest/left-pad"><img alt="Travis Status" src="https://travis-ci.org/camwest/left-pad.svg?branch=master&label=travis&style=flat"></a>

## Install

```bash
$ npm install left-pad
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
