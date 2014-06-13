describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});


describe("Hello World", function() {
  it("says hello", function(){
    expect(helloWorld()).toEqual("Hello World");
  });
});


describe("#get_states",function(){
  it("should return their right values", function(){
    var myQuo3 = new Quo("not confused");
    expect(myQuo3.get_status()).toEqual("not confused");
  });
});


describe("initializes object by calling function that returns an object literal", function() {
  it("should increment value to 3", function() {
     var myObj = (function() {
        var value = 0;

        return {
          increment: function(inc) {
            value += typeof inc === 'number' ? inc : 1;
          },
          getValue: function() {
            return value;
          }
        };
     })();

    expect(myObj.getValue()).toEqual(0);
    myObj.increment(3)
    expect(myObj.getValue()).toEqual(3);
  });

});


describe("",function(){
  it("",function(){
    var myFunc = function(status){
      return {
        get_status: function () {
          return status;
        }
      }
    }
    var myObj = myFunc("something");
    expect(myObj.get_status()).toEqual("something");
  });
});


