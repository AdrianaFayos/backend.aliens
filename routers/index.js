const express = require('express');
const app = express();
const port = 3000;
const db = require('../../../db');
const router = require('../router');

// Middleware
app.use(express.json());
app.use(router);

// Starting server
db
.then(() => {
    app.listen(port, () => console.log(`Node server up and running at http://localhost:${port}`));
})
.catch ((err) => console.log(err.message))