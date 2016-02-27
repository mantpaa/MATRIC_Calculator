// creating stacks; one for values, one for operators
var operatorStack = new Array();
var numberStack = new Array();


// Defines the operatorToken class
function operatorToken(tk, type)
{
    this.token= tk;
    this.ifbinary = type;
}


// Start: Pushing values to stacks
    // Operators
console.log("Pushing operators to operatorStack...")
operatorStack.push(new operatorToken("+", true));
operatorStack.push(new operatorToken("*", true));
operatorStack.push(new operatorToken("sin", false));
operatorStack.push(new operatorToken("*", true));
console.log("Operators Pushed")
    // Numbers
console.log("Pushing numbers to valueStack...");
numberStack.push(5);
numberStack.push(8);
numberStack.push(2);
numberStack.push(15);
console.log("Numbers pushed");
// End: Pushing values to stacks


/*
source of math functions: http://www.w3schools.com/jsref/jsref_obj_math.asp
#abs(x)	Returns the absolute value of x
#acos(x)	Returns the arccosine of x, in radians
#asin(x)	Returns the arcsine of x, in radians
#atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y,x)	Returns the arctangent of the quotient of its arguments
ceil(x)	Returns x, rounded upwards to the nearest integer
#cos(x)	Returns the cosine of x (x is in radians)
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
#log(x)	Returns the natural logarithm (base E) of x
max(x,y,z,...,n)	Returns the number with the highest value
min(x,y,z,...,n)	Returns the number with the lowest value
#pow(x,y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
#sin(x)	Returns the sine of x (x is in radians)
#sqrt(x)	Returns the square root of x
#tan(x)
*/

// calculation loop
var counter = 1;
while (operatorStack !== undefined && operatorStack.length != 0) {
    // pop from operator stack
    token = operatorStack.pop();
    op = token.token;
    sum = 0;
    
    if (token.ifbinary) {
        num2 = numberStack.pop();
        num = numberStack.pop();
        // Binary operators
        switch(op)
            {
                case '+': sum += num + num2;
                    console.log("+ result: ",sum);
                    break;
                case '-': sum += num - num2;
                    console.log("- result: ",sum);
                    break;
                case '*': sum += num * num2;
                    console.log("* result: ",sum);
                    break;
                case '/': sum += num / num2;
                    console.log("/ result: ",sum);
                    break;

                case '^': sum += pow(num,num2);
                    console.log("/ result: ",sum);
                    break;
            }
    }
    else {
        num = numberStack.pop();
        // Unary Operators
        switch(op)
            {
                case 'sin': sum += Math.sin(num*Math.PI/180.0);
                    console.log("+ result: ",sum);
                    break;
                case 'cos': sum += Math.cos(num);
                    console.log("+ result: ",sum);
                    break;
                case 'tan': sum += Math.tan(num);
                    console.log("+ result: ",sum);
                    break;

                case 'arcsin': sum += Math.asin(num);
                    console.log("+ result: ",sum);
                    break;
                case 'arccos': sum += Math.acos(num);
                    console.log("+ result: ",sum);
                    break;
                case 'arctan': sum += Math.atan(num);
                    console.log("+ result: ",sum);
                    break;

                case 'abs': sum += Math.abs(num);
                    console.log("+ result: ",sum);
                    break;
                case 'sqrt': sum += Math.sqrt(num);
                    console.log("+ result: ",sum);
                    break;
                case 'log': sum += Math.log(num);
                    console.log("+ result: ",sum);
                    break;
            }
    }
    console.log("Sum number " + counter + " is " + sum);
    numberStack.push(sum);
    counter += 1;
}
console.log("The result is ", numberStack.pop());