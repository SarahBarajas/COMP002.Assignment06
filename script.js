// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64
// custom error class
class MultiplicatorUnitFailure extends Error {}
// Function that multiplies or throws an error at random
function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");// 80% failure rate
  }
}
// Function that keeps attempting to multiply until it succeeds
function reliableMultiply(a, b) { 
  while (true) { // Keep trying 
    try {  
      return primitiveMultiply(a, b); // Try the multiplication
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) { // Check if the error is expected
        throw e; // If it's a different error, throw it
}
