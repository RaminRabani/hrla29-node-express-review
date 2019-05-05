const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/todoList')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete);

// router
//   .route('/chores')
//   .get(controller.chores.get);

//^ only if we have different endpoints;

module.exports = router;