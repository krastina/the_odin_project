// Problem 1:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var Decide = function(maxValue) {
  var numbers_chosen = [];
  var sum = 0;
  for (i=1; i < maxValue; i++) {
    if (i%3 == 0 || i%5 == 0) {
      sum += i;
      numbers_chosen += i;
    }
  }
  console.log(numbers_chosen + " Sum: " + sum);
}

Decide(10);
Decide(100);
