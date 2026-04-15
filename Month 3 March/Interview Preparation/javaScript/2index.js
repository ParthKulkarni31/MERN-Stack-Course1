// Javascript
// React JS
// Node JS

// Synchronous and Asynchronous
// Callback
// Promises
// Async/await

// 1. Set time out

console.log(1)
console.log(11)

setTimeout(() => {
    console.log(2)
}, 1000)

console.log(3)


// 1. Call Back - asynchronous

const getData = (callbackFunction) =>{
    console.log("Hello Get Data")
    callbackFunction()
}

const callbackFunction =() =>{
    console.log("Callback function is called")
}

getData(callbackFunction)

getData(() => console.log(121212))

// 2.Promises - asynchronous
      // -> resolve  -> pending   -> reject

      const myPromise = new Promise(
        (resolve, reject) => {
        const error = false
        if(error == true){
            resolve("Promise Rejected")
        } else{
            reject("Promise Resolved")
        }
      }
    )

    const testPromise = new Promise((resolve, reject) =>{

    })

    myPromise.then((res) => console.log(res)).catch((error) =>console.log(error))


    console.log(testPromise)


    // // 3.async/await - asynchronous

    const myFunction = () =>{
        // API integration
        // DB Call -add delete update create from db - await
    }