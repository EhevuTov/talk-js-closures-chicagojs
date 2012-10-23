# Javascript Closures


  - jamesgosnell@gmail.com (@ehevutov)
  - noob Javascripter
  - https://github.com/EhevuTov/talk-js-closures-chicagojs


# Assumptions


  * you know...

    - functions

    - passing references(values)


# Javascript Background


  - Functional Language
  
    * computation is the evaluation of mathematical functions 

    * avoids state and mutable data

      - Javascript has mutable stateful data; therefore JS is pseudo-functional


  - Higher-Order Functions
  
    * think of functions as values(or references)
  
    * functions passed and/or returned


  - Scope

    1. functional scope

    2. lexical scope


  - Stack Frame and Stack Segment


# Pseudo-Functional

code:

``` js
var state = 0

function changeState() { state++ }

changeState()

if( (typeof(state) !== 'undefined') && (0 !== state) ) {
  console.log("Javascript is stateful and mutable")
}
```

returns:

```
Javascript is stateful and mutable
```

# High-Order Functions

``` js
// return a function
function makeFunc () {
  console.log(typeof(highOrderFunc))
  return highOrderFunc
}

var func = makeFunc ()
func ('Oh, hai!')

// pass a function as argument
function highOrderFunc (msg) { console.log(msg) }
function printHighOrder (func) { func('Oh, hai!') }

printHighOrder (highOrderFunc)
```


# Stack Frame


  * a stack structure of pushed data of a function

  * placed in the stack segment of mem

  * determined by the OS

  * return value is placed in stack

  * global values in scope are **not** usually

    - implementation dependant

  * after function use, data is popped off and garbage collected


# Stack Usage Example

```

int i = 0;

// 'a' and 'b' are stack variables and exist only during execution
void add (int a, int b) {
  i = a + b;
};

int main(void) {
  add(1,2); // stack frame is created in stack segment
  printf("sum is: %i\n",i);
  return 0;
};

```

# V8 Javascript Runtime


  * very popular Javascript engine

  * creates a virtual segment of memory for scopes

    - these are called V8 Contexts

      - http://code.google.com/p/v8/source/browse/trunk/src/contexts.h?r=12566#167

  * uses the OS's heap memory segment

  * contexts can point to other contexts

  * contexts point to the global context


# Javascript Closure

``` js
var util = require('util');

// function factory
function makeClosure(data) {
  // pretty sure data is a closure variable here
  console.log(typeof(data)+": " + data); 
  console.log(util.inspect(process.memoryUsage()));
  return function cbFunc() {
    console.log("made closure: " + data);  
    console.log(data);
  };
};

for(var i=0; i < 10000; i++){
  var func = makeClosure("Oh, hai: "+i);
  func();
};
process.stdin.pipe(process.stdout);

```


# Javascript No Use Stack Like C

  
  * when maker function is called, context is created

  * 


# Further Closure Research

  * memory leaks due to closures building

  * Partials and Currying

  * `bind()`

  * `call()`

  * `this` interaction with closures

    - memory consumption

    - `delete` keyword

  * Grokking V8 closures for fun (and profit?)

    - http://mrale.ph/blog/2012/09/23/grokking-v8-closures-for-fun.html

  * Picking Up Javascript - Closures and Lexical Scoping

    - http://mark-story.com/posts/view/picking-up-javascript-closures-and-lexical-scoping
