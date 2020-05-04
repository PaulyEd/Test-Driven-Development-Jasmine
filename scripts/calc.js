Calculator = function() {
    this.value = 0;
};

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
};

///////////////////////////////////////////////////////////////////////////////

function whatCanIDrink(age) {
  if (age >= 0) {
    switch (true) {
      case age < 14:
        return "Drink Toddy";
        break;
      case age < 18:
        return "Drink Coke";
        break;
      case age < 21:
        return "Drink Beer";
        break;
      case age < 130:
        return "Drink Whisky";
        break;
      default:
        return "Sorry. I can’t tell what drink because that age is incorrect!";
        break;
    }
  }
  else {
      return "Sorry. I can’t tell what drink because that age is incorrect!";
  }
}

///////////////////////////////////////////////////////////////////////////////

whatCanIDrink = function(age) {
	if (age < 0) {
		return "Sorry. I can’t tell what drink because that age is incorrect!";
	}
	else if (age < 14) {
		return "Drink Toddy";
	}
	else if (age < 18 && age >=14) {
		return "Drink Coke";
	}
	else if (age < 21 && age >=18) {
		return "Drink Beer";
	}
	else if (age < 130) {
		return "Drink Whisky";
	} 
	else {
		return "Sorry. I can’t tell what drink because that age is incorrect!"
	}
};


///////////////////////////////////////////////////////////////////////////////
describe("My whatCanIDrink function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        
        
        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink beer when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        }); 
        
        it("should return drink whisky when called as whatCanIDrink(30)", function() {
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whisky");
        });
        
        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});
///////////////////////////////////////////////////////////////////////////////
fizzBuzz = function(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return "FizzBuzz";
	}
	else if (number % 3 === 0) {
		return "Fizz";
	}
	else if (number % 5 === 0) {
		return "Buzz";
	}	
	else {
		return number
	}
};
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////