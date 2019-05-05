const express = require('express');
const path = require('path'); //middleware that we need to include
const parser = require('body-parser'); //middleware that we need to include
const db = require('../database/index.js')//sets up the connection to the db
const todo_list = require('../database/models.js');
const routes = require('./routes.js');


//path and parser are middleware that express uses


const app = express();
const PORT = 3000;

//now lets use middleware
app.use(parser.json()); //this parser will take things coming in and make it json
//req.body, req.query, req.params are all json now thanks to parser
app.use(parser.urlencoded({ extended: true })); //just remember that this needs to be there.

app.use(express.static(path.resolve(__dirname, '../static'))); //this needs to connect where bundle.js is
//because this is ES5 and not ES6. you need to connect to ES5 in order for it to render.

app.use('/api', routes); //This routes every request with the /api endpoint to the routes.js file

///DO ALL OF THIS (plus the app.listen below) EVERY TIME YOU BUILD AN EXRPESS SERVER



//******post and update use req.body */
//*****delete and __________ use req.query*/

//GET

// app.get('/api/todoList', (req, res) => {
//   console.log('IN GET!!!!!!!!!!!');

//   // const {listName} = req.query 
//     // You can decide what these variable names should be if it isn't built/decided yet
//   todo_list.Todo.findAll({
//     where: {
//       listName: listName
//     }
//   })
//     .then(items => {
//       if (items.length) {
//         res.status(200).send(items);
//       } else {
//         res.status(204).send('No items found');
//       }
//     })
//     .catch(err => {
//       res.status(404).send('error getting items', err);
//     })

// });

// //POST
// app.post('/api/todoList', (req, res) => {
//   console.log('IN POST!!!!!!!!!!');
  
//   const { todo, listName } = req.body;

//   todo_list.Todo.create({ todo, listName })
//     .then( () => {
//       res.status(201).send('Post successful!');
//     })
//     .catch(err => {
//       res.status(404).send('Post failed', err);
//     })

// });

// //DELETE
// app.delete('/api/todoList', (req, res) => {
//   console.log('IN DELETE!!!!!!!!!');

//   const { id } = req.query;

//   todo_list.Todo.destroy({
//     where: {
//       id: id
//     }
//   })
//     .then( () => {
//       res.status(202).send('Item deleted');
//     })
//     .catch( () => {
//       res.status(404).send('Error deleting item', err);
//     })
// })

app.listen(PORT, () => {console.log('App is listening on: ', PORT)});


