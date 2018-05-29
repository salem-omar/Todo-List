

let  todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
};

let filteredData = filteredTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value);
    filters.searchText = e.target.value;

});


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    filteredData = filteredTodos(todos, filters);
    notYetDone(filteredData);
    renderTodos();
});

renderTodos();

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    let hide = document.querySelector('#hide'); // when is checked an we add a task
    saveTodos(todos, e.target.elements.text.value)

    e.target.elements.text.value = '';
    
});

document.querySelector('#hide').addEventListener('change', function (e) {
    if (e.target.checked) {
        hideCompletedTodos();
    } else {
        renderTodos();
    }
});