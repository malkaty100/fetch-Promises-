//ex1
function getUser(userId){
const res=fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
    {method:"get",
         headers: {
            "Content-Type": "application/json"
        }
    }
)
return res
}

getUser(10).then(data=>data.json()).then(data=>console.log(data.name));
// console.log(getUser(10).then(data=>data.json()));
///ex2
function  getPost(postId){
    return fetch(` https://jsonplaceholder.typicode.com/posts/${postId}`,
        {method:'get', 
        headers: {
            "Content-Type": "application/json"
        }}
       
    )
}

getPost(6).then(res=>res.json()).then(data=>console.log(data.title)
)
//ex3
function getUserEmail(userId){
    return fetch(` https://jsonplaceholder.typicode.com/users/${userId}`,
    {method:"get",
         headers: {
            "Content-Type": "application/json"
        }
    })
}
getUserEmail(8).then(res=>res.json()).then(data=>console.log(data.email)
)
//ex4
function listUserTodos(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/?userId=${userId}`
    //     ,
    // {method:"get",
    //      headers: {
    //         "Content-Type": "application/json"}
    //     }
    )
}
listUserTodos(7).then(res=>res.json()).then(data=>console.log(`User 7 has ${data.length} todos`))
//ex5
function checkPostExists(postId){
    return fetch(` https://jsonplaceholder.typicode.com/posts/${postId}`)
}
checkPostExists(50).then(res=>{
    if(!res.ok)
        throw new Error("post not found")
    console.log("post exists");
    
})
    .catch(err=>console.log(err)
    )
//ex6
 function fetchWithDelay(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(resolve)
                .catch(reject)
        }, delay)
    })
}

fetchWithDelay('https://jsonplaceholder.typicode.com/users', 3000)
    .then(res => res.text())
    .then(text => console.log(text.slice(0, 50)))
    .catch(err => console.log(err))
 ///ex7
 function showKeys(url){
    return fetch(url)
 }
 showKeys("https://jsonplaceholder.typicode.com/users/5").then(res=>res.json()).then(data=>console.log("keys: "+Object.keys(data))
 )
 //ex8
 function getUserFirstPost(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>res.json())
    .then(data=>{return fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${data.id}`)
    
})
    

 } 
 getUserFirstPost(5).then(res=>res.json()).then(data=>console.log("first post title: "+data[0].title)
 )
 //ex9
 function  getPostCommentsCount(postId){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res=>res.json()).then(data=>fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`)
)
 }
 getPostCommentsCount(1).then(res=>res.json()).then(data=>console.log(`post has ${data.length} comments`)
 )
 //ex10
 function todoAndUser(todoId){
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then(res=>res.json())
    .then(todo=>fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`).then(res=>res.json())
    .then(user=>{return {todo,user}}))
 }
 todoAndUser(1).then(data=>console.log(`to do title: ${data.todo.title} user name: ${data.user.name}`)
 )