function convertHTML(str) {
  for (let letter of str) {
    
    switch(letter) {
      case '&':
        str = str.replace(letter, '&amp;')
        break
        
      case '<':
        str =str.replace(letter, '&lt;')
        break
        
      case '>':
        str = str.replace(letter, '&gt;')
        break
        
      case '"':
        str = str.replace(letter, '&quot;')
        break
        
      case "'":
        str = str.replace(letter, '&apos;')
        break
      
      default:
        break
    }
  }
  return str
}

convertHTML("Dolce & Gabbana");
