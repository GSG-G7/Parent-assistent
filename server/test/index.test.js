require('./quieres');
require('./routes');
const test = require('tape');

exports.initalTest = test('index inital test', t => {
    t.equal(2, 2, "should be equal");
    t.end();
    
});