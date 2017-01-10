function pairElement(str) {
  
  let arrOfArr = []
  let arr = []
  let pairs = {
    "G": "C",
    "C": "G",
    "A": "T",
    "T": "A"
  }
  
  for (let element of str) {
    arr.push(element)
    arr.push(pairs[element])
    arrOfArr.push(arr)
    arr = []
  }
  
  return arrOfArr;
}

pairElement("GCG");
