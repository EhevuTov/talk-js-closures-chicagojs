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
