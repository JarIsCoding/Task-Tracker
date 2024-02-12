function moveTask(status) {
    let taskName = document.getElementById('nametxt').value;
    if (!taskName.trim()) {
        alert("Please enter a task name.");
        return;
    }

    let taskDiv = document.createElement('div');
    taskDiv.className = 'tasksquare pt-2';

    let taskNameParagraph = document.createElement('p');
    taskNameParagraph.className = 'twenty';
    taskNameParagraph.textContent = taskName;
    taskDiv.appendChild(taskNameParagraph);

    let taskOptionsButton = document.createElement('button');
    taskOptionsButton.type = 'button';
    taskOptionsButton.className = 'btn btn-primary button';
    taskOptionsButton.setAttribute('data-bs-toggle', 'modal');
    taskOptionsButton.setAttribute('data-bs-target', '#exampleModal');
    taskOptionsButton.textContent = 'Task Options';
    taskDiv.appendChild(taskOptionsButton);

    let viewTaskButton = document.createElement('button');
    viewTaskButton.type = 'button';
    viewTaskButton.className = 'btn btn-primary button';
    viewTaskButton.setAttribute('data-bs-toggle', 'modal');
    viewTaskButton.setAttribute('data-bs-target', '#exampleModal2');
    viewTaskButton.textContent = 'View Task';
    taskDiv.appendChild(viewTaskButton);

    if (status === 'todo') {
        document.getElementById('todoDiv').appendChild(taskDiv);
        document.getElementById('todoCount').textContent = parseInt(document.getElementById('todoCount').textContent) + 1;
    } else if (status === 'inProgress') {
        document.getElementById('progressDiv').appendChild(taskDiv);
        document.getElementById('inProgressCount').textContent = parseInt(document.getElementById('inProgressCount').textContent) + 1;
    } else if (status === 'complete') {
        document.getElementById('completeDiv').appendChild(taskDiv);
        document.getElementById('completeCount').textContent = parseInt(document.getElementById('completeCount').textContent) + 1;
    }
}