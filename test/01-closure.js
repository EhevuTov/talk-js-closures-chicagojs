function makeCallback(data) {
  console.log("making callback: " + data);  
  return function cbFunc() {
    console.log(data);
  };
};

function printFunc(myString) {
  console.log(typeof(myString)+": "+myString);
  setTimeout(makeCallback(myString), 1000);
};

printFunc("Oh, hai!");
printFunc("Oh, you two?");
for(var i=0; i < 10000;i++){
  printFunc("Oh, hai: "+i);
};
process.stdin.pipe(process.stdout);
