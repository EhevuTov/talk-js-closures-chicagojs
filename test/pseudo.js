var state = 0

function changeState() { state++ }

changeState()
if( (typeof(state) !== 'undefined') && (0 !== state) ) {
  console.log("Javascript is stateful and mutable")
}
