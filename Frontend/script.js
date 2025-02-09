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

async function removeTask(id) {
    const data = { id: [id] }
    console.log(data);
    try {
        const response = await fetch(API_URL + "api", {
            method: "DELETE",
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

async function getData() {
  try {
    const response = await fetch(API_URL + "api", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}


function addElement(container, type, id, className, data) {
    let element = document.createElement(type)
    element.id = id;
    element.className = className;
    element.innerHTML = data;
    container.appendChild(element);
    element.addEventListener("click", () => {
      removeTask(element.id);
      element.remove();
      console.log("Task removed");
    });
}


function updateElement() {
    getData().then((elements) => {
        const taskContainer = document.getElementById("taskContainer")
        Object.entries(elements).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
            addElement(taskContainer, 'button', key, 'task', value);
        });
    })
        .catch((err) => {
            console.error(err);
        })
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
    const taskContainer = document.getElementById("taskContainer");
    addElement(taskContainer, "button", currentTime, "task", task.value);
    task.value = '';
    return "working"
}

const button = document.getElementById("addButton");
button.addEventListener("click", () => {
    let task = document.getElementById("task");
    if (task.value === ''){
        return
    }
    const res = addTask(task);
    const resMsg = document.getElementById("msg");
    resMsg.innerHTML = `<span id="msg">${res}!</span>`;

    console.log(task);
});

updateElement([]);  // Call the function with an empty array


