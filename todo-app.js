const todos = [
    { text: 'Order cat food', completed: false },
    { text: 'Clean kitchen', completed: true },
    { text: 'Buy food', completed: true },
    { text: 'Do work', completed: false },
    { text: 'Exercise', completed: true }
];


const filters = {
    searchText: ''
};

// let notDoneYet = 0;

function notYetDone(items) {
    let count = 0;
    items.forEach(function (item) {
        if (!item.completed) 
            count +=1;
       });

       return count;
}

filteredTodos = function (todos, filters) {

        
    return todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
}

let filteredData = filteredTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
     console.log(e.target.value);
    filters.searchText = e.target.value;
    
});

function renderTodos() {
    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#title').innerHTML = '';

    const h2 = document.createElement('h2');   
    h2.textContent = `You have ${notYetDone(filteredData)} todos left`;
    document.querySelector('#title').appendChild(h2);


    filteredData.forEach(function (todo) {
    // todos.forEach(function (todo) {
       
        let ps = document.createElement('p');
        ps.textContent = todo.text;
        document.querySelector('#todos').appendChild(ps);

    });
}

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    filteredData = filteredTodos(todos, filters);
    notYetDone(filteredData);
    renderTodos();
});

renderTodos();

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault();
   
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });
    filteredData = filteredTodos(todos, filters);
    renderTodos();
    e.target.elements.text.value = '';
    
});