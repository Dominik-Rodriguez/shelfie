require("dotenv").config();
const express = require('express');
const massive = require("massive");
const controller = require('./controller')
const { SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
      .then(db => {
        app.set("db", db);
        console.log('db connected')
      })
      .catch(err => console.log(err));
    
    app.use(express.json());

    app.get('/api/products', controller.getProducts);
    app.post('/api/products', controller.newItem);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})
