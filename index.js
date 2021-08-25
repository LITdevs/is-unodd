var isUneven = require('is-uneven');

module.exports = function isUnodd(i) {
  return !isUneven(i);
};