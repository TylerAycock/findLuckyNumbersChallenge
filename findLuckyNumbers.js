// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:
// luckyNumbers(2)
// returns (3, 7)

let luckyNumbers = (num) => {
    let arr = []
    while (arr.length < num) {
        let randomNum = Math.ceil( Math.random() * 10) //ceil essentialaly rounds up so you can't get 0 and we multiply by 10 to ensure we can get that as its highest number 
        if (arr.includes(randomNum) === false)          //incldues check to see if the num is = to itself returning a true if they match while returning a false if they don't match
        arr.push(randomNum)
    }
    return arr 
}

console.log(luckyNumbers(5))

function luckySet(num) {
    let numSet = new Set([])
    while(numSet.size < num){
        let randomNum = Math.ceil( Math.random() * 10)
        numSet.add(randomNum)
    }
    return [...numSet]
}

console.log(luckySet(7))