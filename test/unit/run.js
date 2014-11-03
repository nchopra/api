
var tape = require('tape');
var common = {};

var tests = [
  require('./controller/index'),
  require('./controller/suggest'),
  require('./controller/search'),
  require('./sanitiser/suggest'),
  require('./sanitiser/doc'),
  require('./query/indeces'),
  require('./query/suggest'),
  require('./query/search'),
  require('./query/reverse'),
  require('./helper/geojsonify'),
  require('./helper/outputSchema')
];

tests.map(function(t) {
  t.all(tape, common);
});