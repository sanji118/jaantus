console.log(1);
console.log(2);
console.log(3);
setTimeout(() => {
    console.log('lazy logged')
}, 4000);
console.log(5);
console.log(6);
console.log(7);


function doSomething(){
    console.log(4);
}

const myLoader = () =>{
    return new Promise((resolve, reject) =>{
        const success = Math.random();
        if(success < 0.5){
            resolve(success);
        }
        else{
            reject(success);
        }
    })
}

myLoader()
.then(data => console.log('resolved data', data))
.catch(err => console.log('error loaded', err))

async function getUsers(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}