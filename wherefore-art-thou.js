
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  function isIncludedIn(a, b) {

    if (Object.keys(a).length < Object.keys(b).length) {
        return false
    }

    for (var key in b) {
        if (!a.hasOwnProperty(key) || b[key] !== a[key]) {
            return false
        }
    }
    return true
}

for (let i = 0; i < collection.length; i++) {
    if (isIncludedIn(collection[i], source)) {
        arr.push(collection[i])
    }
}
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
