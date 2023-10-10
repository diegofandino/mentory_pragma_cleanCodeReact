// 1. Spread extension operator: 
// This operator is useful when we need to put an array or object into a new array or object and combine múltiple parameters:
const vehicles = ['car', 'bus', 'van'];

//work: search new meaning.

// 2. Conditional Rendering Only for One Condition - avoid ternary &&

// 3. Conditional Logical OR operator - allow provide alternative value if original is false.

// 3. A.Incl - choose only red fruits 
function chooseRedFruit(fruit) {
if (fruit === 'apple' || fruit === 'strawberry') {
    console.log('red');
    };
};

//4. Object Literal than Switch Statement (Clean way to choose)
function arrayDependsColor(color) {
    // use switch case to find fruits in color
    switch (color) {
      case 'red':
        return ['apple', 'strawberry'];
      case 'yellow':
        return ['banana', 'pineapple'];
      case 'purple':
        return ['grape', 'plum'];
      default:
        return [];
    }
  }

//5. every and some
// find a form where all fruist are red, then find is at least one is red.
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
];

//6. limit number of arguments 
const sendPushNotification = (title, message, image, isSilent, delayMs) => {
    // ...
}

//7. Write less, code more
const isPublic = true;
const something = "Hellow"

//if (isPublic === true) 

// if(something !== "" && something !== null && something !== undefined)