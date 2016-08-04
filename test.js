'use strict'

var chai=require('chai');
var expect =chai.expect;

chai.should();


function returnsName(name){
    
    return name;
};
function AddNumberToItself(num){
    return (num+num);
};
function IsEven(inputVal) {
    return (inputVal%2)===0;
}

describe('Employee',function () {
   it('returns name passed to the function',function() {
       returnsName('IDDLD').should.equal('IDDLD'); 
       
   }) 
});
describe('Math Operations',function(){
    it('returns a value that is  by adding the same number we sent as input',function(){
     AddNumberToItself(5).should.equal(10);   
    });
    
    it('should return true if the input number is divisble by 2',function(){
        IsEven(4).should.equal(true);
    })
});