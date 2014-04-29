var reduce = require('../');

describe('config-reduce', function() {
  it('should extract the given properties', function() {
    var reduced = reduce({foo: 1, bar: 2}, ['foo', 'bar']);
    var keys = Object.keys(reduced);
    keys.length.should.equal(2);
    keys.indexOf('foo').should.not.equal(-1);
    keys.indexOf('bar').should.not.equal(-1);
  });
  it('should not extract other properties', function() {
    var reduced = reduce({foo: 1, bar: 2, baz: 3}, ['foo', 'bar']);
    var keys = Object.keys(reduced);
    keys.indexOf('baz').should.equal(-1);
  });
  it('should use the overrides', function() {
    var reduced = reduce({
      foo: 1, bar: 2, baz: 3,
      qux: {
        corge: {
          foo: 4
        }
      }
    }, ['foo', 'bar'], [
      ['qux', 'corge']
    ]);
    reduced.foo.should.equal(4);
  });
  it('should use the override with the biggest prioritiy', function() {
    var reduced = reduce({
      foo: 1, bar: 2, baz: 3,
      qux: {
        corge: {
          foo: 4,
          bar: 5
        }
      },
      garply: {
        waldo: {
          foo: 6
        }
      }
    }, ['foo', 'bar'], [
      ['qux', 'corge'],
      ['garply', 'waldo']
    ]);
    reduced.foo.should.equal(6);
    reduced.bar.should.equal(5);
  });
});
