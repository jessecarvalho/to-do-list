const taskListEl = document.querySelector('#task-list');
const addTaskBtn = document.querySelector('#add-task-btn');
const newTaskEl = document.querySelector('#new-task')
var taskList = [];

function runRows(){
    let html = '';
    for (let i = 0; i < taskList.length; i++) {
        html += '<div class="item">';
            html += '<div class="intern-item">';
                html += '<div class="action">';
                    html += '<input type="checkbox" class="check-task" data-id="' + i + '">';
                html += '</div>'
                html += '<div class="body">'
                    html += taskList[i]
                html += '</div>'
                html += '<div class="action">'
                    html += '<button class="remove-task-btn" data-id="' + i + '">'
                        html += '<img src="assets/trash.svg" alt="">'
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    }

    taskListEl.innerHTML = html;

    let removeTaskBtn = document.querySelectorAll('.remove-task-btn');
    let checkTaskEl = document.querySelectorAll('.check-task')

    for (let i = 0; i < removeTaskBtn.length; i++) {
        removeTaskBtn[i].addEventListener('click', removeTask);
    }

    for (let i = 0; i < checkTaskEl.length; i++) {
        checkTaskEl[i].addEventListener('click', checkTask);
    }
}

function addTask(){
    if (newTaskEl.value.length > 0) {
        taskList.push(newTaskEl.value);
    }
    newTaskEl.value = '';
    runRows();
}

function removeTask(){
    taskList.splice(this.dataset.id, 1);
    runRows();
}

function checkTask(){
    console.log('checked: ' + this.dataset.id);
}

addTaskBtn.addEventListener('click', addTask);
