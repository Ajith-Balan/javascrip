let tasks = [];

function addTask() {
    const taskName = document.getElementById("task").value;

    if (taskName === "") {
        alert("Please enter task name");
        return;
    }else{
        tasks.push(taskName);
        document.getElementById("task").value = "";
        displayTask();
    }

}


function displayTask() {
    let str = "";
    for (let i in tasks) {
        const task = tasks[i];
        str += `<li>
                    <input type="text" id="taskName-${i}" disabled value="${task}">
                   
                    <button onclick="deleteTask(${i})">Delete</button>
                    <button onclick="editTask(${i})">Edit</button>
                    <button onclick="saveTask(${i})">Save</button>
                </li>`;
    }
    document.getElementById('list').innerHTML = str;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTask();
}

function editTask(index) {
    document.getElementById(`taskName-${index}`).disabled = false;

}

function saveTask(index) {
    tasks[index].name = document.getElementById(`taskName-${index}`).value;
  

    document.getElementById(`taskName-${index}`).disabled = true;
   
}

displayTask();













