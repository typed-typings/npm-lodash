/// <reference path="../bundle.d.ts" />

import * as _ from 'lodash';
import * as test from 'blue-tape';

test('test', (t) => {
  t.plan(1);
  t.equal(_.add(1, 2), 3);
});
