const Todo = require('../data/todos');

const index = (req, res, next) => {
    res.render('/', {todos: Todo.getAll() })
}

// const show = (req, res) => {
//     res.render('/', {
//         todo: Todo.getOne(req.params.id)
//     })
// }

const create = (req, res) => {
    console.log(req.body);
    todos.push(todo);
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