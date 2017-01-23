// todo : refactor with switch case, ugly solution there
function truthCheck(collection, pre) {
  let arrResult = []
  
  for (let i = 0; i < collection.length; i++){
    
    if (!Object.keys(collection[i]).includes(pre)) {
      arrResult.push(false)
    }
    
    else if (collection[i][pre]) {
      arrResult.push(true) 
    }
    
    else {
      arrResult.push(false)
    }
  }
  
  if (arrResult.includes(false)) {
    return false
  }
  
  else {
    return true
  }
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
