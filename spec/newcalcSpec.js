describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        
        it("should show an alert an error", function() {
            spyOn(window, "alert");
            areaOfCircle(0);
            expect(window.alert).toHaveBeenCalledWith("Error! please enter other value other than 0");
        });
        
        it("should show an alert an error", function() {
            spyOn(window, "alert");
            areaOfCircle(2, 3);
            expect(window.alert).toHaveBeenCalledWith("Error! please enter one argument");
        });
        
        it("should show an alert an error", function() {
            spyOn(window, "alert");
            areaOfCircle("hey");
            expect(window.alert).toHaveBeenCalledWith("Error! please enter a number");
        });
        
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
        
        it("should show an alert an error", function() {
            spyOn(window, "alert");
            squareRoot(0);
            expect(window.alert).toHaveBeenCalledWith("please enter other value other than 0");
        });
        
        it("should show an alert an error", function() {
            spyOn(window, "alert");
            squareRoot(2,5);
            expect(window.alert).toHaveBeenCalledWith("please enter one argument");
        });
        
        it("should show an alert an error", function() {
            spyOn(window, "alert");
            squareRoot("heya");
            expect(window.alert).toHaveBeenCalledWith("please enter a number");
        });
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should show an alert due to error", function(){
           spyOn(window, "alert");
           squareMe(3, 2);
           expect(window.alert).toHaveBeenCalledWith("please enter one argument");
        });
        it("should show an alert due to error", function(){
          spyOn(window, "alert");
          squareMe("hey");
          expect(window.alert).toHaveBeenCalledWith("please enter a number");
        });
         
    });
    
    describe("Cube function", function() {
        it("should return 9 as the square of 3", function() {
            expect(cubeMe(3)).toBe(27);
        });
        it("should show an alert due to error", function(){
           spyOn(window, "alert");
           cubeMe(3, 4);
           expect(window.alert).toHaveBeenCalledWith("please enter one argument");
        });
        it("should show an alert due to error", function(){
          spyOn(window, "alert");
          cubeMe("heya");
          expect(window.alert).toHaveBeenCalledWith("please enter a number");
        });
         
    });
    
});

// Unzip the TestingChallenge.zip file and upload the files to a new directory on Cloud9

// The first two functions are not written defensively. Add some tests to expose the problems, and then write the code to fix them.
// The squareMe() function is incomplete. Write the tests to expose the problem and then write the code to fix it.******************
// Add defensive code to squareMe()
// Write tests for, and create the code for a cubeMe() function

// BONUS ROUND  -----------------HERE

// Write tests for and create an areaOfTriangle function. The function should take two numbers base and height. The formula for calculating the area of a right-angled triangle is:
// (base * height) / 2

// BONUS BONUS ROUND

// Write tests for and create a function that takes a year as a parameter. It will calculate how many years it is until 2073.