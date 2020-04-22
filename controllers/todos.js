const Todo = require('../data/todos');

const index = (req, res, next) => {
    res.render('index', {
        title: 'Todo List',
        todos: Todo.getAll() })
}

const create = (req, res) => {
    console.log(req.body.todos);
    Todo.getAll().push(req.body)
    res.render('index', {
        title: 'Todo List',
        todos: Todo.getAll() })
}

const deleteTodo = (req, res) => {
    Todo.getAll().splice(req.params.id, 1);
    res.render('index', {
        title: 'Todo List',
        todos: Todo.getAll() })
}



module.exports = {
    index,
    // show,
    create,
    deleteTodo
}