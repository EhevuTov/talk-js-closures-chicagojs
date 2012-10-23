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
