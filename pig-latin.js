function translatePigLatin(str) {
  let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z', 'w', 'y']
  let swapStr = ''

  function isInArray(value, array) {
    return array.indexOf(value) > -1
  }

  for (let letter of consonants) {
    var arrIndex = consonants.indexOf(letter)

    if (arrIndex <= 0 && !isInArray(str.charAt(0), consonants)) {
      str = str + 'way'
      return str
    }

    if (isInArray(str.charAt(arrIndex), consonants)) {

      if (arrIndex >= 1 && !isInArray(str.charAt(arrIndex - 1), consonants)) {
        break
      }

      swapStr += str.charAt(arrIndex)

    }
  }

  str = str.replace(swapStr, '')
  str += swapStr + 'ay'
  return str
}
