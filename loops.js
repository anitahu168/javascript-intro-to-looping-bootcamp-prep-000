for (var i = 1; i<100; i++) {
  console.log("Hello World the " + i + " time");
}

function forLoop(array) {
  for (let i = 0; i < 25; i++){
    console.log("I am " + i + " strange loop.")
  }
  return array
}

function whileLoop(5) {
  while (whileLoop > 0) {
  console.log(--whileLoop)
  }
  return "done"
}

function doWhileLoop(array) {
  do {
    console.log()
  } while (maybeTrue())
  return array
}
