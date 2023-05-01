// Fetching Data From an API using (async/await) and .then()


const mainData = async(url, option) => {
    const response = await fetch(url, option)
    if(!response.ok){
        const message = `Error: ${response.status}`
        throw new Error(message)
    }
    const data = await response.json()
    return data
}

// GET DATA ---------

const getData = () => {
     mainData("https://jsonplaceholder.typicode.com/photos",{
        method : "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },

        body : JSON.stringify({
            name : "safin",
            idName : 2,
            title : "Fetching Data"
        })
     })
     .then((response) => {
        console.log(response)
     }).catch((err) => {
        console.log(err)
     })
}
getData()


// UPDATE DATA -------

const updateData = () => {
    mainData("https://jsonplaceholder.typicode.com/photos/1",{
       method : "PUT",
       headers: {
           'Content-type': 'application/json; charset=UTF-8',
         },

       body : JSON.stringify({
           name : "safin",
           idName : 2,
           program : "CSE",
           title : "Fetching Data"
       })
    })
    .then((response) => {
       console.log(response)
    }).catch((err) => {
       console.log(err)
    })
}
updateData()


// DELETING DATA --------

const deleteData = () => {
    mainData("https://jsonplaceholder.typicode.com/photos/1",{
       method : "DELETE",
      
    })
    .then((response) => {
       console.log(response)
    }).catch((err) => {
       console.log(err)
    })
}

deleteData()