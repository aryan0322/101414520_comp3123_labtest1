// Declaring variable as said in question
const mixedArray = ['PIZZA',10,true,25,false,'Wings']

// creating function named lowerCaseWords
lowerCaseWords = (array) => {
    return new Promise(
            (resolve, reject) => {
                if(!Array.isArray(array)){
                    reject(new Error("Input in not an array"));
                }
                else{
                const resultArray = array
                    .filter(item => typeof item === 'string')
                    .map(item => item.toLowerCase())
                resolve(resultArray)
            }
        }
    )
}

// checking output
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error))