// function factory
function makeClosure(data) {
  // pretty sure data is a closure variable here
  console.log(typeof(data)+": " + data); 
  return function cbFunc() {
    console.log("made closure: " + data);  
    console.log(data);
  };
};

function printFunc(myString) {
  console.log(typeof(myString)+": "+myString);
  setTimeout(makeClosure(myString), 1000);
};

for(var i=0; i < 10000; i++){
  printFunc("Oh, hai: "+i);
};
process.stdin.pipe(process.stdout);
