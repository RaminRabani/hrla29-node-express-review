# node-express-review

#Start Server <br />
npm install <br />
npm run build <br />
npm start <br />


//** You need to have your todo_list database from the last review sprint

#Exercise-1 <br />
In mysql shell, create a database todo_list if it doesn't exist.  In server/index.js begin setting up your express server and connect to your database. Add a start script to your package.json that will run the server.

//npm install nodemon express body-parser
//If you dont have npm start you have to build it ("start": "nodemon server/index.js")

//** change password in database/index.js if necessary
//1. Write the stuff in index



#Exercise-2 <br />
Build out the GET, POST, and DELETE functions in server/index.js.

//1. Build the GET, POST, and DELETE functions

//After built, test in POSTMAN
  //start with post
    //set localhost:3000/api/todoList
    //set the query params key and value to 'listName' and 'todos'
    //set the body with the todo object to POST

how to check mysql database:
// mysql -u root
//show databases;
//use todo_list
//show tables;
//select * from todos;

#Exercise-3 <br />
Inside your server folder, create a file called "routes.js" and a file called "controller.js". In your index.js file, make it so that requests coming in to the endpoint "/api" are routed to your express router. Inside your router file, route those requests to your controller. Inside your controller, build functionality to check (console.log) that each endpoint is being hit.

//1. make the files in server
//** lookup docs for Router()
//2. write whats in those files
//Test in postman


#Exercise-4 <br />
Build out the functionality of the component such that it can handle GET, POST, and DELETE requests
 
//Copy from index to controller
//Modify client side List and ListEntry
