
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
