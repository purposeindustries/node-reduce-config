/**
 * Extract `props` from `config`, use overrides based on `spec`
 *
 * Eg.: `config = { foo: 'bar', baz: 'woof', qux: { grault: { foo: 'corge' } } }`
 * `reduce(config, ['foo', 'baz'], [['qux', 'grault']]) -> { foo: 'corge', baz: 'woof' }`
 * @param {Object} config Config object
 * @param {Array}   props Properies to extract
 * @param {Array}    spec Specialize config
 */
module.exports = function reduce(config, props, spec) {
  if(!config || typeof config != 'object') {
    throw Error('Config is not an object!');
  }
  props = props || Object.keys(config);
  spec = spec || [];
  return props.reduce(function(obj, key) {
    return (obj[key] = spec.reduce(function(prop, spec) {
      return config[spec[0]][spec[1]][key] || prop;
    }, config[key])), obj;
  }, {});
};
