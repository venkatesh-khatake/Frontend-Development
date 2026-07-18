//  fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data.status )
// })



const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("Something went wrong")
//     console.log(error)
// })

fetch(url)
.then((response)=>{
    if(!response.ok){
        throw new Error(
            `HTTP Error : ${response.status}`
        )

    }
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(" : ",error.message);
    console.log(error.status)

})