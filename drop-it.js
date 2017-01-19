function dropElements(arr, func) {
  let arrSize = arr.length
  
  for (let i = 0; i < arrSize; i++) {
    
    if (func(arr[0])) {
      break
    }
    
    else {
      arr.shift()
    }
    
  }
 return arr
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})
