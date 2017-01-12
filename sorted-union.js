function uniteUnique(arr) {
  let result = []

  function isInArray(value, array) {
    return array.indexOf(value) > -1
  }

  for (let i = 0; i < arguments.length; i++) {

    let flatArr = arguments[i]

    for (let j = 0; j < flatArr.length; j++) {

      if (!isInArray(flatArr[j], result)) {
        result.push(flatArr[j])
      }
    }
  }
  return result
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
