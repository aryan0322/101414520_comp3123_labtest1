// creating resolvedpromise similar to delayedsuccess
resolvedPromise = () => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve({ message: 'delayed success!' });
            }, 500);
        }
    )
}
// Calling the promise
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error))

// creating rejectedPromise similar to delayedException
rejectedPromise = () => {
    return new Promise(
        (_, reject) => {
            setTimeout(() => {
                try{
                    throw(new Error("Error: Delayed Exception"))
                } catch(e) {
                    reject(e)
                }
            },500)
        }
    )
}

// Calling the promise
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error))