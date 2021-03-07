const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const deleteBtn = document.querySelector('#btndeleteAll');
const taskList = document.querySelector('#task-list');


deleteBtn.addEventListener('click',deleteAllTask); // delete all item
form.addEventListener('submit',addNewTask);    // submit event
taskList.addEventListener('click',deleteTask);  //delete an item



function deleteAllTask(e) {
    confirm('Are you sure?')
    taskList.innerHTML='';

    e.preventDefault();
}

function addNewTask(e) {
    if(input.value ===''){
        alert('add new item');
    }

    // create li
    const li= document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    // create a
    const a =document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

    // clear input
    input.value='';

    e.preventDefault();
}

function deleteTask(e) {
    if(e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }


    e.preventDefault();
}