// Fetch existing todos from localStorage is they exist

const getSavedTodos = function () {
    let todosJSON = localStorage.getItem('todos');

    if (todosJSON != null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

// Save todos to localStorage

const saveTodos = function (todos, todo) {

    if (todo != '') { // IGNORE attempts to add an empty task
        todos.push({
            id: uuidv4(),
            text: todo,
            completed: false
        });

        localStorage.setItem('todos', JSON.stringify(todos));

        filteredData = filteredTodos(todos, filters);
        if (hide.checked) {
            hideCompletedTodos();
        } else {
            renderTodos();
        }

    }
}

function notYetDone(items) {
    let count = 0;
    items.forEach(function (item) {
        if (!item.completed)
            count += 1;
    });

    return count;
}

filteredTodos = function (todos, filters) {

    return todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
}
const generateTodoDom = function (todo) {

    const div = document.createElement('div');
    const chkbox = document.createElement('input');
    chkbox.setAttribute('type', 'checkbox');
    // chkbox.type = 'checkbox';
    const button = document.createElement('button')
    button.textContent = 'x';

    let text  = document.createElement('span');
    text.textContent = todo.text;

    div.appendChild(chkbox);
    div.appendChild(text);
    div.appendChild(button);

    document.querySelector('#todos').appendChild(div);
}
function renderTodos() {
    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#title').innerHTML = '';

    const h2 = document.createElement('h2');
    h2.textContent = `You have ${notYetDone(filteredData)} todos left`;
    document.querySelector('#title').appendChild(h2);


    filteredData.forEach(function (todo) {

        generateTodoDom(todo);
       
    });
}

function hideCompletedTodos() {
    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#title').innerHTML = '';

    const h2 = document.createElement('h2');
    h2.textContent = `You have ${notYetDone(filteredData)} todos left`;
    document.querySelector('#title').appendChild(h2);
    
    todos.forEach(function (todo) {
        if (!todo.completed) {
            generateTodoDom(todo);
        }
    });
}