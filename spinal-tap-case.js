function spinalCase(str) {
  
  for (let letter of str) {
    
    let re = /([A-Z])/g.test(letter)

    if (letter === " " || letter === '_') {
      str = str.replace(letter, '-')
    } 
    
    else if (re) {
      str = str.replace(/([a-z])([A-Z])/g, "$1-$2")
    }
    
  }
  str = str.toLowerCase()
  
  return str
}

spinalCase('This Is Spinal Tap')
