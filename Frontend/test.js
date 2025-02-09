
async function postData(data){
    try {
        const response = await fetch('http://localhost:3000/api', {
            method: 'DELETE',
            headers: {
                'content-type' : 'application/json',
        },
        body: JSON.stringify(data)
        });
    const result = await response.json();
    console.log(result)
    }
    catch(err){
        console.log(err);
    }
}

// const data = {msg : "Hello"}

const currentTime = Date.now();
const data = {id : 'one'};
// postData(data)


// console.log(currentTime);
// console.log(data);

const arr = []
console.log(arr);