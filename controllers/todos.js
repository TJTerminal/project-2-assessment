const Todo = require('../data/todos');

const index = (req, res, next) => {
    res.render('index', {
        title: 'Todo List',
        todos: Todo.getAll() })
}

// const show = (req, res) => {
//     res.render('/', {
//         todo: Todo.getOne(req.params.id)
//     })
// }

const create = (req, res) => {
    console.log(req.body.todos);
    todos.push(todos);
    req.body.done = false;
    Todo.create(req.body);
    res.render('/')
}

const deleteTodo = (req, res) => {
    todos.splice(id, 1);
    Todo.deleteTodo(req.params.id);
    res.render('/')
}

module.exports = {
    index,
    // show,
    create,
    deleteTodo
}