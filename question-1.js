// Declaring variable as said in question
const mixedArray = ['PIZZA',10,true,25,false,'Wings']

// creating function named lowerCaseWords
lowerCaseWords = (arr) => {
    return new Promise(
        (resolve, reject) => {
            const resultArray = arr
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase())
            resolve(resultArray)
        }
    )
}

// checking output
lowerCaseWords(mixedArray).then(result => console.log(result))