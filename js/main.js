let button=document.querySelector("button.get")
let fetchComments=()=>{
    let html=""
    let xml= new XMLHttpRequest()
    xml.open("get","https://jsonplaceholder.typicode.com/commnts")
    xml.responseType="json"
    xml.onload=()=>{
        xml.response.forEach((elem)=>{
            html+=`<div class="comment">
                        <h2 class="postId">postId: ${elem.postId}</h2>
                        <h2 class="id">ID: ${elem.id}</h2>
                        <h2 class="name">Name: ${elem.name}</h2>
                        <p class="email">Email: ${elem.email}</p>
                        <p class="body">Comment: ${elem.body}</p>
                   </div>`;
        })
        document.querySelector("div.wrapper").innerHTML=html
    }
    xml.onerror=()=>{
        document.querySelector("div.wrapper").innerText=`Error from Server`
        console.log("error");
    }
    xml.send(null)
}
button.addEventListener("click",fetchComments)