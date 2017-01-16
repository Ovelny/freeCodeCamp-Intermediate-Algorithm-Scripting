function sumPrimes(num) {
  let result = 0
  
  function isPrime(n) {
    
    if (n < 2 || n != Math.round(n)) {
      return false
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false
      }
    }
    return true
  }
  
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      result += i
    }
  }
  
  return result
}

sumPrimes(10)
