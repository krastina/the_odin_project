// Problem 3:
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

//isPrime(number) function determines if a number is prime
var isPrime = function(number) {
  for (var i=2; i<number; i++){
    if (number % i == 0) {
      return false;
      }
  }
    return (number > 1)
}

//listPrimes(number) lists primes up to that number
var listPrimes = function(number) {
  for (var i=2; i<number; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
  }
}

var largestPrimeFactor = function(number) {
  for (var i=number-1; i > 1; i--) {
    if (isPrime(i) && number%i == 0) {
      console.log('Largest prime factor is of ' + number + ' is: ' + i);
      break;
    }
  }
}

//test isPrime() function
console.log('1 is prime: ' + isPrime(1));
console.log('2 is prime: ' + isPrime(2));
console.log('4 is prime: ' + isPrime(4));
console.log('21 is prime: ' + isPrime(21));
console.log('29 is prime: ' + isPrime(29));

// //test listPrimes() function
console.log('The prime factors of 20 are: ')
listPrimes(20);

//test largestPrimeFactor() function
largestPrimeFactor(10);
largestPrimeFactor(13195);
largestPrimeFactor(139156);
