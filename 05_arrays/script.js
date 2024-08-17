let newYearsResolutions = [
  'Keep a journal',
  'Take a falconry class',
  'Learn to juggle',
];

console.log(newYearsResolutions);

// Create an Array
const hobbies = ['reading', 'travelling', 'sport'];

console.log(hobbies);

// Accessing Elements
const famousSayings = [
  'Fortune favors the brave.',
  'A joke is a very serious thing.',
  'Where there is love there is life.',
];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// Update Elements
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';

console.log(seasons);

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

console.log(groceryList);

// The .length property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('chopping firewood', 'paint a room');
console.log(chores);

// The .pop() Method
const chores2 = [
  'wash dishes',
  'do laundry',
  'take out trash',
  'cook dinner',
  'mop floor',
];

chores.pop();
console.log(chores);

// More Array Methods

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Remove 2 element starting from index 1
months.splice(1, 2);
// Expected output: ["Jan", "April", "May"]
console.log(months);

const groceryList2 = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains',
];

// The .shift() Method
groceryList2.shift();
console.log(groceryList2);

// The .unshift() Method
groceryList2.unshift('popcorn');
console.log(groceryList2);

// The .slice() Method
console.log(groceryList2.slice(1, 4));
console.log(groceryList2);

// The .indexOf() Method
const pastaIndex = groceryList2.indexOf('pasta');
const iceTeaIndex = groceryList2.indexOf('ice tea');
console.log(pastaIndex);
console.log(iceTeaIndex);

// The .join() Method
const gameObjects = ['rock', 'paper', 'scissors'];
const joinNoSeparator = gameObjects.join();
const joinWithSeparator = gameObjects.join(' + ');

console.log('No separator: ', joinNoSeparator);
console.log('With separator: ', joinWithSeparator);
