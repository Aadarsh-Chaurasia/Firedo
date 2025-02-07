const button = document.getElementById("addButton");
const API_URL = "http://localhost:3000/"
async function postTask(task) {
    
    try {
        const response = await fetch(API_URL + "api", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(task),
        });
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

async function getData() {
    try {
        const response = await fetch(API_URL + "api", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

function addTask(task) {
    // Adding task to DB
    const currentTime = Date.now();
    const data = { [currentTime]: task.value };
    postTask(data)
        .then((res) => {
            console.log(`${data} added successfully`);
        })
        .catch((err) => {
            return err.message;
        })
    // Adding task in frontend
    let taskEl = document.createElement("li");
    taskEl.innerHTML = `<li>${task.value}</li>`;
    document.getElementById("tasklist").appendChild(taskEl);
    task.value = '';
    return "working"
}

button.addEventListener("click", () => {
    let task = document.getElementById("task");
    const res = addTask(task);
    const resMsg = document.getElementById("msg");
    resMsg.innerHTML = `<span id="msg">${res}!</span>`;

    console.log(task);
});