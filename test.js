var leftpad = require("./");
var test = require("tape");

test('left pad', function (assert) {
  assert.plan(4);
  assert.strictEqual(leftpad('foo', 5), '  foo');
  assert.strictEqual(leftpad('foobar', 5), 'foobar');
  assert.strictEqual(leftpad(1, 3, 0), '001');
  assert.strictEqual(leftpad(1, 3, '-'), '--1');
});
