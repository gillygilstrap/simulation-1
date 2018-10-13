const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const productController = require('./products_controller')
// const dotenv = require('dotenv');
// dotenv.config();
require('dotenv').config();




massive(process.env.CONNECTION_STRING).then(database => {
    console.log('Database Conection is good')
    app.set('db', database);
    // console.log('check this out',database)
}).catch(error => {
    console.log('error connection to database')
})

const app = express();
app.use(bodyParser.json());

app.get('/products', productController.getInventory)
app.post('/products', productController.newItem)
app.delete('/products/:id', productController.deleteItem)
// app.get('/api/products', productController.getAll)
// app.get('/api/products/:id', productController.getOne)
// app.put('/api/products/:id', productController.update)
// app.post('/api/products', productController.create)
// app.delete('/api/products/:id', productController.delete)



const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
