let x;
const name = 'John';
const age = 31;

// Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template Literals ES6
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and Methods
let s = 'Hello World';
s = new String('Hello World');

// String length property
x = s.length;

x = typeof s;

// Access value by key (index)
x = s[1];

// Methode are stored in prototype
x = s.__proto__;

// The .toUpperCase() method
x = s.toUpperCase();

// The .toLowerCase() method
x = s.toLowerCase();

// the .charAt() method
x = s.charAt(0);

// the .indexOf() method
x = s.indexOf('e');

// the .slice() method
x = s.slice(0, 5);

// the .split() method
x = s.split(' ');

// the .trim() method
x = '   Hello world   '.trim();

// the .replace() methode
x = s.replace('World', 'John');

// the .includes() method
x = s.includes('ello');
console.log(x);
