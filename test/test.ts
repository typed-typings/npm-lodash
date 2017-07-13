import test = require('blue-tape');
import _ = require('lodash');

interface Dictionary<T> {
  [index: string]: T;
}

test('test', t => {
  t.plan(1);
  t.equal(_.add(1, 2), 3);
});

test('pairs', t => {
  t.plan(7);

  let pairs = [['fred', 30], ['barney', 40]] as Array<[string, number]>;
  let expected = { 'fred': 30, 'barney': 40 } as Dictionary<number>;

  let obj1 = _.fromPairs(pairs);
  t.deepEqual(obj1, expected);

  let obj2 = _(pairs).fromPairs().value();
  t.deepEqual(obj2, expected);

  t.deepEqual(obj1, obj2);

  let obj3 = _(expected).toPairs().fromPairs().value();
  t.deepEqual(obj3, expected);

  let obj4 = _(pairs).fromPairs().toPairs().value();
  t.deepEqual(obj4, pairs);

  let obj5 = _([]).fromPairs().toPairs().value();
  t.deepEqual(obj5, {});

  let obj6 = _({}).toPairs().fromPairs().value();
  t.deepEqual(obj6, []);
});
