async function getAllUser (){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let jsonData = await response.json()
        document.write(JSON.stringify(jsonData))
    }
    catch{
        console.log("error")
    }

}
getAllUser ()