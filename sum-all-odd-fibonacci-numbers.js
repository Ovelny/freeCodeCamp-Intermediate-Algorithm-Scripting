function sumFibs(num) {
  let arr = [1, 1]
  let startNum = 0
  let result = 0
  
  for (let i = 0; i < num; i++) {
    startNum = arr[arr.length-1] + arr[arr.length-2]
    arr.push(startNum)
  }
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] <= num && arr[i] % 2 !== 0) {
      result += arr[i]
    }
  
  }
  
  return result
  
}

sumFibs(75025);
