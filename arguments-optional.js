function addTogether(a, b) {

    if (a && b) {

        if (typeof a !== "number" || typeof b !== "number") {
            return undefined
        } 
        
        else {
            return a + b
        }

    } 
  
    else {

        if (typeof a !== "number") {
            return undefined
        }

        return function(b) {
          
            if (typeof b == "number") {
                return a + b
            } 
          
            else {
                return undefined
            }
        }
    }
}

addTogether(2)([3])
