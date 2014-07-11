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
     });
    var someObj = myObj();
    // expect(myObj.getValue()).toEqual(0);
    expect(someObj.getValue()).toEqual(0);
    someObj.increment(3)
    // myObj.increment(3)
    expect(someObj.getValue()).toEqual(3);
    // expect(myObj.getValue()).toEqual(3);
    var otherObj = myObj();
    otherObj.increment(12);
    expect(otherObj.getValue()).toEqual(12);
  });

});

describe("module", function(){
  it("module", function(){
    var module = (function(){
      var x = 10;
      y = 20;

      var dob = function() {
        x = x * 2;
      };

      dob();

      return {
        x: x
      };

    })();

    expect(module.y).toBeUndefined();
    expect(module.x).toBeDefined();
    expect(module.x).toEqual(20);

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


