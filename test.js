
var ref = require("ref");
var ffi = require('ffi');
var Test = ffi.Library('./testDll',{
    'init':['int',[]],
    'hello':['int',[]]
});
var init = Test.init();
var hello = Test.hello();
console.log(init + "-----" + hello);


