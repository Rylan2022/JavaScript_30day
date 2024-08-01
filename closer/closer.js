// Activity 1: Understanding Closures
//Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction(x) {
    function innterFunction() {
      return x * x;
    }
    return innterFunction;
  }
  
  const squreFunction = outerFunction(2);
  // console.log(squreFunction());
  
  // Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
  
  function createCounter() {
    let count = 0;
  
    return {
      increment: function () {
        count++;
      },
      getCount: function () {
        return count;
      },
      decrement: function () {
        count--;
      },
    };
  }
  
  // const counter = createCounter();
  // counter.increment();
  // counter.increment();
  // counter.increment();
  // console.log(counter.getCount());
  // counter.decrement();
  // console.log(counter.getCount());
  
  // Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
  
  function IDGenrator() {
    let myID = 0;
    return function () {
      myID++;
      return myID;
    };
  }
  
  const generated = IDGenrator();
  // console.log(generated());
  // console.log(generated());
  // console.log(generated());
  // console.log(generated());
  
  // Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
  
  function Gretting(name) {
    return {
      morning: function () {
        return `Good morning ${name} sir!\n Have good day!`;
      },
      evening: function () {
        return `Good Evening dear, ${name}\n Hope you have nice day!`;
      },
    };
  }
  
  // const data = Gretting('Rakesh');
  // console.log(data.morning());
  // console.log(data.evening());
  
  // Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
  
  function createFunctionArray() {
    let functions = [];
  
    for (let i = 0; i < 5; i++) {
      functions.push(
        (function (index) {
          return function () {
            console.log(index);
          };
        })(i)
      );
    }
    return functions;
  }
  
  // const myArr = createFunctionArray();
  // myArr[0]();
  // myArr[1]();
  // myArr[0]();
  
  // Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
  
  const itemModule = (function () {
    let itemBox = [];
  
    return {
      addItem: function (item) {
        itemBox.push(item);
      },
      removeItem: function (item) {
        itemBox = itemBox.filter(i => i !== item);
      },
      listItem: function () {
        return itemBox;
      },
    };
  })();
  
  // itemModule.addItem("Apple");
  // itemModule.addItem("Kiwi");
  // itemModule.addItem("Mango");
  // console.log(itemModule.listItem());
  // itemModule.removeItem('Apple');
  // console.log(itemModule.listItem());
  
  // Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
  
  function memorize(fn) {
      let cache = {};
  
      return function(...args) {
          const key = JSON.stringify(args);
          if(cache[key]) {
              return cache[kay];
          }
          const result = fn(...args);
          cache[key] = result;
          return result;
      };
  }
  
  const slowSquare = (n) => {
      console.log('Computing...');
      return n * n;
  };
  
  // const memoizesSqure = memorize(slowSquare);
  // console.log(memoizesSqure(5));
  // console.log(memoizesSqure(5));
  
  // Task 8: Create a memoized version of a function that calculates the factorial of a number.
  
  function memoize(fn) {
      let chche = {};
  
      return function(...args) {
          const key = JSON.stringify(args);
          if(caches[key]) {
              return chche[key]
          }
          const result = fn(...args);
          chche[key] = result;
          return result;
      };
  }
  
  function factorial(n) {
      if (n === 0 || n === 1) return 1;
      return n * factorial(n-1);
  }
  
  // const memoizedFactorial = memoize(factorial);
  // console.log(memoizedFactorial(5));
  // console.log(memoizedFactorial(5)); 