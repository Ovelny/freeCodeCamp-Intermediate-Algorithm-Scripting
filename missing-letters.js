function fearNotLetter(str) {
  
  for (let i = 0; i < str.length; i++) {
    
    if (i >= 1 && str.charCodeAt(i) !== (str.charCodeAt(i-1)+1)) {
      return String.fromCharCode(str.charCodeAt(i)-1)
    }
    
  }
  
  return undefined
}

fearNotLetter("yz");
