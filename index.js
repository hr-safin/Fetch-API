// Fetching Data using .then and error handle using .catch()

const p = fetch("https://jsonplaceholder.typicode.com/photos")

p.then((response) => {
   
   if(!response.ok){
    const message = `Error: ${response.status}`
    throw new Error(message)
   }
   return response.json()
}).then((response) => {
    console.log(response)
}).catch((err) => {
    console.log(err)
})