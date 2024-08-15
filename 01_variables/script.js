// https://www.w3schools.com/js/js_versions.asp

// Declaration of variables

// string
var name = 'John';
console.log(name);
console.log('type of name: ' + typeof name);

// number
var age = 45;
console.log(age);
console.log('type of age: ' + typeof age);

// bigint
var n = 9007199254740991n;
console.log(n);
console.log('type of n: ' + typeof n);

// boolean
var isAlive = true;
console.log(isAlive);
console.log('type of isAlive: ' + typeof isAlive);

// undefined without assignment
var x;
console.log(x);
console.log('type of x: ' + typeof x);

// undefined with assignment
var y = undefined;
console.log(y);
console.log('type of y: ' + typeof y);

var z = null;
console.log(z);
console.log('type of z: ' + typeof z);

// 1. Arithmetic Operators
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation
x = 'Hello' + ' ' + 'World';

// Exponent
x = 2 ** 3;

// Increment
x = 1;
// x = x + 1;
x++;

// Decrement
// x = x - 1;
x--;

// 2. Assignment Operators
x = 10;

x += 5; // same as x = x + 5
x -= 5; // same as x = x - 5
x *= 5; // same as x = x * 5
x /= 5; // same as x = x / 5
x %= 5; // same as x = x % 5
x **= 5; // same as x = x ** 5

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == '2';

// Equal to (Type and value)
x = 2 === '2';

// Not equal to (Just the value, not the type)
x = 2 != '2';

// Not equal to (Type and value)
x = 2 !== 2;

// Greater than and less than
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);
