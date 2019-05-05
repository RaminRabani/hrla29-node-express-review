const todo_list = require('../database/models.js');

module.exports = {

  // todoList: {
  //   get:
  //   post:
  //   delete:
  // }

  //^ if there are multiple endpoints

  get: (req, res) => {
    console.log('IN GET------');

    const { listName } = req.query;

    todo_list.Todo.findAll({
      where: {
        listName: listName
      }
    })
      .then(items => {
        if (items.length) {
          res.status(200).send(items);
        } else {
          res.status(204).send('No items found');
        }
      })
      .catch(err => {
        res.status(404).send('error getting items', err);
      })
  },

  post: (req, res) => {
    console.log('IN POST-----');

    const { todo, listName } = req.body;

    todo_list.Todo.create({ todo, listName })
      .then( () => {
        res.status(201).send('Post successful!');
      })
      .catch(err => {
        res.status(404).send('Post failed', err);
      })
  },

  delete: (req, res) => {
    console.log('IN DELETE------');

    const { id } = req.query;

  todo_list.Todo.destroy({
    where: {
      id: id
    }
  })
    .then( () => {
      res.status(202).send('Item deleted');
    })
    .catch( err => {
      res.status(404).send('Error deleting item', err);
    })
  }

}
