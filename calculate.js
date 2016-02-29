// creating stack. Holds the postfix (RPN) version of equation
// equation is used for debugging purposes
var tokenStack = new Array();
var equation = "";
// Defines the operatorToken class
function operatorToken(tokenIn, type) {
  this.token = tokenIn;
    this.arguments = type;
}

// Store various test equations as functions so we can quickly retest if we've changed something.
function test1() {
    tokenStack = new Array();
    console.log("Test1: 5 + 8 * sin(2*15)");
    console.log("postfix: 5 8 2 15 * sin * +");
    tokenStack.push(5);
    tokenStack.push(8);
    tokenStack.push(2);
    tokenStack.push(15);
    tokenStack.push(new operatorToken("*", "binary"));
    tokenStack.push(new operatorToken("sin", "unary"));
    tokenStack.push(new operatorToken("*", "binary"));
    tokenStack.push(new operatorToken("+", "binary"));
}

function test2() {
    tokenStack = new Array();
    console.log("Test2: 17^(2) + (4/3) + 2 * 4");
    console.log("postfix: 17 2 ^ 4 3 / + 2 4 * +");
    tokenStack.push(17);
    tokenStack.push(2);
    tokenStack.push(new operatorToken("^", "binary"));
    tokenStack.push(4);
    tokenStack.push(3);
    tokenStack.push(new operatorToken("/", "binary"));
    tokenStack.push(new operatorToken("+", "binary"));
    tokenStack.push(2);
    tokenStack.push(4);
    tokenStack.push(new operatorToken("*", "binary"));
    tokenStack.push(new operatorToken("+", "binary"));
}

function test3()
{
    tokenStack = new Array();
    console.log("Test3: -2*3");
    console.log("postfix: 2 3 * -");
    tokenStack.push(2);
    tokenStack.push(3);
    tokenStack.push(new operatorToken("*", "binary"));
    tokenStack.push(new operatorToken("-", "sign"));
}

function test4()
{
    tokenStack = new Array();
    console.log("Test3: -2*3");
    console.log("postfix: 2 3 * -");
    tokenStack.push(2);
    tokenStack.push(3);
    tokenStack.push(new operatorToken("*", "binary"));
    tokenStack.push(new operatorToken("-", "sign"));
}
// store equate logic as a seperate function
function equate(token, num1, num2)
{
    sum = 0;
    tk = token;
    switch (tk) {
    case '+':
        sum += num1 + num2;
        console.log("+ result: ", sum);
        break;
    case '-':
        sum += num1 - num2;
        console.log("- result: ", sum);
        break;
    case '*':
        sum += num1 * num2;
        console.log("* result: ", sum);
        break;
    case '/':
        sum += num1 / num2;
        console.log("/ result: ", sum);
        break;

    case '^':
        sum += num1 * num1;
        console.log("/ result: ", sum);
        break;
    case 'sin':
        sum += Math.sin(num1 * Math.PI / 180.0);
        console.log("+ result: ", sum);
        break;
    case 'cos':
        sum += Math.cos(num1);
        console.log("+ result: ", sum);
        break;
    case 'tan':
        sum += Math.tan(num1);
        console.log("+ result: ", sum);
        break;

    case 'arcsin':
        sum += Math.asin(num1);
        console.log("+ result: ", sum);
        break;
    case 'arccos':
        sum += Math.acos(num1);
        console.log("+ result: ", sum);
        break;
    case 'arctan':
        sum += Math.atan(num1);
        console.log("+ result: ", sum);
        break;

    case 'abs':
        sum += Math.abs(num1);
        console.log("+ result: ", sum);
        break;
    case 'sqrt':
        sum += Math.sqrt(num1);
        console.log("+ result: ", sum);
        break;
    case 'log':
        sum += Math.log(num1);
        console.log("+ result: ", sum);
        break;
    }
    return sum;
}
// debug object
// TODO: implement this
function debug_manager(global_logging, function_logging, print_value) {
    print("hello");
}
// Start: Pushing values to stacks
/*    // Operators
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
*/ // End: Pushing values to stacks


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
test1();
sum = 0;
numStack = new Array();
for(var i = 0; i < tokenStack.length; i++)
    {
        inputToken = tokenStack[i];
        if(isNaN(inputToken))
            {
                if(inputToken.arguments == "binary")
                    {
                         console.log("Operator", inputToken.token);
                         num2 = numStack.pop()
                         num1 = numStack.pop()
                         opToken = inputToken.token;
                         sum = equate(opToken, num1, num2);
                         console.log("Mresult: ", sum);
                         numStack.push(sum);
                    }
                else if(inputToken.arguments == "unary")
                    {
                        num1 = numStack.pop()
                         opToken = inputToken.token;
                         sum = equate(opToken, num1);
                         console.log("operation: ",opToken," result: ", sum);
                         numStack.push(sum);
                    }
                else
                    {
                        console.log("sign:", inputToken);
                        num = numStack.pop()
                        numStack.push(-num);
                        
                            
                    }
            }
        else
            {
                console.log("Mikael", inputToken);
                numStack.push(inputToken);
            }
    }

console.log("The result is ", numStack.pop());