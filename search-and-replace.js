function myReplace(str, before, after) {
  
  function preserveCase () {
    let beforeArr = before.split('')
    let afterArr = after.split('')
    
    for (let i = 0; i < afterArr.length; i++) {
      if (beforeArr[i] === undefined) {
        break
        
      }
      
      if (beforeArr[i].charCodeAt() >= 65 && beforeArr[i].charCodeAt() <= 90 ) {
        let replaceCase = afterArr[i].toUpperCase()
        afterArr[i] = replaceCase
        
      }
      
      after = afterArr.join('')
      
    }
    
  }
  
  preserveCase()
  
  let newStr = str.replace(before, after)
  return newStr
  
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
