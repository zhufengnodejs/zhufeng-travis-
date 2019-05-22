let sum = require('./sum');
let assert = require('assert');
describe('test sum',()=>{
    it('1+2=3',()=>{
        assert.equal(sum(1,2),3);
    })
});