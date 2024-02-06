
// time intervals

// setTimeout(function(){
//     console.log("This is setTimeout")
// },3000)

// setInterval(function(){
//     document.write("This is setInterval")
// },2000)

// PROMISE

let firstPromise = new Promise (function (resolve , reject) {
    setTimeout(function(){
        console.log("This is First Promise")
    },4000)
})

//SECOND

let promiseTwo = new Promise (function (resolve , reject) {
    setTimeout(function() {
        resolve({ name : "Asad" , email : "asad@gmail.com"})
    },2000)
})

promiseTwo.then(function (user) {
    console.log(user)
})

// THIRD PROMISE

let thirdPromise = new Promise (function (resolve , reject) {
    setTimeout(function () {
        resolve({ username : "hamza" , password : "54654"})
    },2000)
})

thirdPromise.then(function (user) {
    return user.username;
}).then(function (output) {
    console.log(output)
})

//FOURTH


let fourthPromise = new Promise (function (resolve , reject) {

 setTimeout(function(){
    let error = false;
    if (!error) {
    resolve({ myName : "HAZIQ", password : "54651"})
    }
    else{
        reject("SOMETHING WENT WRONG")
    }
},2000)
})

fourthPromise.then(function (myvalue){
    console.log(myvalue)
})
.catch(function (error) {
    console.log(error)
}).finally(function () {
    console.log(Finally)
})