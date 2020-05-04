describe("Calculator", function () {
  beforeEach(function () {
    calc = new Calculator();
  });

  describe("Addition function", function () {
    it("should return 42", function () {
      calc.add(20);
      calc.add(22);
      expect(calc.value).toBe(42);
    });

    it("should return 26", function () {
      calc.add(7);
      calc.add(19);
      expect(calc.value).toBe(26);
    });

    it("should return an error if we don't supply two numbers", function () {
      spyOn(window, "alert");
      calc.add("Hitchhikers");
      expect(window.alert).toHaveBeenCalledWith("Error!");
    });
  });
});
///////////////////////////////////////////////////////////////////////////////

describe("whatCanIDrink", function() {
    describe("whatCanIDrink function", function() {
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
    describe("whatCanIDrink function", function() {
        it("toddy", function() {
            expect(whatCanIDrink(2)).toBe("Drink Toddy");
        });
    });
    describe("whatCanIDrink function", function() {
        it("coke", function() {
            expect(whatCanIDrink(15)).toBe("Drink Coke");
        });
    });
    describe("whatCanIDrink function", function() {
        it("beer", function() {
            expect(whatCanIDrink(19)).toBe("Drink Beer");
        });
    });
    describe("whatCanIDrink function", function() {
        it("whiskey", function() {
            expect(whatCanIDrink(50)).toBe("Drink Whisky");
        });
    });
    describe("whatCanIDrink function", function() {
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink("apple")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});


///////////////////////////////////////////////////////////////////////////////
describe("My fizzBuzz function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    
    describe("Returns number, fizz, buzz or fizzbuzz", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual. 
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return Fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });
                
        it("should return Buzz when called as fizzBuzz(10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });
        
        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        it("should return 2 when called as fizzBuzz(2)", function() {
            var result = fizzBuzz(2)
            expect(result).toBe(2);
        });
    });
});
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
