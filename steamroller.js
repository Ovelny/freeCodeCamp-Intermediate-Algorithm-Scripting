function steamrollArray(arr) {
  let result = []
  
  function pushToResult(arr) {
    
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i] && arr[i].constructor == Array) {
        pushToResult(arr[i])
      }
      
      else {
        result.push(arr[i])
      }
      
    }
  }
  
  pushToResult(arr)
  return result
}

steamrollArray([1, [2], [3, [[4]]]])
