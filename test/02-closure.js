function makeCallback(data) {
  console.log("making callback: " + data);  
  return function cbFunc(myCBString) {
    console.log(myString);
  };
};

function cbFunc(myCBString) {
  console.log(myCBString);
};

function printFunc(myString,cbFunc) {
  console.log(typeof(myString)+": "+myString);
  cbFunc(myString);
};

printFunc("Oh, hai!",cbFunc);
