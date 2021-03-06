var grunt = require('grunt');
var fs = require('fs');

exports.less = {
  compile: function(test) {
    'use strict';

    test.expect(2);

    var actual = grunt.file.read('tmp/less.css');
    var expected = grunt.file.read('test/expected/less.css');
    test.equal(expected, actual, 'should compile less, with the ability to handle imported files from alternate include paths');

    actual = grunt.file.read('tmp/concat.css');
    expected = grunt.file.read('test/expected/concat.css');
    test.equal(expected, actual, 'should concat output when passed an array');

    test.done();
  },
  compress: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/compress.css');
    var expected = grunt.file.read('test/expected/compress.css');
    test.equal(expected, actual, 'should compress output when compress option is true');

    test.done();
  },
  nopaths: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/nopaths.css');
    var expected = grunt.file.read('test/expected/nopaths.css');
    test.equal(expected, actual, 'should default paths to the dirname of the less file');

    test.done();
  },
  cleancss: function(test) {
    'use strict';

    var actual, expected;

    test.expect(2);

    actual = grunt.file.read('tmp/cleancss.css');
    expected = grunt.file.read('test/expected/cleancss.css');
    test.equal(expected, actual, 'should cleancss output when cleancss option is true');

    actual = grunt.file.read('tmp/cleancssReport.css');
    expected = grunt.file.read('test/expected/cleancssReport.css');
    test.equal(expected, actual, 'should cleancss output when cleancss option is true and concating is enable');

    test.done();
  },
  ieCompat: function(test) {
    'use strict';

    var actual, expected;

    test.expect(2);

    actual = grunt.file.read('tmp/ieCompatFalse.css');
    expected = grunt.file.read('test/expected/ieCompatFalse.css');
    test.equal(expected, actual, 'should generate data-uris no matter the size when ieCompat option is true');

    actual = grunt.file.read('tmp/ieCompatTrue.css');
    expected = grunt.file.read('test/expected/ieCompatTrue.css');
    test.equal(expected, actual, 'should generate data-uris only when under the 32KB mark for Internet Explorer 8');

    test.done();
  },
  variablesAsLess: function(test) {
    'use strict';

    var actual, expected;

    test.expect(1);

    actual = grunt.file.read('tmp/variablesAsLess.css');
    expected = grunt.file.read('test/expected/variablesAsLess.css');
    test.equal(expected, actual, 'should process css files imported less files');

    test.done();
  },
  sourceMap: function(test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/sourceMap.css');
    test.ok(actual.indexOf('/*# sourceMappingURL=') !== -1, 'compiled file should include a source map.');
    test.done();
  },
};
