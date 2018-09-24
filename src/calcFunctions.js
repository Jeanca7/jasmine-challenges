function areaOfCircle(n) {

    if (n == 0) {
        alert("Error! please enter other value other than 0");
    }
    else if (arguments.length > 1) {
        alert("Error! please enter one argument");
    }
    else if (typeof(n) !== "number") {
        alert("Error! please enter a number");
    }
    else {
        let result = 3.1416 * (n * n);
        return Number(result.toFixed(2));
    }
}

function squareRoot(n) {

    if (n == 0) {
        alert("please enter other value other than 0");
    }
    else if (arguments.length > 1) {
        alert("please enter one argument");
    }
    else if (typeof(n) !== "number") {
        alert("please enter a number");
    }
    else {
        let result = Math.sqrt(n);
        return Number(result.toFixed(2));
    }

}

function squareMe(n) {
    if (arguments.length > 1) {
        alert("please enter one argument");
    }
    else if (typeof(n) !== "number") {
        alert("please enter a number");
    }
    
    else {
        let result = n * n
        return Number(result.toFixed(2));
    }
}


function cubeMe(num1) {
    if (arguments.length > 1) {
        alert("please enter one argument");
    }
    else if (typeof(num1) !== "number") {
        alert("please enter a number");
    }
    
    else {
        let result = num1*num1*num1;
        return Number(result.toFixed(2));
    }
}
