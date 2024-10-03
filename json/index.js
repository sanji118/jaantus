function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data){
    //console.log(data);
    const ul = document.getElementById('users-list');
    for ( const user of data){
        //console.log(user);
        //console.log(user.email);
        //console.log(user.username);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data2 => displayPost(data2))
}

function displayPost(data2){
    const postContainer = document.getElementById('post-container');
    for(const post of data2){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML= `
            <h3>Post-id: ${post.id}</h3>
            <h3>Post-title: ${post.title}</h3>
            <h3>Post-description: <br>${post.body}</h3>
        `
        postContainer.appendChild(postDiv);

    }
}

//function loadComments(){
//fetch('https://jsonplaceholder.typicode.com/comments')
//    .then(res => res.json())
//    .then(data3 => displayComment(data3))
//    .catch(error => console.error('error happened', error))
//}


const loadComments = async() => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data3 = await res.json();
        console.log(data3);
    }
    catch(error){
        console.error('data load error', error)
    }
}